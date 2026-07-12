import Express from "express";

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Casino TMA Bot API Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});

