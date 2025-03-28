const { route } = require('../routes/product');

var sqlite3 = require('sqlite3').verbose();
const path = `${__dirname}/inv.db`.replace('app.asar', 'app.asar.unpacked');
console.log(path)
const db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
    }
});

db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS stock_movements (id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id int,
    quantity INTEGER,
    movement TEXT CHECK(movement IN ('add', 'sales', 'remove')) NOT NULL,
    created_at timestamp default current_timestamp,
    FOREIGN KEY (product_id) references products(id))`)

db.run(`CREATE TABLE IF NOT EXISTS current_stock (
        product_id INTEGER PRIMARY KEY,
        quantity INTEGER NOT NULL,
        FOREIGN KEY (product_id) REFERENCES products(id)
    )`, (err) => {
    if (err) console.error("Error creating table:", err.message);
    else console.log("Table 'current_stock' is ready.");
});

// db.all('SELECT * FROM current_stock', [], (err, rows) => {
//     if (err) {
//         console.error('Error fetching data from current_stock table:', err.message);
//     } else {
//         console.log('Entries in products table:', rows);
//     }
// });

module.exports = db