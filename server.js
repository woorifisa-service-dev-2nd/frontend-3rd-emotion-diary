/* eslint-disable no-else-return */
const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
  console.log("http://localhost:5173/ called");
  res.sendFile(__dirname + "/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  const request = require("request");

  const checkSentence = "오늘밥을먹었다";

  const URL = `https://mora-bot.kr/api/v1/grammar?string=${checkSentence}`;
  console.log(URL);
  // 외부 api서버에 전송
  request.get(URL, (error, response) => {
    res.send(response.body);
    console.log(response.body);
  });
});

const port = 5173;
app.listen(port, () =>
  console.log(`http://localhost:${port}/ app listening on port ${5173}`)
);
