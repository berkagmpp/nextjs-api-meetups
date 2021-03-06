import { MongoClient } from 'mongodb';

// this is never be exposed to the client, always credential
// this is a secure place to store credential
// POST /api/new-meetup

async function handler (req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Berkagmpp:iHvCmVMWmdAmfW7m@cluster0.xhth6cm.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupCollection = db.collection('meetups');

        const result = await meetupCollection.insertOne(data);   //  insert 1 new documents (data) into this meetupCollection

        console.log(result);

        client.close();     // close the database connection once it's done

        // from here send response
        res.status(201).json({message: 'Meetup inserted!'});    // set a HTTP status code of the response which will be returned
    };
};

export default handler;