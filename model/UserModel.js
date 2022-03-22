const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    lastName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      // required: true,
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: Number,
      // required: true,
    },

    client: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      requried: true,
    },

    contactAddress: {
      type: String,
    },

    nextOfKin: {
      type: String,
    },

    nextOfKinPhone: {
      type: Number,
    },
    farmLocation: {
      type: String,
    },

    farmNeed: {
      type: String,
    },

    farmSize: {
      type: Number,
    },
    farmingTime: {
      type: Number,
    },
    landTenure: {
      type: String,
    },
    bankDetailsName: {
      type: String,
    },

    bankDetailsNumber: {
      type: Number,
    },
    pic: {
      type: String,
      default:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=",
    },
    photoId: {
      type: String,
    },
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserSchema);
