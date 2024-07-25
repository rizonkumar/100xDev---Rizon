const zod = require("zod");

/**
{
	email: "string"
	password: "atleast 8 character"
	country: "IN", "US"
}
 */


function validateInput(obj) {
    const schema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(8),
      country: zod.array(zod.enum(["IN", "US"])),
    });

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "rizon.kumar@gmail.com",
    password: "Rizzooon",
    country: ["IN", "US"]
})
