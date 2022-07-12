import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const connection = await MongoClient.connect(
    `mongodb+srv://ozanbilgic:admin123@$authorquotes.rgygimi.mongodb.net/?retryWrites=true&w=majority`
  );

  return connection;
}

export async function getData(db) {
  const store = await connectDatabase(db);

  const database = store.db();

  const documents = await database.collection(db).find().toArray();
  return documents;
}
