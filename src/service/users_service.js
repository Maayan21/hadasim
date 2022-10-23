const UsersDAL = require('../dal/postgresql_dal/users_dal');

class UsersService {

    constructor() {
     //chek connection

    }
    

    async getAllUsers() {

        try {
            const usr = await UsersDAL.getAllUsers();
            return await usr;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUsers(usrEntity) {
        
        try {
            const usr = await UsersDAL.createUsers(usrEntity);
            return usr;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUsers(id) {
        try {
            const usr = await UsersDAL.deleteUsers(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUserByID(id) {
        try {
            const usr = await UsersDAL.getUserByID();
            return await usr
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateUser(usrEntity) {
        try {
            const usr = await UsersDAL.updateUser(usrEntity);
            return usr;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const mnf= await new UsersService();

//     console.log( await mnf.getAllUser_sick_details());
// }

// main();
   
module.exports = new UsersService();