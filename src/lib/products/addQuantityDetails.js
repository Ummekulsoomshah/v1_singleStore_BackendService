const db = require('../../db/db')
const addQuantityDetails = (qualityInfo) => {
    const { prodId, quantity, movementtype } = qualityInfo
    console.log('quantity', quantity)
    try {
        db.run(`insert into stock_movements (product_id,quantity,movement) values(?,?,?)`,
            [prodId, quantity, movementtype], (err) => {
                if (err) console.log(err)
                if (movementtype == 'add') {
                    db.run(
                        `INSERT INTO current_stock (product_id, quantity)
                         VALUES (?, ?)
                         ON CONFLICT(product_id) DO UPDATE SET quantity = quantity + excluded.quantity`,
                        [prodId, quantity],
                        (err) => {
                            if (err) console.error("Error updating stock:", err.message);
                        }
                    );
                }else{
                    db.run(
                        `INSERT INTO current_stock (product_id, quantity)
                         VALUES (?, ?)
                         ON CONFLICT(product_id) DO UPDATE SET quantity = quantity - excluded.quantity`,
                        [prodId, quantity],
                        (err) => {
                            if (err) console.error("Error updating stock:", err.message);
                        }
                    );
                }

            })
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = addQuantityDetails