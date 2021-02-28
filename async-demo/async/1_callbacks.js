// This is called pyramid of DOOM
const fs = require("fs");
fs.readFile('./async-demo/async/data/1.json', { encoding: "UTF8" }, function (
  err,
  contentFirst
) {
  if (err) {
    throw err;
  }
  console.log("Got first file", contentFirst);
  fs.readFile('./async-demo/async/data/2.json', { encoding: "UTF8" }, function (
    err,
    contentSecond
  ) {
    if (err) {
      throw err;
    }
    console.log("Got second file", contentSecond);
    fs.readFile(
      './async-demo/async/data/3.json',
      { encoding: "UTF8" },
      function (err, contentThird) {
        if (err) {
          throw err;
        }
        // OOOPS - undefined!
        console.log("Got third file", contentThird);
      }
    );
  });
});
// Horrible code became even more horrible!
