const rimraf = require("rimraf");

const args = process.argv.slice(2).join("");

rimraf.sync(args);
