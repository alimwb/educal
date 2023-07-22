const { User } = require('../../models');
const bcrypt = require('bcryptjs');

exports.userLogin = async function(email, password) {
  const user = this.getUserByEmail(email);
  const doesPassMatch = await bcrypt.compare(password, user.password);

  if (!doesPassMatch) {
    return false;
  }

  return user;
}
