import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  code: Number,
  name: String,
  short_name: String
});

export default new mongoose.model('Country', countrySchema);
