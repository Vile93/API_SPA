/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#040404',
                secondary: '#909090',
                link: '#0032e2',
            },
        },
    },
    plugins: [],
};
