import prisma from "../utils/db.js";
import ErrorResponse from "../utils/errorRespons.js";

//getUser Controller
const getUser = async (req, res, next) => {
  const id = req.params.id;

  let profil;

  if (!id) {
    profil = await prisma.user.findMany({
      select: {
        username: true,
        email: true,
        role: true,
        profil: {},
      },
    });

    return res.status(200).json({ success: true, profil });
  }

  profil = await prisma.user.findMany({
    where: {
      id,
    },
    select: {
      username: true,
      email: true,
      role: true,
      profil: {},
    },
  });

  if (profil.length === 0) {
    return next(new ErrorResponse("Data Id Not Found", 400));
  }

  return res.status(200).json({ success: true, profil });
};

//Store User Profile Controller
const storeUser = async (req, res) => {
  return res.send("store Users");
};

//Update User Profile Controller
const updateUser = async (req, res) => {
  return res.send("update Users " + req.params.id);
};

// Delete User Profile Controller
const deleteUser = async (req, res) => {
  return res.send("delete Users " + req.params.id);
};

export { getUser, storeUser, updateUser, deleteUser };
