const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatePasswordInput(data) {
  let errors = {};

  data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.oldPassword)) {
    errors.oldPassword = "Old Password is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at leat 6 Characters";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Comfirm password is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
