const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database/db');

exports.register = async (name, email, password) => {
  const hashed = await bcrypt.hash(password, 10);

  const result = await pool.query(
    'INSERT INTO users(name, email, password) VALUES($1,$2,$3) RETURNING *',
    [name, email, hashed]
  );

  return result.rows[0];
};

exports.login = async (email, password) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email=$1',
    [email]
  );

  const user = result.rows[0];
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid password');

  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: '1h' });
  return token;
};