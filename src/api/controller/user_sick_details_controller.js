const User_sick_detailsService = require('../../service/user_sick_details_service');


async function getAllUser_sick_details(req, res, next) {
    try {
        res.json(await User_sick_detailsService.getAllUser_sick_details(req.body));
    } catch (err) {
        console.error(`Error while getting sicuser`, err.message);
        next(err);
    }
  }
  

//POST '/tea'
const createUser_sick_details = (req, res, next) => {
    try {
    const usr_sic = req.body;
    User_sick_detailsService.createUser_sick_details(usr_sic)
    res.status(201).json(usr_sic)
} catch (err) {
    console.error(`Error while creating usr_sick`, err.message);
        next(err);
}
};


async function updateUser_sick_details(req, res, next) {
    try {
        res.json(await User_sick_detailsService.updateUser_sick_details(req.body));
    } catch (err) {
        console.error(`Error while updating usr_sick`, err.message);
        next(err);
    }
}

async function deleteUser_sick_details(req, res, next) {
    try {
        res.send(await User_sick_detailsService.deleteUser_sick_details(req.params.id));
    } catch (err) {
        console.error(`Error while deleting usr_sick`, err.message);
        next(err);
    }
}

async function getUser_sick_detailsByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await User_sick_detailsService.getUser_sick_detailsByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
    createUser_sick_details,
    updateUser_sick_details,
    deleteUser_sick_details,
    getUser_sick_detailsByID,
    getAllUser_sick_details
};
