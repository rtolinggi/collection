const getUser = async (req, res) => {
  return res.send("get Users");
};
const storeUser = async (req, res) => {
  return res.send("store Users");
};
const updateUser = async (req, res) => {
  return res.send("update Users " + req.params.id);
};
const deleteUser = async (req, res) => {
  return res.send("delete Users " + req.params.id);
};

export { getUser, storeUser, updateUser, deleteUser };
