const User_sick_detailsDAL = require('../dal/postgresql_dal/user_sick_details_dal');

class User_sick_detailsService {

    constructor() {
     //chek connection

    }
    

    async getAllUser_sick_details() {

        try {
            const usr_sic = await User_sick_detailsDAL.getAllUser_sick_details();
            return await usr_sic;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createUser_sick_details(usr_sicEntity) {
        
        try {
            const usr_sic = await User_sick_detailsDAL.createUser_sick_details(usr_sicEntity);
            return usr_sic;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUser_sick_details(id) {
        try {
            const usr_sic = await User_sick_detailsDAL.deleteUser_sick_details(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUser_sick_detailsByID(id) {
        try {
            const usr_sic = await User_sick_detailsDAL.getUser_sick_detailsByID();
            return await usr_sic
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateUser_sick_details(mnfEntity) {
        try {
            const usr_sic = await User_sick_detailsDAL.updateUser_sick_details(mnfEntity);
            return usr_sic;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const mnf= await new User_sick_detailsService();

//     console.log( await mnf.getAllUser_sick_details());
// }

// main();
   
module.exports = new User_sick_detailsService();