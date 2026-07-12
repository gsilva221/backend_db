const mongoose = require("mongoose");

const buildSchema = (definition, options = {}) => {
  const schema = new mongoose.Schema(
    definition,
    {
      versionKey: false,
      timestamps: true,
      ...options,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    transform: (_doc, ret) => {
      if (ret._id) {
        ret.id = ret._id.toString();
      }
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });

  schema.set("toObject", {
    virtuals: true,
    transform: (_doc, ret) => {
      if (ret._id) {
        ret.id = ret._id.toString();
      }
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });

  return schema;
};

module.exports = buildSchema;
