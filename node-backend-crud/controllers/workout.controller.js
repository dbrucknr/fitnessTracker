const db = require("../models");
const Workout = db.workouts;
const Op = db.Sequelize.Op;

// Create and Save a new Workout
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Workout Object from request
  const workout = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  // Save Workout in the database
  Workout.create(workout)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Workout."
      });
    });
};

// Retrieve all Workouts from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Workout.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving all workouts."
      });
    });
};

// Find a single Workout with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Workout.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Workout with id=" + id
      });
    });
};

// Update a Workout by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Workout.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Workout was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Workout with id=${id}. Maybe Workout was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Workout with id=" + id
        });
      });
};

// Delete a Workout with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Workout.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Workout was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Workout with id=${id}. Maybe Workout was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Workout with id=" + id
        });
      });
};

// Delete all Workouts from the database.
exports.deleteAll = (req, res) => {
    Workout.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Workouts were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all workouts."
          });
        });
};

// Find all published Workouts
exports.findAllPublished = (req, res) => {
    Workout.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving workouts."
      });
    });
};