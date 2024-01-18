const { Pool } = require('pg');

const pool = new Pool({
    user: 'dnr_user',
    host: 'localhost',
    database: 'dnr_db',
    password: '2310',
    port: 5432,
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error("Error connecting to the database", err.stack);
    } else {
        console.log("Database connected successfully!", res.rows[0]);
    }
});

// ... rest of your Express server setup

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Use body-parser to parse JSON payloads
app.use(bodyParser.json());

// Use CORS middleware to handle cross-origin requests from your Chrome extension
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/checkPhone/:phoneNumber', (req, res) => {
    const phoneNumber = req.params.phoneNumber;

    pool.query('SELECT * FROM dnr_table WHERE phone_number = $1', [phoneNumber], (error, results) => {
        if (error) {
            throw error;
        }

        const isInDNR = results.rows.length > 0;
        res.json({ isInDNR: isInDNR });
    });
});
