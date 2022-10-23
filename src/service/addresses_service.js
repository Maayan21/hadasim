const AddressDal = require('../dal/postgresql_dal/addresses_dal');

class AddressesService {

    constructor() {
     //chek connection

    }
    

    async getAllAddresses() {

        try {
            const addr = await AddressDal.getAllAddresses();
            return await addr;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createAddress(addEntity) {
        
        try {
            const addr = await AddressDal.createAddress(addEntity);
            return addr;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteAddress(id) {
        try {
            const addr = await AddressDal.deleteAddress(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getAddressByID(id) {
        try {
            const addr = await AddressDal.getAddressByID();
            return await addr
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateAddress(addEntity) {
        try {
            const addr = await AddressDal.updateAddress(addEntity);
            return addr;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const cus= await new AddressesService();

//     console.log( await cus.getAllAddresses());
// }

// main();
   
module.exports = new AddressesService();
