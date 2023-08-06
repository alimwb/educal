const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI);

const {
  User,
  Admin,
  Course,
  Teacher,
  Discount,
  Rating,
  ShopCart,
  Transaction,
  Counter,
} = require('../built/models');

populate();
// removeAll();

async function populate() {
  const {
    users,
    courses,
    teachers,
    ratings,
  } = require('./data');

  await removeAll();
  await Promise.all([
    ...users.map(user => User.updateOne({ userId: user.userId }, user, { upsert: true })),
    ...teachers.map(teacher => Teacher.updateOne({ teacherId: teacher.teacherId }, teacher, { upsert: true })),
    ...courses.map(course => Course.updateOne({ courseId: course.courseId }, course, { upsert: true })),
    ...ratings.map(rate => Rating.updateOne({ ratingId: rate.ratingId }, rate, { upsert: true })),
  ]);

  console.log('users count: ', await User.count());
  console.log('teachers count: ', await Teacher.count());
  console.log('courses count: ', await Course.count());
  console.log('ratings count: ', await Rating.count());

  process.exit(1);
}

async function removeAll() {
  const count = await Promise.all([
    User.deleteMany({}),
    Teacher.deleteMany({}),
    Course.deleteMany({}),
    Rating.deleteMany({}),
    Counter.updateMany({}, { count: 6 }),
  ]);

  console.log('users removed: ', count[0]);
  console.log('teachers removed: ', count[1]);
  console.log('courses removed: ', count[2]);
  console.log('ratings removed: ', count[3]);
}
