const express=require("express");
const router=express.Router();
const Product=require("../models/product");
const Review=require("../models/review");
const {isLoggedIn}=require("../middleware");

//See all the products
router.get("/products",async (req,res)=>{
    const products=await Product.find({});
    res.render("products/home",{products});
})

//New product page
router.get("/products/new",(req,res)=>{
    res.render("products/new");
})

//Add a new product
router.post("/products",isLoggedIn, async (req,res)=>{
    const product={
        ...req.body
    }
    await Product.create(product);
    req.flash("success","Product added successfully");
    res.redirect("/products");
})

//Show a product
router.get("/products/:id",async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id).populate("reviews");
    res.render("products/show",{product});
})

//Edit product page
router.get("/products/:id/edit",isLoggedIn, async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render("products/edit",{product});
})

//Edit a product
router.patch("/products/:id",async (req,res)=>{
    const update=req.body;
    const {id}=req.params;
    await Product.findByIdAndUpdate(id,update);
    res.redirect(`/products/${id}`);
})

//Delete a product
router.delete("/products/:id",isLoggedIn ,async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success","Product deleted successfully");
    res.redirect("/products");
})

//Enter a commment
router.post("/products/:id/review",isLoggedIn, async(req,res)=>{
    const {rating,comment}=req.body;
    const {id}=req.params;
    const product=await Product.findById(id);
    const review=new Review({rating,comment,user:req.user.username});
    product.reviews.push(review);
    await review.save();
    await product.save();
    req.flash("success","Review created");
    res.redirect(`/products/${id}`);
})


module.exports=router;