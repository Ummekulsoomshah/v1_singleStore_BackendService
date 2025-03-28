const addProductDb = require("../../../lib/products/addProductDb")

const addProduct=async(req,res,next)=>{
    const {name,category}=req.body
    const productInfo={
        name,category
    }
    try {
        const response=await addProductDb(productInfo)
        res.status(200).json({
            message:'product added'
        })
    } catch (error) {
        next(error)
    }
}
module.exports=addProduct