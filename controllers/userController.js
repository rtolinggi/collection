//getUser Controller
const getUser = async (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
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
