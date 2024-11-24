const express = require("express")

const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).send({
        message: "welcome to ecommerce api - node",
        status: true
    })
})

const authRouters = require("./routes/authroute.js")
app.use("/auth", authRouters);

const userRouters = require("./routes/user.route.js")
app.use("/api/users", userRouters);

const productRouters = require("./routes/product.route.js")
app.use("/api/products",productRouters)

const adminproductRouters = require("./routes/adminproduct.routes.js")
app.use("/api/admin/products", adminproductRouters)

const cartRouters = require("./routes/cart.routes.js")
app.use("/api/cart", cartRouters)

const cartItemRouter = require("./routes/cartItems.routes.js")
app.use("/api/cart_items", cartItemRouter)

const orderRouter = require("./routes/order.routes.js")
app.use("/api/orders", orderRouter)

const adminOrderRouter = require("./routes/adminOrders.routes.js")
app.use("/api/admin/orders",adminOrderRouter)
const reviewRouter=require("./routes/review.routes.js")
app.use("/api/reviews",reviewRouter)

const ratingRouter = require("./routes/rating.routes.js")
app.use("/api/ratings", ratingRouter)


module.exports = app;