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
  } = require('./data');

  await removeAll();
  await Promise.all([
    ...users.map(user => User.create(user)),
    ...teachers.map(teacher => Teacher.create(teacher)),
    ...courses.map(course => Course.create(course)),
  ]);

  console.log('users count: ', await User.count());
  console.log('teachers count: ', await Teacher.count());
  console.log('courses count: ', await Course.count());
}

async function removeAll() {
  const count = await Promise.all([
    User.deleteMany({}),
    Teacher.deleteMany({}),
    Course.deleteMany({}),
    Counter.updateMany({}, { count: 0 }),
  ]);

  console.log('users removed: ', count[0]);
  console.log('teachers removed: ', count[1]);
  console.log('courses removed: ', count[2]);
}
