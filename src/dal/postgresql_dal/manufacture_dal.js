const {sequelize , Manufacturer } = require('../models');

class ManufactureDAL {

    constructor() {
     //chek connection

    }
    

    async getAllManufacture() {

        try {
            const mnf = await Manufacturer.findAll();

            return await mnf;
        } catch (err) {
            console.log("mnf_json2");

            console.log(err);
            return [];
        }
    }

    async createManufacture(mnfEntity) {
        
        try {
            const mnf = await Manufacturer.create(mnfEntity);
            return mnf;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteManufacture(id) {
        try {
            const mnf = await Manufacturer.findOne({ where: { id } })
            await mnf.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getManufactureByID(id) {
        try {
            console.log("id", id)
            const mnf = await Manufacturer.findOne({ where: { id } })
            return mnf;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }



    async updateManufacture(mnf) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Manufacturer.update({ ...mnf }, {
                where: {
                    id: mnf.id
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
//     const mnf= await new ManufactureDAL();

//     console.log( await mnf.getAllManufacture());
// }

// main();
   
module.exports = new ManufactureDAL();