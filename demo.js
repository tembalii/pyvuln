const express = require("express");
const app = express();
const port = 3000;
const puppeteer = require("puppeteer");

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `https://${req.query.name}`;
  // proruleid: puppeteer-express
  await page.goto(url);

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
});

app.post("/test", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // proruleid: puppeteer-express
  await page.setContent(`${req.body.foo}`);

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
});

const controller1 = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const body = req.body.foo;
  // proruleid: puppeteer-express
  await page.setContent("<html>" + body + "</html>");

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
};

app.post("/test2", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // proruleid: puppeteer-express
  await page.evaluateOnNewDocument(`${req.body.foo}`);

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
});

const controller2 = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const body = req.body.foo;
  // proruleid: puppeteer-express
  await page.evaluate("alert(" + body + ")");

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
};

app.post("/test2", controller);

app.post("/ok-test", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // ok: puppeteer-express
  await page.goto("https://example.com");

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
});

const controller3 = async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // ok: puppeteer-express
  const body = "<div>123</div>";
  await page.setContent("<html>" + body + "</html>");

  await page.screenshot({ path: "example.png" });
  await browser.close();

  res.send("Hello World!");
};

app.post("/ok-test2", controller);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
