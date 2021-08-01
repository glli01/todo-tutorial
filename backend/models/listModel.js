import mongoose from "mongoose";

const listSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  color: {
    type: String,
    required: true,
    default: "purple",
  },
});

const List = mongoose.model("List", listSchema);

export default List;
