const AddressesService = require('../../service/addresses_service');


async function getAllAddresses(req, res, next) {
    try {
        res.json(await AddressesService.getAllAddresses(req.body));
    } catch (err) {
        console.error(`Error while getting user Address`, err.message);
        next(err);
    }
  }
  

//POST '/tea'
const createAddress = (req, res, next) => {
    try {
    const newAddr = req.body;
    AddressesService.createAddress(newAddr)
    res.status(201).json(newAddr)
} catch (err) {
    console.error(`Error while creating addr`, err.message);
        next(err);
}
};


async function updateAddress(req, res, next) {
    try {
        res.json(await AddressesService.updateAddress(req.body));
    } catch (err) {
        console.error(`Error while updating addr`, err.message);
        next(err);
    }
}

async function deleteAddress(req, res, next) {
    try {
        res.send(await AddressesService.deleteAddress(req.params.id));
    } catch (err) {
        console.error(`Error while deleting addr`, err.message);
        next(err);
    }
}

async function getAddressByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await AddressesService.getAddressByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting addr`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
  createAddress,
  updateAddress,
  getAddressByID,
  getAllAddresses,
  deleteAddress
};
