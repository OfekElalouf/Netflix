import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePicture: { type: String, required: true, default:"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg%22%7D,"},
        myFavouriteList: [{type: mongoose.Schema.Types.ObjectId,
            ref: "Content",
            required: true}]
    
    },

    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;