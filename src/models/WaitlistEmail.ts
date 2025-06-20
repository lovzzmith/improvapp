import mongoose from 'mongoose';

const WaitlistEmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.WaitlistEmail || mongoose.model('WaitlistEmail', WaitlistEmailSchema); 