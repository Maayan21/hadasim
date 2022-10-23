const VaccinationService = require('../../service/vaccination_service');


async function getAllVaccination(req, res, next) {
    try {
        res.json(await VaccinationService.getAllVaccination(req.body));
    } catch (err) {
        console.error(`Error while getting  vaccinations`, err.message);
        next(err);
    }
  }
  

//POST '/tea'
const createVaccination = (req, res, next) => {
    try {
    const newVaccination = req.body;
    VaccinationService.createVaccination(newVaccination)
    res.status(201).json(newVaccination)
} catch (err) {
    console.error(`Error while creating vaccinations`, err.message);
        next(err);
}
};


async function updateVaccination(req, res, next) {
    try {
        res.json(await VaccinationService.updateVaccination(req.body));
    } catch (err) {
        console.error(`Error while updating vaccinations`, err.message);
        next(err);
    }
}

async function deleteVaccination(req, res, next) {
    try {
        res.send(await VaccinationService.deleteVaccination(req.params.id));
    } catch (err) {
        console.error(`Error while deleting vaccinations`, err.message);
        next(err);
    }
}

async function getVaccinationByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await VaccinationService.getVaccinationByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting vaccinations`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
    createVaccination,
    updateVaccination,
    deleteVaccination,
    getAllVaccination,
    getVaccinationByID
};
