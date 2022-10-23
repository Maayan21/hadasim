const Users_vaccinationService = require('../../service/users_vaccination_service');


async function getAllUsers_vaccination(req, res, next) {
    try {
        res.json(await Users_vaccinationService.getAllUsers_vaccination(req.body));
    } catch (err) {
        console.error(`Error while getting users vacc`, err.message);
        next(err);
    }
}


//POST '/tea'
const createUsers_vaccination = (req, res, next) => {
    try {
        const user_vac = req.body;
        Users_vaccinationService.createUsers_vaccination(user_vac)
        res.status(201).json(user_vac)
    } catch (err) {
        console.error(`Error while creating users vacc`, err.message);
        next(err);
    }
};


async function updateUsers_vaccination(req, res, next) {
    try {
        res.json(await Users_vaccinationService.updateUsers_vaccination(req.body));
    } catch (err) {
        console.error(`Error while updating users vacc`, err.message);
        next(err);
    }
}

async function deleteUsers_vaccination(req, res, next) {
    try {
        res.send(await Users_vaccinationService.deleteUsers_vaccination(req.params.id));
    } catch (err) {
        console.error(`Error while deleting users vacc`, err.message);
        next(err);
    }
}

async function getUsers_vaccinationByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await Users_vaccinationService.getUsers_vaccinationByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting user vacc`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
    createUsers_vaccination,
    getAllUsers_vaccination,
    getUsers_vaccinationByID,
    deleteUsers_vaccination,
    updateUsers_vaccination
};
