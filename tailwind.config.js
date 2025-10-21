/** Tailwind config adding scope to WpCafe admin root */
module.exports = {
    content: [
        "./assets/src/**/*.{js,ts,jsx,tsx,php}",
        "./core/**/*.php",
        "./templates/**/*.php",
    ],
    safelist: ["md:p-5", "md:grid-cols-3", "max-h-3/4", "bg-white/70"],
    important: [".toplevel_page_wpcafe", ".wpc-reservation-form-root"],
    theme: {
        extend: {},
    },
    plugins: [],
};
