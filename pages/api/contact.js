import { MongoClient } from 'mongodb';


async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === ""
        ) {
            return res.status(422).json({ message: "Invalid input" })
        }

        let client;
        try {
            const url = process.env.mongodb_connect;


            client = new MongoClient(url);
            await client.connect();
        } catch (error) {
            if (!savedMessage) return res.status(500).json({ message: "DB Connection failed" })
        }

        const dbName = process.env.mongodb_database;
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('contact');

        const newMessage = {
            email,
            name,
            message
        }

        try {
            await collection.insertOne(newMessage)
        } catch (error) {
            return res.status(500).json({ message: "Server error happened" })
        }

        res.status(201).json({ message: "Successfully stored message", message: newMessage });
        client.close()

    }
}


export default handler;