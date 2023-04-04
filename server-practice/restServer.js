const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const users = {}; // 데이터 저장용

http
  .createServer(async (req, res) => {
    try {
      if (req.method === "GET") {
        if (req.url === "/") {
          let data = await fs.readFile(path.join(__dirname, "restFront.html"));
          res.writeHead(200, { "Content-Type": "text/html charset=utf-8" });
          return res.end(data);
        }
        if (req.url === "/about") {
          const data = await fs.readFile(path.join(__dirname, "about.html"));
          res.writeHead(200, { "Content-Type": "text/html charset=utf-8" });
          return res.end(JSON.stringify(data));
        }
        if (req.url === "users") {
          res.writeHead(200, {
            "Content-Type": "application/json charset=utf-8",
          });
          return res.end(JSON.stringify(users));
        }
      } else if (req.method === "POST") {
        if (req.url === "/user") {
          let body = "";
          // 요청의 body를 stream 형식으로 받음
          req.on("data", (data) => {
            body += data;
          });
          // 요청의 body를 다 받은 후 실행됨
          return req.on("end", () => {
            console.log("POST 본문(Body):", body);
            const { name } = JSON.parse(body);
            const id = Date.now();
            users[id] = name;
            res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("등록 성공");
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  })
  .listen(8082, () => {
    console.log("8082번 포트에서 서버 대기중");
  });
