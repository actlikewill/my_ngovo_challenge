const
people = [{name: "John", id: 26}, {name: "Jane", id: 99}, {name: "Ian", id: 1}],

express = require('express'),
cors = require('cors'),
{ Connection, User } = require('./model'),
anxiety = require('./anxiety.js')
app = express();

// Initialize the database
Connection.sync();
const addPeople = async () =>
await User.bulkCreate(people, {raw: true}).
        then(people => console.log(people)).
        catch(e => console.log(e));

addPeople();
// This is the anxiety function that deletes the user
// if the "pardoned_at" field is older than forty minutes
anxiety();

app.use(express.json());
app.use(cors());

app.post( '/api/pardon', ( req, res ) => {
  const id = req.body;  
  User.
    update({ pardoned_at: new Date() }, { where: { id }, returning: true }).
    then(pardonedUsers => res.status(201).json({ pardonedUsers })).
    catch(e => res.status(500).json({ error: JSON.stringify(e)}))
});

// Convenience Routes for listing users
app.get( '/api/users', ( req, res ) => {
  User.
    findAll().
    then( users => res.status(200).json({users})).
    catch(e => {
      console.log(e);
      res.status(500).json({ error: JSON.stringify(e)})});
});

// Convenience route for creating new users
app.post( '/api/users', ( req, res ) => {
  const newUser = req.body.user;
  console.log(newUser)
  User.
    create({
      name: newUser.name,
      ids: newUser.id, 
    }).
    then( user => {
      res.status(201).json({
        message: 'user created',
        user
      });    
    }).
    catch( error => {
        console.log(e);
        res.json({
          error: JSON.stringify(error)
        });
      });
});

app.listen(3000, () => {
  console.log('Running on 3000');
});