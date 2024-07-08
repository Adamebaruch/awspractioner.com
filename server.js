const express = require('express');
const path = require('path');
const questions = require('./index.js'); // Import questions from index.js
const app = express();
const port = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname)));

app.get('/api/random-aws-questions', (req, res) => {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    const randomQuestions = shuffledQuestions.slice(0, 10);
    res.json(randomQuestions);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});