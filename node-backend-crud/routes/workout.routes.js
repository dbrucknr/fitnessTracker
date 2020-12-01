module.exports = app => {
    const workouts = require("../controllers/workout.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Workout
    router.post("/", workouts.create);
  
    // Retrieve all Workouts
    router.get("/", workouts.findAll);
  
    // Retrieve all published Workouts
    router.get("/published", workouts.findAllPublished);
  
    // Retrieve a single Workout with id
    router.get("/:id", workouts.findOne);
  
    // Update a Workout with id
    router.put("/:id", workouts.update);
  
    // Delete a Workout with id
    router.delete("/:id", workouts.delete);
  
    // Create a new Workout
    router.delete("/", workouts.deleteAll);
  
    app.use('/api/workouts', router);
  };