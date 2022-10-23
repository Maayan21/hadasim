const {sequelize , Users } = require('../models');

class UsersDAL {

    constructor() {
     //chek connection

    }
    

    async getAllUsers() {

        try {
            const usr = await Users.findAll();
            return await usr;
        } catch (err) {
            console.log("usr_json2");

            console.log(err);
            return [];
        }
    }

    async createUsers(usrEntity) {
        
        try {
            const usr = await Users.create(usrEntity);
            return usr;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUsers(id) {
        try {
            const usr = await Users.findOne({ where: { id } })
            await usr.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUserByID(id) {
        try {
            const usr = await Users.findOne({ where: { id } })
            var usr_json=JSON.stringify(usr, null, 2)
            return usr_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    



    async updateUser(usr) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Users.update({ ...usr }, {
                where: {
                    id: usr.id
                }
            });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    
}

// async function main() {
//     // console.log("main()");
//     const usr= await new UsersDAL();

//     console.log( await usr.getAllUsers());
// }

// main();
   
module.exports = new UsersDAL();