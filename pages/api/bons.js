import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [bons] = await db.query(`
      SELECT bon.*, ligne_bon.* 
      FROM bon 
      LEFT JOIN ligne_bon ON bon.id = ligne_bon.bon_id
    `);
    res.status(200).json(bons);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des bons' });
  }
}