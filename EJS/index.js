import express from "express";

// Import to Get access
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 8080;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// serve static assets from public folder
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as the view engine

// Routes
app.get("/", (req, res) => {
  res.render("home"); // No need to add .ejs
});

// your other routes here...

// 404 handler (place after other routes)
app.get("", (req, res) => {
  res.status(404).render("invalid", {
    title: "404 - Not Found",
    heading: "Page Not Found",
    message: "Sorry! The page you’re looking for doesn’t exist.",
  });
});

app.get("/about", (req, res) => {
  res.send("Weclome to the About me");
});

app.get("/roller", (req, res) => {
  const dbRoller = Math.floor(Math.random() * 6)+1;

  res.render("roller.ejs", { dbRoller });
});

// Instagram Ejs

app.get('/ig/:username', (req, res) => {
  const { username } = req.params;
  res.render('instagram.ejs',{username})
})

// How to get Params




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
