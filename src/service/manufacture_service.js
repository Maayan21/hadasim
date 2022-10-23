const ManufactureDAL = require('../dal/postgresql_dal/manufacture_dal');

class ManufactureService {

    constructor() {
     //chek connection

    }
    

    async getAllManufacture() {

        try {
            const mnf = await ManufactureDAL.getAllManufacture();
            return await mnf;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createManufacture(mnfEntity) {
        
        try {
            const mnf = await ManufactureDAL.createManufacture(mnfEntity);
            return mnf;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteManufacture(id) {
        try {
            const mnf = await ManufactureDAL.deleteManufacture(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getManufactureByID(id) {
        try {
            const mnf = await ManufactureDAL.getManufactureByID(id);
            return await mnf
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateManufacture(mnfEntity) {
        try {
            const mnf = await ManufactureDAL.updateManufacture(mnfEntity);
            return mnf;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const mnf= await new ManufactureService();

//     console.log( await mnf.getAllManufacture());
// }

// main();
   
module.exports = new ManufactureService();