const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const { MONGO_HOSTNAME, MONGO_DB, MONGO_PORT } = process.env;
const dbConnectionURL = {
  LOCALURL: `mongodb+srv://duong:clgt1112@duongdevdb.u5pg9.mongodb.net/DuongDevDb?retryWrites=true&w=majority`,
};
async function connect() {
  try {
    await mongoose.connect(dbConnectionURL.LOCALURL);
    console.log('successful!!!');
  } catch (error) {
    console.log('false!!!');
  }
}

module.exports = { connect };
