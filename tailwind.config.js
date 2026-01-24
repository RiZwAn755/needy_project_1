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
                'medical-primary': '#0ea5e9', // Sky blue example
                'medical-accent': '#38bdf8',
            }
        },
    },
    plugins: [],
}
