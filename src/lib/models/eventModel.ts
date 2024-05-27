import mongoose, { Document, Schema } from "mongoose";

export interface EventDoc extends Document {
  name: string;
  date: string;
  price: string;
  capacity: number;
  booked: Array<string>;
}

const eventSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  booked: {
    type: Array,
    required: true,
  },
});

const Events =
  mongoose.models.events || mongoose.model<EventDoc>("events", eventSchema);
export default Events;
