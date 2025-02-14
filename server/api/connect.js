import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://joaopbcardoso:umKRn7VxQRafEMp2@flowbeat.ij6tj.mongodb.net/?retryWrites=true&w=majority&appName=flowbeat"

const client = new MongoClient(URI);

export const db = client.db('FlowBeat');
// const songCollection = await db.collection('songs').find({}).toArray();

