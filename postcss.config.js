/*
module.exports = {
    plugins: [
        require("@tailwindcss/postcss"), // Asegura que estás usando el nuevo paquete
        require("autoprefixer"),
    ],
};
*/
module.exports = {
    plugins: {
        'postcss-preset-env': {},
        tailwindcss: {},
        autoprefixer: {},
    },
};