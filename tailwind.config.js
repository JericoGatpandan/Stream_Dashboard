module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                epilogue: ['Epilogue', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                'instrument-sans': ['Instrument Sans', 'sans-serif'],
            },
            screens: {
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
}