

module.exports = ( Connection , Sequelize ) => Connection.define( 'users', {
  name: Sequelize.STRING,  
  pardoned_at: { type:Sequelize.DATE, defaultValue: Sequelize.NOW}
});