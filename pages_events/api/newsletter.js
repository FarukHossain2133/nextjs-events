
import {connectDataBase, insertDocuement} from '../../helpers/db-utils';


async function handler(req, res) {
    if (req.method === "POST") {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes("@")) {
            return res.status(422).json({ message: "Invalid email address" })
        }

        let client;
        try {
            client = await connectDataBase();
        } catch (error) {
            res.status(500).json({ message: "Connection to the database failed" });
            return;
        }

        try {
            await insertDocuement(client, 'newsletter', { email: userEmail })
            client.close();
        } catch (error) {
            res.status(500).json({ message: "Inserting failed" });
            return;
        }


        res.status(201).json({ message: "Signup up!" })
    }

}

export default handler;