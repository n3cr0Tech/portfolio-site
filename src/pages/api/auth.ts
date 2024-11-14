export default function handler(req:any, res:any) {
    // Set a password; in production, consider using environment variables
    const correctPassword = process.env.PASSWORD ?? "asdfghjkl";
  
    if (req.method === 'POST') {
      const { password } = req.body;
  
      if (password === correctPassword) {
        res.status(200).json({ authorized: true });
      } else {
        res.status(401).json({ authorized: false, message: 'Unauthorized' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  