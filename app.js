const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
