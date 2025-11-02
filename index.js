import express from "express";

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/none", (req, res) => {
  res.send("not Found");
});

app.get("/home", (re, res) => {
  res.send([
    {
      name: "Shayan Shah",
      age: 23,
      experience: "Frontend Developer",
    },
  ]);
});

// app.get("/:username/:id", (req, res) => {
//   console.log(req.params);

//   const { username, id } = req.params;

//   res.send(`Welcome to the page of @${username}.`);
// });

// Query

app.get("/search", (req, res) => {
  console.log(req.query);

  const { qr } = req.query;

  //   res.send("no result found");

  res.send(`You search for ${qr}`);
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:8080`);
});
