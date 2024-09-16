import { Schema, model, models, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true }, // Tag name (required and unique)
  description: { type: String, required: true }, // Description (required)
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }], // Array of questions associated with this tag
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }], // Array of users following this tag
  createdOn: { type: Date, default: Date.now }, // Date when the tag was created, default to current date
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
