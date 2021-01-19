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
	const body = req.body;

	//check if have all required fields
	if (!validation.requires(body)) {
		return res.send({
			status: 422,
			msg: "missing fields",
		});
	}
	//iterate over fields and check validity
	for (const key in body) {
		if (!validation.values(body[key].value, key)) {
			return res.send({
				status: 422,
				msg: "invalid fields",
			});
		}
	}

	return res.send({
		status: 200,
		msg: "valid",
	});
});

app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);
});
