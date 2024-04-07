const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      min: 4,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
    category: {
      type: String,
      required: true,
      enum: ["Sports", "Money", "News", "Tech", "Programming"],
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
  },
  { timestamps: true }
);

//Export the model
export default mongoose?.models?.Post || mongoose.model("Post", postSchema);
