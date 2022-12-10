import { MongoClient } from "mongodb";

export async function connectDatabase(dbName) {
  return await MongoClient.connect(
    `mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  return await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  return await db.collection(collection).find().sort(sort).toArray();
}
