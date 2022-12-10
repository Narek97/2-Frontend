import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // const { title, image, address, description } = req.body.data;
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result, "result");
    client.close();
    res.status(201).json({ message: "ok", result });
  }
};

export default handler;
