const Product=require("./models/product");
const Review=require("./models/review");
const products=[
    {
        name:"Iphone",
        price:30000,
        img:"https://media.istockphoto.com/photos/blank-screen-mockup-template-on-blue-background-picture-id1305864842?b=1&k=20&m=1305864842&s=170667a&w=0&h=26baoiQWvvJqigm8AM_niH_2Wv4H6lPe5d42xL9uiOw=",
        desc:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. ... The first-generation iPhone came preloaded with a suite of Apple software, including iTunes, the Safari web browser and iPhoto."
    },
    {
        name:"Mac Book",
        price:50000,
        img:"https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        desc:"Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. ... The Apple MacBook Pro packs 512GB of SSD storage. Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports."
    },
    {
        name:"Ipod",
        price:10000,
        img:"https://images.unsplash.com/photo-1587647482405-50089cb95927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBvZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        desc:"The iPod is a pocket-sized portable music-playing device produced by Apple and sold across the world. It's the best-known family of MP3 players and comes in a variety of models. ... iPod Nano – lightweight iPod with touch-screen controls and up to 16GB of space for audio files."
    },
    {
        name:"Iphone",
        price:30000,
        img:"https://media.istockphoto.com/photos/blank-screen-mockup-template-on-blue-background-picture-id1305864842?b=1&k=20&m=1305864842&s=170667a&w=0&h=26baoiQWvvJqigm8AM_niH_2Wv4H6lPe5d42xL9uiOw=",
        desc:"The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. ... The first-generation iPhone came preloaded with a suite of Apple software, including iTunes, the Safari web browser and iPhoto."
    },
    {
        name:"Mac Book",
        price:50000,
        img:"https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        desc:"Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. ... The Apple MacBook Pro packs 512GB of SSD storage. Connectivity options include Wi-Fi 802.11 ac, Bluetooth and it comes with 2 USB ports (2 x USB 3.0), Mic In ports."
    },
    {
        name:"Ipod",
        price:10000,
        img:"https://images.unsplash.com/photo-1587647482405-50089cb95927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBvZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        desc:"The iPod is a pocket-sized portable music-playing device produced by Apple and sold across the world. It's the best-known family of MP3 players and comes in a variety of models. ... iPod Nano – lightweight iPod with touch-screen controls and up to 16GB of space for audio files."
    }
]
const seedDB=async()=>{
    await Product.deleteMany({});
    await Review.deleteMany({});
    await Product.insertMany(products);
    console.log("DB seeded");
}
module.exports=seedDB;