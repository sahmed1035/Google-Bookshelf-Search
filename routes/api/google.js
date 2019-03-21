//4. external goolge (database) api's

const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router.route("/")
  .get(googleController.findAll) // Go to controllers and create googleController. add findAll route there.
  



module.exports = router;
