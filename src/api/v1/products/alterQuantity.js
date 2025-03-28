const addQuantityDetails = require("../../../lib/products/addQuantityDetails")

const alterQuantity=async(req,res,next)=>{
    const {prodId}=req.params
    const {quantity,movementtype}=req.body
    const qualityInfo={
        prodId,quantity,movementtype
    }
    try {
        const response=await addQuantityDetails(qualityInfo)
        res.status(200).json({
            message:'product quality updated'
        })
    } catch (error) {
        next(error)
    }
}
module.exports=alterQuantity