require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/health', (req, res) => {
    res.json({ status: 'operational', platform: 'VideoCourts™', version: '1.0.0', agents: 'C25 Swarm Active' });
});

app.get('/api/cases/search', (req, res) => {
    res.json({ success: true, data: [{ id: 'CR-2024-1087', title: 'State v. Dalton', status: 'Pending' }] });
});

app.post('/api/hearings/request', (req, res) => {
    res.json({ success: true, message: 'Virtual appearance request submitted. $1.99 fee charged.' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`🚀 VideoCourts Sovereign Backend running on port ${PORT}`));
