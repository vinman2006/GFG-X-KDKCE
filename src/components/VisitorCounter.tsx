import { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // 🔹 Use a unique namespace + key for your site (replace `gfgkdkce`)
    fetch("https://api.countapi.xyz/hit/geeksforgeeks-kdkce.vercel.app/visitors")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (
    // <div className="text-center py-4 bg-green-50 mt-5">
      <p className="text-gray-500">
        👀 Geeks' Visits:{" "}
        <span className="font-bold text-green-600">
          {count !== null ? count : "Loading..."}
        </span>
      </p>
    // </div>
  );
};

export default VisitorCounter;
