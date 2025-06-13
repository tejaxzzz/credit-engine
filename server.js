const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors'); // ✅

app.use(express.json());
app.use(
  cors({
    origin: "*", // ⚠️ allow all origins (good for testing only)
    methods: ["GET", "POST"],
  })
);
// ✅


// API: Enroll user
app.post('/api/enroll', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });

  credits[userId] = { thankYouCredits: 0 };
  res.status(200).json({ message: 'User enrolled', userId });
});

// API: Get user credits
app.get('/api/credits/:userId', (req, res) => {
  const { userId } = req.params;
  const credit = credits[userId];

  if (!credit) return res.status(404).json({ error: 'User not found' });
  res.status(200).json(credit);
});
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Credit Engine API by Tejas!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
