const userService = require("../services/user.service.js")

// [bearer ,token]

const getUserProfile = async (req, res) => {
    try {
        
        const jwt = req.headers.authorization?.split(" ")[1];
        if (!jwt) {
            return res.status(404).send({
                error: "token not found"
            })
        }
        
        
        const user = await userService.getUserProfileByToken(jwt)
      
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message:"problem in usercontroller getuserprofile"
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const user = await userSerivce.getAllUsers();
        return res.status(200).send(users)

    } catch (error) {
        return res.status(500).send({
            error: error.message,
            message: "problem in usercontroller getallusers"
        })
    }
}

module.exports = {
    getUserProfile,
    getAllUsers
}