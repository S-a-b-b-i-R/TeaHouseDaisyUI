/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            backgroundImage: {
                "btn-gradient":
                    "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
            },
        },
    },
    plugins: [],
};
