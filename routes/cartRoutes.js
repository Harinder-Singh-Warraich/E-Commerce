const express=require("express");
const router=express.Router();
const User=require("../models/userData")
const Product=require("../models/product");
const {isLoggedIn}=require("../middleware");

router.post("/products/:id/add",isLoggedIn, async(req,res)=>{
    const {id}=req.params;
    const product =await Product.findById(id);
    const currentUser=req.user;
    currentUser.cart.push(product);
    await currentUser.save();
    req.flash("success","Item added to your cart");
    res.redirect(`/products/${id}`);
})
router.get("/cart",isLoggedIn,async (req,res)=>{
    const id=req.user.id;
    const user=await User.findById(id).populate("cart");
    res.render("cart/cart",{user});
})
router.patch("/cart/:id",isLoggedIn,async(req,res)=>{
    const {id}=req.params;
    const user=req.user;
    await User.findByIdAndUpdate(user.id,{$pull:{cart:id}})
    res.redirect("/cart");
})

module.exports=router;