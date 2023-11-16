const { writeFile } = require("fs");
const { join } = require("path");
const isoFetch = require("isomorphic-fetch");

let filePath = join(__dirname, "popular-articles.json");

isoFetch("https://www.reddit.com/r/programmingHumor.json")
  .then((res) => res.json())
  .then(({ data: { children } }) => {
    let articles = [];
    for (let article of children) {
      articles.push({
        url: article.data.url,
        title: article.data.title,
        author: article.data.author,
      });
    }

    writeFile(filePath, JSON.stringify(articles), (err) => {
      if (err) return console.error(err);
      console.log("wrote articles");
    });
  })
  .catch((err) => console.error(err));
