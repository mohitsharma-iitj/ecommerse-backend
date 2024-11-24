const Cart = require("../models/cart_model")
const CartItem = require("../models/cartitem_model")
const Product = require("../models/product_model")
async function createCart(user) {
    try {

        const cart = new Cart({
            user
        });
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({
            user: userId
        });

        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
        
        cart.cartItem = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItems = 0;

        for (let cartItem of cart.cartItem) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItems += cartItem.quantity;
        }
        
        cart.totalPrice = totalPrice;
        cart.totalItem = totalItems;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        
        return cart;
    } catch (error) {
      
        throw new Error(error.message)
    }
}

async function addCartItem(userId, req) {
    try {

        const cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.ProductId);
    
        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId })

        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            })

            const createdCartIem = await cartItem.save();
            cart.cartItem.push(createdCartIem);
            await cart.save();
            return "Item added to cart";
        }else{
            return "already added";
        }

    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports = {
    createCart, findUserCart, addCartItem
}