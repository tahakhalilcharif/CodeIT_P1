import db from '../../lib/db';

export default async function handler(req, res) {
  try {
    const [articles] = await db.query('SELECT * FROM article');
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des articles' });
  }
}