const {sequelize , Hmo } = require('../models');

class HmoDAL {

    constructor() {
     //chek connection

    }
    

    async getAllHmo() {

        try {
            const hmo = await Hmo.findAll();
            return await hmo;
        } catch (err) {
            console.log("hmo_json2");

            console.log(err);
            return [];
        }
    }

    async createHmo(hmoEntity) {
        
        try {
            const hmo = await Hmo.create(hmoEntity);
            return hmo;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteHmo(id) {
        try {
            const hmo = await Hmo.findOne({ where: { id } })
            await hmo.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getHmoByID(id) {
        try {
            const hmo = await Hmo.findOne({ where: { id } })
            var hmo_json=JSON.stringify(hmo, null, 2)
            return hmo_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }

    async updateHmo(hmo) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Hmo.update({ ...hmo }, {
                where: {
                    id: hmo.id
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
//     const cus= await new HmoDAL();

//     console.log( await cus.getAllHmo());
// }

// main();
   
module.exports = new HmoDAL();