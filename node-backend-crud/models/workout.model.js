module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workout", {
      title: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      distance: {
        type: Sequelize.INTEGER
      },
      hours: {
        type: Sequelize.INTEGER
      },
      minutes: {
        type: Sequelize.INTEGER
      },
      seconds: {
        type: Sequelize.INTEGER
      },
      tenths: {
        type: Sequelize.INTEGER
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