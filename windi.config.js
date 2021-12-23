import { defineConfig } from "windicss/helpers";

export default defineConfig({
  //darkMode: 'class', // or 'media'
  attributify: true,
  preflight: false,
  plugins: [
    require("windicss/plugin/typography"),
    require("windicss/plugin/forms"),
    // ...
  ],
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green":
      "text-white bg-green-400 active:bg-green-700 disabled:opacity-50",
    "btn-pink": "text-white bg-pink-400 active:bg-pink-700 disabled:opacity-50",
    "btn-red": "text-white bg-red-400 active:bg-red-700 disabled:opacity-50",
    "btn-yellow":
      "text-white bg-yellow-300 active:bg-yellow-700 disabled:opacity-50",
    "btn-blue": "text-white bg-blue-400 active:bg-blue-700 disabled:opacity-50",
    icon: "hover:text-blue-500",
    "is-active": "text-blue-500",
  },
});
