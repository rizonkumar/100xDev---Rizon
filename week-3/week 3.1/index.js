const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); // array of number my schema will be

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidneys is array of number
  const kidneys = req.body.kidneys;
  // validation
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "Input is Valid",
    });
  } else {
    res.send({
      response,
    });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
