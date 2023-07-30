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
    users.forEach(user => User.create(user)),
    teachers.forEach(teacher => Teacher.create(teacher)),
    courses.forEach(course => Course.create(course)),
  ]);

  console.log('users count: ', await User.count());
  console.log('teachers count: ', await Teacher.count());
  console.log('courses count: ', await Course.count());
}