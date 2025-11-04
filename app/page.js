"use client";

import { useMemo, useState } from "react";

const greetings = [
  "Hi there!",
  "Hello!",
  "Hey friend!",
  "Howdy!",
  "Greetings!"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const message = useMemo(() => greetings[index % greetings.length], [index]);

  return (
    <main className="card">
      <p className="greeting">Agentic hello portal</p>
      <h1>{message}</h1>
      <div className="button-bar">
        <button onClick={() => setIndex((prev) => prev + 1)}>Say it again</button>
        <button onClick={() => setIndex(Math.floor(Math.random() * greetings.length))}>
          Surprise me
        </button>
      </div>
      <p className="note">Tap a button to explore a different way to say hi.</p>
    </main>
  );
}
