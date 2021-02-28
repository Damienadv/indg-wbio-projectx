const filesystem = require("fs");

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    filesystem.readFile(
      // relative path to file
      `./async-demo/async/data/${filename}`,
      // reading options
      { encoding: "UTF8" },
      // callback
      function (err, content) {
        if (err) {
          reject(err);
        }
        resolve(content);
      }
    );
  });
}

console.log("Reading file async 1.json");
readFile("1.json")
  .then(function (content) {
    console.log("File 1.json returned", content);
    console.log("Reading file async nonexistingfile.json");
    return readFile("nonexistingfile.json");
  })
  .then(function (content2) {
    console.log("File 2.json returned", content2);
    console.log("Reading file async 3.json");
    return readFile("3.json");
  }, function (err) {
    console.log('error', err)
    throw err
  })
  .then(function (content3) {
    console.log("File 3.json returned", content3);
  })
  .catch(function (err) {
    console.log("Oh no, we have error!");
    console.log(err);
  })
console.log("Done scheduling async command");
