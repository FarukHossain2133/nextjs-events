
import { connectDataBase, insertDocuement, getAllDocuments } from '../../../helpers/db-utils';

async function handler(req, res) {

    const eventId = req.query.eventId;

    let client;
    try {
        client = await connectDataBase();
    } catch (error) {
        return res.status(500).json({ message: "Connecting to the db failed" })
    }

    if (req.method === "POST") {
        const { email, name, text } = req.body;

        if (
            !email.includes('@') ||
            !name ||
            name.trim() === "" ||
            !text ||
            text.trim() === ""
        ) {
            client.close();
            return res.status(422).json({ message: "Invalid input" });
        }

        const newComent = {
            eventId: eventId,
            email,
            name,
            text
        }

        try {
            const result = await insertDocuement(client, 'comments', newComent)
            res.status(201).json({ message: "Added comment" })

        } catch (error) {
            res.status(500).json({ message: "insrting failed" });
            client.close();
            return;
        }


    }

    if (req.method === "GET") {

        try {
            const documents = await getAllDocuments(client, 'comments', { _id: -1 });
            res.status(200).json({ comments: documents })
        } catch (error) {
            res.status(201).json({ message: "Getting comemnt failed" })
        }

    }

    client.close();
}

export default handler;