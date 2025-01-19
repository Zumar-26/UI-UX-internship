// app.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/metrics', require('./routes/metrics'));
app.use('/api/recommendations', require('./routes/recommendations'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Main backend service running on port ${PORT}`);
});