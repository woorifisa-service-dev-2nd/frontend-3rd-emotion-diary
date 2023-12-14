const HTTP = require("superagent");
/* eslint-disable no-else-return */
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  console.log("http://localhost:5173/ called");
  res.sendFile(__dirname + "/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  const checkSentence = req.body.query;

  const URL = encodeURI(
    `https://mora-bot.kr/api/v1/grammar?string=${checkSentence}`
  );
  // 외부 api서버에 전송
  HTTP.post(URL)
    .send(req.body)
    .set("Content-Type", "application/json")
    .end((error, result) => {
      if (result.statusCode === 200) {
        response.send(result.body);
      } else {
        console.error(error);
      }
    });
});

const port = 3000;
app.listen(port, () =>
  console.log(`http://localhost:${port}/ app listening on port ${3000}`)
);
