import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  databaseURL: process.env.FIREBASE_DB_URL
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const data = req.body;
  if (!data) return res.status(400).json({ error: "Missing JSON body" });

  try {
    const updates = {};
    for (const key in data) {
      updates[`swarm/${key}`] = data[key];
    }

    await update(ref(db), updates);
    return res.status(200).json({ status: "Swarm data updated", data });
  } catch (err) {
    return res.status(500).json({ error: "Update failed", detail: err });
  }
}
