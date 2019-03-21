// 3. defines the routes

const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book routes
router.use("/books", bookRoutes); //not static. we create more routes here.

//Google routes
router.use("/google", googleRoutes); //not static. we create more routes here.

module.exports = router;
