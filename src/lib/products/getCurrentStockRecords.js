const db = require('../../db/db');

const getCurrentStockRecords = async (prodId) => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM current_stock WHERE product_id = ?', [prodId], (err, rows) => {
            if (err) {
                console.error('Error fetching data from current_stock table:', err.message);
                reject(err); 
            } else {
                resolve(rows); 
            }
        });
    });
};

module.exports = getCurrentStockRecords;
