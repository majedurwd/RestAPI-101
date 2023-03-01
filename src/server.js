const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const shortid = require("shortid")
const path = require("path")
const fs = require("fs/promises")

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbLocation = path.resolve("src", "data.json")

app.post("/create", async (req, res) => {
	const player = {
		...req.body,
		userId: shortid.generate()
	}
	const data = await fs.readFile(dbLocation)
	const players = JSON.parse(data)
	players.push(player)
	
	await fs.writeFile(dbLocation, JSON.stringify(players))

	res.status(200).json({player})
})

app.get("/players", (req, res) => {
	// Start
})

// API Health Check
app.get("/health", (_req, res) => {
	res.status(200).json({ status: "OK" });
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is Running on PORT http://localhost:${port}`);
});
