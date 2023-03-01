const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Health Check
app.get("/health", (_req, res) => {
	res.status(200).json({ status: "OK" });
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is Running on PORT http://localhost:${port}`);
});
