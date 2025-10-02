const wpScriptsExtend = require("./tools/wp-scripts-extend");
const path = require("path");

const cssPath = [
    {
        filename: "admin",
        entry: ["./assets/src/styles/admin.css"],
    },
    {
        filename: "frontend",
        entry: ["./assets/src/styles/frontend.css"],
    },
];

const jsPath = [
    {
        filename: "dashboard",
        entry: ["./assets/src/dashboard.js"],
    },
    {
        filename: "frontend",
        entry: ["./assets/src/frontend.js"],
    },
];

const projectFiles = [...cssPath, ...jsPath];
const entries = projectFiles.reduce((acc, item) => {
    const key = `${item.filename}`;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(item.entry[0]);
    return acc;
}, {});

module.exports = wpScriptsExtend({
    entries,
    aliases: {
        "@": path.resolve(__dirname, "assets/src/"),
    },
});
