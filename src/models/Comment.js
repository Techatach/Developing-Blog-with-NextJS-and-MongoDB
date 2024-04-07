const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Export the model
export default mongoose?.model?.Comment ||
  mongoose.model("Comment", commentSchema);
