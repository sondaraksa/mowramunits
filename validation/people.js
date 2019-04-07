const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePeopleInput(data) {
  let errors = {};

  data.firstname_kh = !isEmpty(data.firstname_kh) ? data.firstname_kh : '';
  data.lastname_kh = !isEmpty(data.lastname_kh) ? data.lastname_kh : '';
  data.firstname_en = !isEmpty(data.firstname_en) ? data.firstname_en : '';
  data.lastname_en = !isEmpty(data.lastname_en) ? data.lastname_en : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.dob = !isEmpty(data.dob) ? data.dob : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.avatar = !isEmpty(data.avatar) ? data.avatar : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.website = !isEmpty(data.website) ? data.website : '';
  data.location = !isEmpty(data.location) ? data.location : '';
  data.current_job = !isEmpty(data.current_job) ? data.current_job : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';


  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
