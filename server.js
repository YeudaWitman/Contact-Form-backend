const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const validation = require("./utils/validation");

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true,
	})
);

const countries = ["israel", "france", "spain"];

app.use(cors()); //Enable All CORS Requests

//https://restcountries.eu/rest/v2/all?fields=name
app.get("/countries", (req, res) => {
	res.send({
		status: 200,
		countries,
	});
});

app.post("/", (req, res) => {
	let valid = true;
	for (const key in req.body) {
		if (!validation(req.body[key].value, key)) {
			valid = false;
		}
	}
	return res.send({
		status: valid ? 200 : 422,
		msg: valid ? "valid" : "invalid",
	});
});

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
