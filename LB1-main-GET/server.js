const app = require("express")();
require("dotenv").config();

const port = process.env.PORT || 5000;

const getResponse = `
<h1>text/html</h1>
`;

app.get("/endpoint", (req, res) => res.send(getResponse));

app.listen(port, () => console.log(`server running on\n\thttp://localhost:${port}`));
