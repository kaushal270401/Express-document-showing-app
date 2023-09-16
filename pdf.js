const express = require("express");
const app = express();
const port = 3001;
var fs = require("fs");

app.get("/", function (req, res) {
  var stream = fs.createReadStream("dummy.pdf");

  const base64string = fs.readFileSync("dummy.pdf", { encoding: "base64" });

  res.setHeader("Content-type", "application/pdf");

  try {
    fs.writeFileSync("docs/test.txt", base64string);
  } catch (err) {
    console.error(err);
  }

  stream.pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
