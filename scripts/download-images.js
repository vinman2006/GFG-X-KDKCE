import fs from 'fs';
import path from 'path';
import https from 'https';

const dataPath = path.join(process.cwd(), 'src', 'data', 'committee.json');
const publicTeamDir = path.join(process.cwd(), 'public', 'team');

// Ensure public/team directory exists
if (!fs.existsSync(publicTeamDir)) {
    fs.mkdirSync(publicTeamDir, { recursive: true });
}

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        // Google Drive direct download URL format
        const file = fs.createWriteStream(dest);

        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Follow redirects
                https.get(response.headers.location, (redirectResponse) => {
                    redirectResponse.pipe(file);
                    file.on('finish', () => {
                        file.close(resolve);
                    });
                }).on('error', (err) => {
                    fs.unlink(dest, () => reject(err));
                });
            } else {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

async function processImages() {
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);
    let updatedCount = 0;

    console.log(`Processing ${data.committee.length} members...`);

    for (let i = 0; i < data.committee.length; i++) {
        const member = data.committee[i];
        if (member.image && member.image.includes('drive.google.com')) {
            try {
                const idMatch = member.image.match(/id=([^&]+)/);
                if (idMatch && idMatch[1]) {
                    const fileId = idMatch[1];
                    // Use the thumbnail endpoint instead of download to bypass virus scan interstitial pages
                    const downloadUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

                    // Generate an SEO-friendly filename based on name, or fallback to fileId
                    const baseName = member.preferred_name || member.name || 'member';
                    const safeName = baseName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                    const fileName = `${safeName}-${fileId.substring(0, 5)}.jpg`;
                    const filePath = path.join(publicTeamDir, fileName);

                    console.log(`Downloading image for ${member.name} via thumbnail API...`);
                    await downloadFile(downloadUrl, filePath);

                    // Update JSON property with local path relative to public directory
                    member.image = `/team/${fileName}`;
                    updatedCount++;
                }
            } catch (err) {
                console.error(`Failed to download image for ${member.name}:`, err.message);
            }
        }
    }

    if (updatedCount > 0) {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 4), 'utf8');
        console.log(`Successfully downloaded ${updatedCount} images and updated committee.json.`);
    } else {
        console.log("No images needed updating or downloads failed.");
    }
}

processImages();
