module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workout", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Workout;
  };