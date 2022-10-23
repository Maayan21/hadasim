const Users_vaccinationDAL = require('../dal/postgresql_dal/users_vaccination_dal');

class Users_vaccinationService {

    constructor() {
     //chek connection

    }
    

    async getAllUsers_vaccination() {

        try {
            const usr_vac = await Users_vaccinationDAL.getAllUsers_vaccination();
            return await usr_vac;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUsers_vaccination(usr_vacEntity) {
        
        try {
            const usr_vac = await Users_vaccinationDAL.createUsers_vaccination(usr_vacEntity);
            return usr_vac;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUsers_vaccination(id) {
        try {
            const usr_vac = await Users_vaccinationDAL.deleteUsers_vaccination(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUsers_vaccinationByID(id) {
        try {
            const usr_vac = await Users_vaccinationDAL.getUsers_vaccinationByID();
            return await usr_vac
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateUsers_vaccination(usr_vacEntity) {
        try {
            const usr_vac = await Users_vaccinationDAL.updateUsers_vaccination(usr_vacEntity);
            return usr_vac;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const usr_vac= await new Users_vaccinationService();

//     console.log( await usr_vac.getAllUser_sick_details());
// }

// main();
   
module.exports = new Users_vaccinationService();