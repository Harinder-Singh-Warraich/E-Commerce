const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const routes=require("./routes/ec-routes");
const seed=require("./seed");
const methodOverride=require("method-override")
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/userData")

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
const sessionConfig={
    secret:"Secret",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(routes);
//seed();
app.get("/",(req,res)=>{
    res.send("Home page");
});


app.listen(3000,(req,res)=>{
    console.log("Up At 3000")
})