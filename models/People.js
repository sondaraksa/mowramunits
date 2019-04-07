const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const PeopleSchema = new Schema({
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  firstname_kh: {
    type: String,
    required: true
  },
  lastname_kh: {
    type: String,
    required: true
  },
  firstname_en: {
    type: String,
    required: true
  },
  lastname_en: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  company: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  current_job: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = People = mongoose.model("people", PeopleSchema);
