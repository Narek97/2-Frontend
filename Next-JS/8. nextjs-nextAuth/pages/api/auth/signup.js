import { connectToDatabase } from "../../../util/db";
import { hashPassword } from "../../../util/auth";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({ message: "Invalid email or password" });
      return;
    }

    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: "User already exists" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!", data: result });
    client.close();
  }
}

export default handler;
