const mongoose = require("mongoose");

const partyConfigSchema = new mongoose.Schema(
  {},
  { collection: "party_configs", strict: false }
);

module.exports = mongoose.model("PartyConfig", partyConfigSchema);
