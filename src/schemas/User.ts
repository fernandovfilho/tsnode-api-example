import { Document, model, Schema } from "mongoose";

interface UserInterface extends Document {
  email: string;
  firstName?: string;
  lastName?: string;
  fullName(): string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`;
};

export default model<UserInterface>("User", UserSchema);
