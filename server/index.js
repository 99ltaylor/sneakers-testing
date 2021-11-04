const express = require("express");
// var unirest = require("unirest");
const unirest = require("unirest");


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var req = unirest("GET", "https://v1-sneakers.p.rapidapi.com/v1/sneakers");
	req.query({
		"limit": "100"
	});
	req.headers({
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "cc28a70d1fmsh58b52975bb244efp15796bjsnaee22e422c9f",
		"useQueryString": true
	});

	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
