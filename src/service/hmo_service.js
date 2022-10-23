const HmoDAL = require('../dal/postgresql_dal/hmo_dal');

class HmoService {

    constructor() {
     //chek connection

    }
    

    async getAllHmo() {

        try {
            const hmo = await HmoDAL.getAllHmo();
            return await hmo;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createHmo(hmoEntity) {
        
        try {
            const hmo = await HmoDAL.createHmo(hmoEntity);
            return hmo;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteHmo(id) {
        try {
            const hmo = await HmoDAL.deleteHmo(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getHmoByID(id) {
        try {
            const hmo = await HmoDAL.getHmoByID();
            return await hmo
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateHmo(hmoEntity) {
        try {
            const hmo = await HmoDAL.updateHmo(hmoEntity);
            return hmo;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const hmo= await new HmoService();

//     console.log( await hmo.getAllHmo());
// }

// main();
   
module.exports = new HmoService();