// const { boolean } = require("joi");
const { Schema } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    date: {
      type: String,
      required: true,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "recipe",
      },
    ],
    verify: {
      type: Boolean,
      default: false,
    },
    verifyToken: {
      type: String,
      required: true,
    },
    token: String,
    avatarURL: String,
    isAdult: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

module.exports = { userSchema };
