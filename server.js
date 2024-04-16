import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(cors());

app.get("/read", (req, res) => {
	fs.readFile("file.txt", "utf8", (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(data);
		}
	});
});

app.post("/write", (req, res) => {
	console.log(req.body);
	const content = JSON.stringify(req.body);
	fs.writeFile("/Users/orion/Lab Notes/test.canvas", content, "utf8", (err) => {
		if (err) {
			res.status(500).send({ error: err.message });
		} else {
			res.send({ status: "success" });
		}
	});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
