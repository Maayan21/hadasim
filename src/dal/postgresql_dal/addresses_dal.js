const {sequelize , Addresses } = require('../models');
const hmo = require('../models/hmo');

class AddressesDAL {

    constructor() {
     //chek connection

    }
    

    async getAllAddresses() {

        try {
            const hmo = await Addresses.findAll();
            var hmo_json=JSON.stringify(hmo, null, 2)
            console.log("hmo_json");

            return await hmo;
        } catch (err) {
            console.log("hmo_json2");

            console.log(err);
            return [];
        }
    }

    async createAddress(hmoEntity) {
        
        try {
            const hmo = await Addresses.create(hmoEntity);
            return hmo;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteAddress(id) {
        try {
            const hmo = await Addresses.findOne({ where: { id } })
            await hmo.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getAddressByID(id) {
        try {
            const hmo = await Addresses.findOne({ where: { id } })
            var hmo_json=JSON.stringify(hmo, null, 2)
            return hmo_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    


    async updateAddress(adr) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Addresses.update({ ...adr }, {
                where: {
                    id: adr.id
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
//     const cus= await new AddressesDAL();

//     console.log( await cus.getAllAddresses());
// }

// main();
   
module.exports = new AddressesDAL();
