import { MongoClient } from 'mongodb';

export async function connectDataBase() {
    const client = await MongoClient.connect('mongodb://localhost:27017/events')
    return client;
}

export async function insertDocuement(client, collection, document) {
    const db = client.db();
    await db.collection(collection).insertOne(document);
}

export async function getAllDocuments(client, collection, sort) {
    const db = client.db();
    const documents = await db
        .collection(collection)
        .find({})
        .sort(sort)
        .toArray();

        return documents;

}