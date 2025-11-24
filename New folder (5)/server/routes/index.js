const Router = require("express");
const authRouter = require("./auth.routes");
const stateRouter = require("./state.routes");
const citiesRouter = require("./cities.routes");
const subscriptionTypeRouter = require("./subscriptionType.routes");
const { verifyToken } = require("../middlewares/authJWT");

const router = Router();

router.use("/auth", authRouter);
router.use("/states", stateRouter);
router.use("/cities", citiesRouter);
router.use("/subscription-types", [verifyToken], subscriptionTypeRouter);

module.exports = router;
