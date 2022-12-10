import { MongoClient } from "mongodb";

const handler = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  res.status(201).json({ message: "ok", meetups });
  client.close();
};
