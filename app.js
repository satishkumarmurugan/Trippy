const express = require("express")
const collection = require("./db")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/checkout", async (req, res) => {
    try {
      const { destination, userId } = req.body; // Assuming userId is sent from frontend
      const newCheckout = new Checkout({ destination, user: userId });
      await newCheckout.save();
      res.status(201).json({ message: "Checkout saved successfully" });
    } catch (err) {
      console.error("Checkout failed:", err);
      res.status(500).json({ message: "Failed to save checkout" });
    }
  });

app.listen(8000,()=>{
    console.log("port connected");
})
