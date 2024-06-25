"use client";
import Head from "next/head";
import { Fragment, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleButtonClick = (content: any) => {
    if (content === "=") {
      try {
        // Evaluate the expression using JavaScript's eval() (not recommended for production)
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (content === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + content);
    }
  };

  const themeClasses =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800";

  return (
    <Fragment>
      <Head>
        <title>Calculadora Online - Seu Site</title>
        <meta
          name="description"
          content="Experimente nossa calculadora online gratuita. Fácil de usar e precisa para todas as suas necessidades de cálculo."
        />
      </Head>
      <div
        className={`min-w-screen min-h-screen flex flex-col items-center justify-center ${themeClasses}`}
      >
        <div className="flex gap-3 justify-between mb-4">
          <h1 className="text-xl font-bold">
            {theme === "dark"
              ? "Dark Theme Calculator"
              : "Light Theme Calculator"}
          </h1>
          <button
            className="px-4 py-2 rounded-md text-sm bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              value={input}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-xl focus:outline-none"
              readOnly
            />
            <input
              type="text"
              value={result}
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-xl mt-2 focus:outline-none"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {["7", "8", "9", "/"].map((item) => (
              <button
                key={item}
                className="btn"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            ))}
            {["4", "5", "6", "*"].map((item) => (
              <button
                key={item}
                className="btn"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            ))}
            {["1", "2", "3", "-"].map((item) => (
              <button
                key={item}
                className="btn"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            ))}
            {["0", ".", "=", "+"].map((item) => (
              <button
                key={item}
                className="btn"
                onClick={() => handleButtonClick(item)}
              >
                {item}
              </button>
            ))}
            <button className="btn" onClick={() => handleButtonClick("C")}>
              C
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

{
  /* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2451935427722392"
          crossOrigin="anonymous"
        ></script> */
}
