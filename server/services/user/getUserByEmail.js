const { User } = require('../../models');

async function getUserByEmail(email, options) {
  return await User.findOne({ email })
    .select(options ? options.select : {});
}

export { getUserByEmail };
