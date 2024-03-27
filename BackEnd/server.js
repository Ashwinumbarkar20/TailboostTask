const express=require("express");

const app=express();

const router=require("../BackEnd/Router/auth-router")

app.use("/api/auth",router)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));