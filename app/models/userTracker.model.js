var mongoose = require("mongoose");

const UserTrackerSchema = mongoose.model(
  "userTracker",
  new mongoose.Schema(
    {
      action: {
        type: String,
        required: true,
      },
      route: {
        type: String,
        required: true,
      },
      createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      ip: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
  )
);
module.exports = UserTrackerSchema;
