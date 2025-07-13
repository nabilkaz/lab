import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-16 bg-gray-100 mt-16">
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-gray-500 text-sm">
          Generated on a server on{" "}
          {new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          })}
        </p>
      </div>
    </footer>
  );
}
