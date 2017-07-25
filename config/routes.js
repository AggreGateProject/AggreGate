var userController = require("../controllers/userController.js");

module.exports = function(router) {

    router.get("/", function(req, res) {
    	//render the homepage
        res.render("../public/assets/index.html"); //how to make it render index.html? or is it different with REact?
    });

    router.post("/register", function(req, res) {

    	userController.save(req.body, function(data) {
    		// Send the user data to the browser as a json
    		res.json(data);

    		});


    });


    // This route handles deleting a specified user
  router.delete("/api/users/:id", function(req, res) {
    var query = {};
    // Set the _id property of the query object to the id in req.params
    query._id = req.params.id;

    // Run the userController delete method and pass in our query object containing
    // the id of the headline we want to delete
    userController.delete(query, function(err, data) {
      // Send the result back as JSON to be handled client side
      res.json(data);
    });
  });



};



