import React from "react";

const FormInput = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <label
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          htmlFor="input"
        >
          Enter your text:
        </label>
        <textarea
          id="input"
          rows={10}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-y scrollbar-thin scrollbar-thumb-[#718096] scrollbar-track-[#CBD5E0]"
          placeholder="Type or paste your text here..."
        ></textarea>
        <div className="mt-6">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Summarize
          </button>

          <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reset</button>
        </div>
      </div>
    </>
  );
};

export default FormInput;
