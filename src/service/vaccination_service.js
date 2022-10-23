const VaccinationDAL = require('../dal/postgresql_dal/vaccination_dal');

class VaccinationService {

    constructor() {
     //chek connection

    }
    

    async getAllVaccination() {

        try {
            const vac = await VaccinationDAL.getAllVaccination();
            return await vac;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createVaccination(vacEntity) {
        
        try {
            const vac = await VaccinationDAL.createVaccination(vacEntity);
            return vac;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    async deleteVaccination(id) {
        try {
            const vac = await VaccinationDAL.deleteVaccination(id);
            return true;
        } catch (err) {
          console.log(err)
          return err;       
         }
    }

    
    async getVaccinationByID(id) {
        try {
            const vac = await VaccinationDAL.getVaccinationByID();
            return await vac
        } 
        catch (err) {
          console.log(err)
          return err;      

        }
    }
    
    async updateVaccination(vacEntity) {
        try {
            const vac = await VaccinationDAL.updateVaccination(vacEntity);
            return vac;
        } 
        catch (err) {
          console.log(err)
          return err;  
        }
    }
}

// async function main() {
//     // console.log("main()");
//     const vac= await new VaccinationService();

//     console.log( await usr_vac.getAllVaccination());
// }

// main();
   
module.exports = new VaccinationService();