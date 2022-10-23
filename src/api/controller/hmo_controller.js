const HmoService = require('../../service/hmo_service');


async function getAllHmo(req, res, next) {
    try {
        res.json(await HmoService.getAllHmo(req.body));
    } catch (err) {
        console.error(`Error while getting hmo`, err.message);
        next(err);
    }
  }
  

const createHmo = (req, res, next) => {
    try {
    const newHmo = req.body;
    HmoService.createHmo(newHmo)
    res.status(201).json(newHmo)
} catch (err) {
    console.error(`Error while creating hmo`, err.message);
        next(err);
}
};


async function updateHmo(req, res, next) {
    try {
        res.json(await HmoService.updateHmo(req.body));
    } catch (err) {
        console.error(`Error while updating hmo`, err.message);
        next(err);
    }
}

async function deleteHmo(req, res, next) {
    try {
        res.send(await HmoService.deleteHmo(req.params.id));
    } catch (err) {
        console.error(`Error while deleting hmo`, err.message);
        next(err);
    }
}

async function getHmoByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await HmoService.getHmoByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting hmo`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
   createHmo,
   getAllHmo,
   getHmoByID,
   deleteHmo,
   updateHmo
};
