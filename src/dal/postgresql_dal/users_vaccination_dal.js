const {sequelize , Users_vaccination } = require('../models');

class Users_vaccinationDAL {

    constructor() {
     //chek connection

    }
    

    async getAllUsers_vaccination() {

        try {
            const usr_vc = await Users_vaccination.findAll();
            var usr_vc_json=JSON.stringify(usr_vc, null, 2)
            console.log("usr_vc_json");

            return await usr_vc;
        } catch (err) {
            console.log("usr_vc_json2");

            console.log(err);
            return [];
        }
    }

    async createUsers_vaccination(usr_vcEntity) {
        
        try {
            const usr_vc = await Users_vaccination.create(usr_vcEntity);
            return usr_vc;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteUsers_vaccination(id) {
        try {
            const usr_vc = await Users_vaccination.findOne({ where: { id } })
            await usr_vc.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getUsers_vaccinationByID(id) {
        try {
            const usr_vc = await Users_vaccination.findOne({ where: { id } })
            var usr_vc_json=JSON.stringify(mnf, null, 2)
            return usr_vc_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
   
    async updateUsers_vaccination(usr_va) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Users_vaccination.update({ ...usr_va }, {
                where: {
                    id: usr_va.id
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
//     const mnf= await new Users_vaccinationDAL();

//     console.log( await mnf.getAllUsers_vaccination());
// }

// main();
   
module.exports = new Users_vaccinationDAL();