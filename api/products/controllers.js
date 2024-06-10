const Account = require("../../model/Account");

const getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().select("-createdAt -updatedAt");

    res.json(accounts);
  } catch (error) {
    res.json({ message: "An error occurred", error: error.message });
  }
};

const getOneAccount = async (req, res) => {
  const id = req.params.id;

  try {
    const foundAccount = await Account.findById(id);
    if (foundAccount) {
      return res.status(200).json(foundAccount);
    } else {
      return res.status(404).json("Account with this id is not found");
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const createAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};
module.exports = {
  getOneAccount,
  createAccount,
  getAllAccounts,
};
