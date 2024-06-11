const Account = require("../../model/Account");

const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find().select("-createdAt -updatedAt");

    res.json(accounts);
  } catch (error) {
    return next(error);
  }
};

const getOneAccount = async (req, res, next) => {
  const id = req.params.id;

  try {
    const foundAccount = await Account.findById(id);
    if (foundAccount) {
      return res.status(200).json(foundAccount);
    } else {
      return res.status(404).json("Account with this id is not found");
    }
  } catch (error) {
    return next(error);
  }
};

const createAccount = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.profilePicture = req.file.path;
    }
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    return next(error);
  }
};

const updateAccount = async (req, res, next) => {
  const id = req.params.id;

  try {
    const AccountUp = await Account.findByIdAndUpdate(id);
    if (AccountUp) {
      return res.status(200).json(AccountUp);
    } else {
      return res.status(404).json("Account cant be Updated");
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getOneAccount,
  createAccount,
  getAllAccounts,
  updateAccount,
};
