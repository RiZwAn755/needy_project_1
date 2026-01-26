/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Add custom fonts here if needed, e.g., 'sans': ['Inter', 'sans-serif']
            },
            colors: {
                // Define custom medical/premium colors here
                'medical-primary': '#dc2626', // Red 600
                'medical-accent': '#2563eb',  // Blue 600
            },
        },
    },
    plugins: [],
}
