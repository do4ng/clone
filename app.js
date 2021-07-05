const fs = require("fs");
const path = require("path");
const colors = require("colors")

function isdir(dir) {
    try {
        return fs.lstatSync(dir).isDirectory();
    } catch (e) {
        return false;
    }
}

function read(dir, out, output, course) {
    const p = fs.readdirSync(dir);
    p.forEach((e) => {
        if(isdir(path.join(dir, e))) {
            if (!fs.existsSync(path.join(out, e))) {fs.mkdirSync(path.join(out, e))}
            read(path.join(dir, e), path.join(out, e), output, course);
        
        } else {
            if (course) console.log(`${path.join(dir, e).bold}`)
            fs.writeFileSync(path.join(out, e), fs.readFileSync(path.join(dir, e)));
        }
    })
}

function Clone(dir, out, output = false, course = false) {
    if (!fs.existsSync(out)) {fs.mkdirSync(out)}
    if (output) console.log(`${"Cloning".blue} into '${out}'...`);
    read(dir, out, output, course);
}

// Clone("./test/o", "./test/i");

module.exports.clone = Clone;
module.exports.isDirectory = isdir;
module.exports.read = read;