// Defining Schema in the Database

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // relationship
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  price: 5999,
});

// Defining the model

const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Create Operation
User.create({
  username: req.body.username,
  password: req.body.password,
});

// Read Operation
User.findById("1");
User.findOne({
  username: "rizon@gmail.com",
});
User.find({
  username: "rizon@gmail.com",
});

// Update Operation
User.updateOne({ id: "1" }, { $push: { purchasedCourse: courseId } });

User.update({}, { premium: true });

// Delete Operation

User.deleteMany({});

User.deleteOne({
  username: "rizon@gmail.com",
});
