import { snapsave } from "snapsave-media-downloader";
import express from "express";

const app = express();
const port = process.env.PORT | 3000;

app.get("/embed", async function (req, res) {
  var url = req.query["url"];
  if (!url) {
    res.status(400);
    res.send({ error: "url is required query parameter!" });
    return
  }
  const download = await snapsave(url);
  res.send(download);
});

app.listen(port);
console.info(`Listening on port ${port}!`);
