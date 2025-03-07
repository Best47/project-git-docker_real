const express = require("express");
const app = express();
const port = 3099;

app.get("/finalTest", (req, res) => {
  res.send("korkiat somha 6604305001317<br> thanapat hwannun 6604305001329");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/finalTest`);

});
