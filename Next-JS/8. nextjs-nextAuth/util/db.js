import { MongoClient } from "mongodb";

export function connectToDatabase() {
  return MongoClient.connect(
    "mongodb+srv://narek:narek123@cluster0.f2udkbv.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
}
