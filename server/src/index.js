const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose();

const app = express()
const port = 3001

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3000'],
  credentials: true
}));

function init_db(db) {
    // Create the account table if it doesn't exist already
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT UNIQUE NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL
        )
    `);

    // Create the login sessions table if it doesn't already
    db.run(`
        CREATE TABLE IF NOT EXISTS sessions (
          id TEXT PRIMARY KEY,
          user_id INTEGER NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `);

    // Create a table for reviews if it doesn't exist already
    db.run(`
        CREATE TABLE IF NOT EXISTS reviews (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id INTEGER NOT NULL,
          restaurant TEXT NOT NULL,
          review_text TEXT NOT NULL,
          timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `);
}

const db = new sqlite3.Database('users.db');
init_db(db);

// HANDLERS
app.post('/register', function (req, response) {
    console.log("Received register command");
    const { username, email, password } = req.body;

    // Validate (they may not exist or be the expected type per docs)
    if (!username || !email || !password) {
        console.error("Expected params were empty or did not exist.");
        return response.status(400).json({ message: "Successfully registered"});
    }

    // Insert new user
    // May fail if user already exists
    db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', username, email, password, function(err) {
        if (err) {
            console.error("Could not create user!", err.message);
            return response.status(400).json("Failed to create user: " + err.message);
        }

        const user_id = this.lastID;
        const session_id = uuidv4();

        // Create a session for the registered user
        db.run('INSERT INTO sessions (id, user_id) VALUES (?, ?)', [session_id, user_id], (err) => {
            if (err) {
                console.error("Could not create a new session for the user", err.message);
                return response.status(500).json({ message: "User created but session creation failed: " + err.message });
            }

            response.cookie('session_id', session_id, {
                httpOnly: false
            });
            return response.status(201).json({ 
                message: "Successfully registered", 
                session_id: session_id 
            });
        });
    });
});

app.post('/login', function (req, response) {
    console.log("Received login command");
    const { username, password } = req.body;

    // Validate (they may not exist or be the expected type per docs)
    if (!username || !password) {
        console.error("Expected params were empty or did not exist.");
        return response.status(400).send();
    }

    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, user) => {
        if (err || !user) {
            console.error("The specified user does not exist.", err ? err.message : "User not found");
            return response.status(400).send();
        }

        const session_id = uuidv4();

        db.run('INSERT INTO sessions (id, user_id) VALUES (?, ?)', [session_id, user.id], (err) => {
            if (err) {
                console.error("Could not create a new session for the user", err.message);
                return response.status(400).send();
            }

            response.cookie('session_id', session_id, {
                httpOnly: false
            });
            return response.status(200).json({ message: "Succesfully logged in", session_id: session_id });
        });
    });
});

app.post('/reviews', function (req, response) {
    console.log("Received post review command");
    const { session_id, restaurant, review } = req.body;

    if (!session_id || !restaurant || !review) {
        console.error("Expected params were empty or did not exist.");
        return response.status(400).send();
    }

    db.get('SELECT user_id FROM sessions WHERE id = ?', [session_id], (err, session) => {
        if (err || !session) {
            console.error("Could not find the corresponding session for the session_id", err ? err.message : "Session not found");
            return response.status(400).send();
        }

        const user_id = session.user_id;

        db.run('INSERT INTO reviews (user_id, restaurant, review_text) VALUES (?, ?, ?)', 
            [user_id, restaurant, review], (err) => {
                if (err) {
                    console.error("Could not submit the review", err.message);
                    return response.status(400).send();
                }
                return response.status(200).json({ message: "Successfully posted review" });
            });
    });
});

app.get('/reviews/:restaurant', function (req, response) {
    console.log("Received get reviews command");
    const restaurant = req.params.restaurant;

    db.all(`
        SELECT reviews.*, users.username 
        FROM reviews 
        JOIN users ON reviews.user_id = users.id 
        WHERE reviews.restaurant = ?
        ORDER BY reviews.timestamp DESC
    `, [restaurant], (err, reviews) => {
        if (err) {
            console.error("Could not find the requested restaurant", err.message);
            return response.status(400).send();
        }
        return response.status(200).json({ reviews });
    });
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})
