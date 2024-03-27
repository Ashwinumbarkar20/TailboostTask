const express =require("express");
const router=express.Router();
router.get("/",((req,res)=>{
res.status(200).send("Via express router app")
}))
module.exports=router;
