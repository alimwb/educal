const { User } = require('../../models');

exports = async function (email, options) {
  return await User.findOne({ email })
    .select(options ? options.select : {});
}
