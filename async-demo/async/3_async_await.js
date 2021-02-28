const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function print3Files() {
    try {
        console.log("Reading file async 1.json");
        let content = await readFile("./async-demo/async/data/1.json");
        console.log("File 1.json returned", content);
        console.log("Reading file async nonexist.json");
        let content2 = await readFile("./async-demo/async/data/nonexist.json");
        console.log("File 2.json returned", content2);
        console.log("Reading file async 3.json");
        let content3 = await readFile("./async-demo/async/data/3.json");
        console.log("File 3.json returned", content3);
        console.log("Done executing async commands");
    } catch (err) {
        console.log("Oh no, we have error!");
        console.log(err);
        throw err
    }
    return 'TEST'
}
print3Files();
