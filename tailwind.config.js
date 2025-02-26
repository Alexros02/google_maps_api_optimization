/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark", "cupcake",{
            mytheme: {
                primary: "#D4AF37",
                secondary: "#2C3E50",
                accent: "#FAF3DD",
                neutral: "#2C2C2E",
                "base-100": "#FAF3DD",
            },
        },],
    },
};
