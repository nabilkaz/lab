import React from "react";
import { Code } from "bright";

export default function About() {
  return (
    <main className="flex flex-col">
      <h1 className="text-lg font-semibold text-gray-950 mb-3">
        Designing &amp; leading
      </h1>
      <h2 className="text-base text-gray-700 mb-6">
        Hi, I&apos;m Nabil, a product designer based in California.
      </h2>
      <p className="text-base text-gray-700 max-w-xl">
        I lead design for AI-driven experiences, helping teams build intuitive,
        high-impact products. Over the past decade, I&apos;ve worked with Credit
        Karma, Google, Airbnb, Knight Foundation, and Octopus Creative. I&apos;m
        passionate about empowering others to create exceptional, model-driven
        user experiences&mdash;and always exploring how design and technology
        can work together to make things better.
      </p>
      <div className="mt-8 max-w-xl">
        <Code lang="js">{`// Always learning new things!
const currentFocus = [
  "Next.js",
  "TypeScript",
  "AI agents"
];

console.log("Curiosity never stops 🚀", currentFocus);`}</Code>
      </div>
    </main>
  );
}
