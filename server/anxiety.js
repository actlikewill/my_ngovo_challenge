const { User } = require('./model');
const { Op } = require("sequelize");

module.exports =  function anxiety() {
  User.destroy({
    raw: true,
    where: {
      pardoned_at: {
        [Op.lt]: new Date(new Date() - 40 * 60 * 1000)
      },      
    },
  attributes: ['pardoned_at']
  }).then(users => {
      console.log(users)     
  });
  console.log('ready to delete');
  setTimeout( anxiety, 40 * 60 * 1000);
}
