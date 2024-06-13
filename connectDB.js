import mongoose from 'mongoose';

export default async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { dbName: 'MyProject' });
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(error);
  }
}
