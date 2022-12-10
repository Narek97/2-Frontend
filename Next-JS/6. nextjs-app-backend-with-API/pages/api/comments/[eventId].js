// import { MongoClient } from "mongodb";

import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/dbUtil";

async function handler(req, res) {
  const { eventId } = req.query;

  // const client = await MongoClient.connect(
  //   "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/events?retryWrites=true&w=majority"
  // );

  let client;

  try {
    client = await connectDatabase("events");
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      !name.trim().length ||
      !text ||
      !text.trim().length
    ) {
      res.status(422).json({ message: "Invalid input" });
      client.close();
      return;
    }

    const newComment = {
      id: Date.now().toString(),
      email,
      name,
      text,
      eventId,
    };

    // const db = client.db();
    // const result = await db.collection("comments").insertOne(newComment);
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
    }
  }

  if (req.method === "GET") {
    // const db = client.db();
    //
    // const documents = await db
    //   .collection("comments")
    //   .find()
    //   .sort({ _id: -1 })
    //   .toArray();

    let documents;
    try {
      documents = await getAllDocuments(client, "comments", { _id: -1 });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed!" });
    }

    res.status(200).json({ comment: documents });
  }

  client.close();
}

export default handler;
