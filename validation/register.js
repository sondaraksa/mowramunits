const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname_en = !isEmpty(data.firstname_en) ? data.firstname_en : "";
  data.surname_en = !isEmpty(data.surname_en) ? data.surname_en : "";
  data.firstname_kh = !isEmpty(data.firstname_kh) ? data.firstname_kh : "";
  data.surname_kh = !isEmpty(data.surname_kh) ? data.surname_kh : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.acc_type = !isEmpty(data.acc_type) ? data.acc_type : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.firstname_en, { min: 2, max: 30 })) {
    errors.firstname_en = "First Name must be between 2 and 30 characters";
  }
  if (!Validator.isLength(data.surname_en, { min: 2, max: 30 })) {
    errors.surname_en = "Surname must be between 2 and 30 characters";
  }
  if (!Validator.isLength(data.firstname_kh, { min: 2, max: 30 })) {
    errors.firstname_kh = "First Name Kh must be between 2 and 30 characters";
  }
  if (!Validator.isLength(data.surname_kh, { min: 2, max: 30 })) {
    errors.surname_kh = "Surname Kh must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.firstname_en)) {
    errors.firstname_en = "Name field is required";
  }
  if (Validator.isEmpty(data.surname_en)) {
    errors.surname_en = "Name field is required";
  }
  if (Validator.isEmpty(data.firstname_en)) {
    errors.firstname_en = "Name field is required";
  }
  if (Validator.isEmpty(data.surname_kh)) {
    errors.surname_kh = "Name field is required";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
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
