require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json({ limit: "10kb" }));

const PORT = process.env.PORT || 7013;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
