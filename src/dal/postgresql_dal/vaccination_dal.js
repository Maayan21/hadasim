const {sequelize , Vaccination } = require('../models');

class VaccinationDAL {

    constructor() {
     //chek connection

    }
    

    async getAllVaccination() {

        try {
            const vac = await Vaccination.findAll();
            var vac_json=JSON.stringify(vac, null, 2)
            console.log(vac_json);

            return await vac;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createVaccination(vacEntity) {
        
        try {
            const vac = await Vaccination.create(vacEntity);
            return vac;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteVaccination(id) {
        try {
            const vac = await Vaccination.findOne({ where: { id } })
            await vac.destroy()

            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getVaccinationByID(id) {
        try {
            const vac = await Vaccination.findOne({ where: { id } })
            var vac_json=JSON.stringify(vac, null, 2)
            return vac_json;
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    
    async updateVaccination(vac) {
        let data = {};
        try {
            // customer.updateddate = new Date().toISOString();
            data = await Vaccination.update({ ...vac }, {
                where: {
                    id: vac.id
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
//     const vac= await new VaccinationDAL();

//     console.log( await vac.getAllVaccination());
// }

// main();
   
module.exports = new VaccinationDAL();