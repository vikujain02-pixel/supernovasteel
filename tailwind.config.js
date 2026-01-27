/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: "#0f172a", // Slate 900
                    light: "#1e293b",   // Slate 800
                },
                secondary: "#334155", // Slate 700
                accent: "#0284c7",    // Sky 600 - industrial blue
                steel: "#64748b",     // Slate 500
                surface: "#f8fafc",   // Slate 50
                border: "#e2e8f0",    // Slate 200
            }
        },
    },
    plugins: [],
}
