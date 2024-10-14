const express = require("express");
var cors = require('cors')
const CustomerModel = require ("./model/customerModel")
const app = express();
app.use(cors())
app.use(express.json());
const connectDB = require ("./config/db")


connectDB();

app.post('/customer', async function(req, res, next) {
    const customer = new CustomerModel(req.body);
    try {
        await customer.save();
        res.status(201).send({
            status:"ok",
            message:"customer created successfully", 
            customer
        })
      } catch (error) {
        res.status(500).send(error);
      }    
})

// +++++++++++++ get ++++++++++++++++++++++++++++
app.get("/customer", async (req, res, next) => {
  try {
   const customers = await CustomerModel.find({});
    res.status(200).send({
      status:"ok",
      message:"All records found", 
      customers
  })
  
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.get("/customer/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

   const customers = await CustomerModel.findById(id);
    res.status(200).send({
      status:"ok",
      message:"customer found", 
      customers
  })
  
  } catch (error) {
    res.status(500).send({ error });
  }
});

function listen () {
    console.log("Application is running")
}

app.listen(4000,listen);


