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
} = require('../built/models');
const {
  users,
  courses,
  teachers,
} = require('./data');

populate();

async function populate() {
  await Promise.all([
    ...users.map(user => User.findOneAndUpdate({ userId: user.userId }, user, { upsert: true })),
    ...teachers.map(teacher => Teacher.findOneAndUpdate({ teacherId: teacher.teacherId }, teacher, { upsert: true })),
    ...courses.map(course => Course.findOneAndUpdate({ courseId: course.courseId }, course, { upsert: true })),
  ]);

  console.log('users count: ', await User.count());
  console.log('teachers count: ', await Teacher.count());
  console.log('courses count: ', await Course.count());
}
