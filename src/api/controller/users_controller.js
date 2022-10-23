const UsresService = require('../../service/users_service');


async function getAllUsers(req, res, next) {
    try {
        res.json(await UsresService.getAllUsers(req.body));
    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
  }
  

//POST '/tea'
const createUsers = (req, res, next) => {
    try {
    const newUser = req.body;
    UsresService.createUsers(newUser)
    res.status(201).json(newUser)
} catch (err) {
    console.error(`Error while creating usr`, err.message);
        next(err);
}
};


async function updateUser(req, res, next) {
    try {
        res.json(await UsresService.updateUser(req.body));
    } catch (err) {
        console.error(`Error while updating user`, err.message);
        next(err);
    }
}

async function deleteUsers(req, res, next) {
    try {
        res.send(await UsresService.deleteUsers(req.params.id));
    } catch (err) {
        console.error(`Error while deleting user`, err.message);
        next(err);
    }
}

async function getUserByID(req, res, next) {
    try {
        console.log(req.params.id)
        res.json(await UsresService.getUserByID(req.params.id));
    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }
}

//export controller functions
module.exports = {
    createUsers,
    updateUser,
    deleteUsers,
    getUserByID,
    getAllUsers
};
