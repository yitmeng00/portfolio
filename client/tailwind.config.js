/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: {
                    100: "#F4EEE8",
                    200: "#F2E6D9",
                    300: "#E1C8AB",
                    400: "#C1A788",
                    500: "#5F554A",
                    600: "#504538",
                },
            },
        },
    },
    plugins: [],
};
