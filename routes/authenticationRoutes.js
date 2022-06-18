const express=require("express");
const { render } = require("express/lib/response");
const router=express.Router();
const User=require("../models/userData")
const passport=require("passport");

//SignUp page
router.get("/register",(req,res)=>{
    res.render("authentication/signup");
})

//SignUp
router.post("/register",async(req,res)=>{
    const userData={
        ...req.body
    }
    const user=new User({
        username:userData.username,
        email:userData.email
    });
    await User.register(user,userData.password);
    //res.flash("success",`Welcome ${userData.username}`);
    res.redirect("/products");
})

//Login page
router.get("/login",(req,res)=>{
    res.render("authentication/login")
})

//Login
router.post("/login",passport.authenticate("local",{
    failureRedirect:"/login",
    failureFlash:true
}),(req,res)=>{
    res.redirect("/products");
})

//Logout
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/login");
})
module.exports=router;