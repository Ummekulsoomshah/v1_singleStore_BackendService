const db=require('../../db/db')
const addProductDb=(productData)=>{
    const {name,category}=productData
    try {
        db.run('insert into products (name,category) values(?,?)',[name,category])
    } catch (error) {
        throw new Error(error)
    }
}
module.exports=addProductDb