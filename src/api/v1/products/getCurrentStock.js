const getCurrentStockRecords = require("../../../lib/products/getCurrentStockRecords")

const getCurrentStock=async(req,res,next)=>{
    const {prodId}=req.params
    try {
        const response=await getCurrentStockRecords(prodId)
        res.status(200).json({
            stock:response
        })
    } catch (error) {
        next(error)
    }
}
module.exports=getCurrentStock