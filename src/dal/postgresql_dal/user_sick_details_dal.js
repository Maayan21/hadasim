const {sequelize , User_sick_details } = require('../models');

class User_sick_detailsDAL {

    constructor() {
     //chek connection

    }
    

    async getAllUser_sick_details() {

        try {
            const sic = await User_sick_details.findAll();
            var sic_json=JSON.stringify(sic, null, 2)
            console.log("sic_json");

            return await sic;
        } catch (err) {
            console.log("sic_json2");

            console.log(err);
            return [];
        }
    }

    async createUser_sick_details(sicEntity) {
        
        try {
            const sic = await User_sick_details.create(sicEntity);
            return sic;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUser_sick_details(id) {
        try {
            const sic = await User_sick_details.findOne({ where: { id } })
            await sic.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUser_sick_detailsByID(id) {
        try {
            const sic = await User_sick_details.findOne({ where: { id } })
            var sic_json=JSON.stringify(sic, null, 2)
            return sic_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    async updateUser_sick_details(mnf) {
        let usr_sic = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await User_sick_details.update({ ...usr_sic }, {
                where: {
                    id: usr_sic.id
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
//     const sic= await new User_sick_detailsDAL();

//     console.log( await sic.getAllUser_sick_details());
// }

// main();
   
module.exports = new User_sick_detailsDAL();