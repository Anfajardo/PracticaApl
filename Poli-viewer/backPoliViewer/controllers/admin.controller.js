const dbManager = require('../database/db.mannager');
/*
    Create a new event
*/
// CHECK IF THE REQUEST BODY IS EMPTY
async function createAdmin(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
}
// CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        password: req.body.password
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}
//EXPORTS
exports.createAdmin= createAdmin;
    