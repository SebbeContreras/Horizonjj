import mongoose, { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  active: boolean;
}

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
const User =
  mongoose.models.users || mongoose.model<UserDoc>("users", userSchema);

export default User;
