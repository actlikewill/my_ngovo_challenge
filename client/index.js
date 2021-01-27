const
axios = require("axios"),
data = [{name: "John", id: 26}, {name: "Jane", id: 99}, {name: "Ian", id: 1}],
userIds = data.map(data => data.id),
url = "http://localhost:3000/api/pardon", // http://anxious-server.com/api/pardon
pardon = () => {
  
  axios.post( url, userIds ).    
  then(res => console.log(JSON.stringify(res.data))).
  catch(e => console.log(e))
  
  // Make the request every 15 minutes
 setTimeout(pardon, 15 * 6 * 1000);
};
 
pardon();

