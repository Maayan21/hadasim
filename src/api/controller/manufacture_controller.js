const ManufactureService = require('../../service/manufacture_service');


async function getAllManufacture(req, res, next) {
    try {
        res.json(await ManufactureService.getAllManufacture(req.body));
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
  }
  

//POST '/tea'
const createManufacture = (req, res, next) => {
    try {
    const newManufactor = req.body;
    ManufactureService.createManufacture(newManufactor)
    res.status(201).json(newManufactor)
} catch (err) {
    console.error(`Error while creating manufactor`, err.message);
        next(err);
}
};


async function updateManufacture(req, res, next) {
    try {
        res.json(await ManufactureService.updateManufacture(req.body));
    } catch (err) {
        console.error(`Error while updating user`, err.message);
        next(err);
    }
}

async function deleteManufacture(req, res, next) {
    try {
        res.send(await ManufactureService.deleteManufacture(req.params.id));
    } catch (err) {
        console.error(`Error while deleting user`, err.message);
        next(err);
    }
}

async function getManufactureByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await ManufactureService.getManufactureByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
    createManufacture,
    updateManufacture,
    deleteManufacture,
    getManufactureByID,
    getAllManufacture
};
