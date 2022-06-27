const express=require("express");
//const { render } = require("express/lib/response");
const router=express.Router();
const User=require("../models/userData")
const passport=require("passport");

//SignUp page
router.get("/register",(req,res)=>{
    res.render("authentication/signup");
})

//SignUp
router.post("/register",async(req,res)=>{
    try{
        const userData={
            ...req.body
        }
        const user=new User({
            username:userData.username,
            email:userData.email
        });
        await User.register(user,userData.password);
        req.flash("success",`Welcome ${userData.username} login to continue`);
        res.redirect("/products");
    }
    catch(e){
        req.flash("error","e.message");
        res.redirect("/signup");
    }
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
    req.flash("success",`Welcome ${req.user.username}`);
    res.redirect("/products");
})

//Logout
router.get("/logout",(req,res)=>{
    req.logout();
    req.flash("success","Logout successfull");
    res.redirect("/login");
})
module.exports=router;