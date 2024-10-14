const mongoose = require("mongoose");



const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    streetAddressLine2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    feedBack: {
        type: String,
        required: true,

    },
    suggestions: {
        type: String,
        required: true,
    }

},
    {
        timestamps: true
    }
)
const CustomerModel = mongoose.model("Customer", customerSchema)
module.exports = CustomerModel