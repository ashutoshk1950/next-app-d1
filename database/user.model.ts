import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfoliowebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true }, // Clerk ID (required)
  name: { type: String, required: true }, // Name (required)
  username: { type: String, required: true, unique: true }, // Username (required, unique)
  email: { type: String, required: true, unique: true }, // Email (required, unique)
  password: { type: String }, // Optional password (could be undefined)
  bio: { type: String }, // Optional bio
  picture: { type: String, required: true }, // Profile picture URL (required)
  location: { type: String }, // Optional location
  portfoliowebsite: { type: String }, // Optional portfolio website URL
  reputation: { type: Number, default: 0 }, // Reputation score, default to 0
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }], // List of saved questions
  joinAt: { type: Date, default: Date.now }, // Date when the user joined, default to current date
});

const User = models.User || model("User", UserSchema);

export default User;
