const cartService = require("../services/cart.service.js")


const findUserCart = async (req, res) => {
    const user = req.user;
    try {
        const cart = await cartService.findUserCart(user._id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message:"problem in cartcontroller findUserbycart"
        })
    }
}

const addItemToCart = async (req, res) => {
    const user = req.user;
    console.log("user",user);
    console.log("body",req.body)
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(200).send(cartItem);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in cartcontroller addItemToCart"
        })
    }
}


module.exports = {
    findUserCart,
    addItemToCart,
}