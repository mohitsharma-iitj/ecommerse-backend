const express = require("express")
const router = express.Router();

const orderController = require("../controller/adminOrder.controller.js")
const authenticate = require("../middleware/authenticate.js")

router.get("/",authenticate,orderController.getAllOrders);
router.put('/:orderId/confirmed',authenticate,orderController.confirmOrder);
router.put('/:orderId/ship', authenticate, orderController.shippOrders);
router.put('/:orderId/deliver', authenticate, orderController.deliverOrders);
router.put('/:orderId/cancel', authenticate, orderController.cancelledOrder);
router.put('/:orderId/delete', authenticate, orderController.deleteOrder);

module.exports = router;