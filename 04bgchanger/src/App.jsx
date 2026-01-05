import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>

            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("indigo");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => {
                setColor("gold");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "gold" }}
            >
              Gold
            </button>
            <button
              onClick={() => {
                setColor("cyan");
              }}
              className="outiline-none px-4 py-1 rounded-full text-white shadow-2xl"
              style={{ backgroundColor: "cyan" }}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
