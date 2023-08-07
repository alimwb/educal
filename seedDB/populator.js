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
// createCounters();

async function populate() {
  const {
    users,
    courses,
    teachers,
    ratings,
  } = require('./data');

  await removeAll();
  await Promise.all([
    ...users.map(user => User.create(user)),
    ...teachers.map(teacher => Teacher.create(teacher)),
    ...courses.map(course => Course.create(course)),
    ...ratings.map(rate => Rating.create(rate)),
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
    Counter.updateMany({}, { count: 1 }),
  ]);

  console.log('users removed: ', count[0]);
  console.log('teachers removed: ', count[1]);
  console.log('courses removed: ', count[2]);
  console.log('ratings removed: ', count[3]);
}

async function createCounters() {
  Counter.create({ collectionName: 'users', count: 1 }).then(console.log.bind(console));
  Counter.create({ collectionName: 'teachers', count: 1 }).then(console.log.bind(console));
  Counter.create({ collectionName: 'courses', count: 1 }).then(console.log.bind(console));
  Counter.create({ collectionName: 'ratings', count: 1 }).then(console.log.bind(console));
}
