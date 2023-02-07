/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.renameColumn('users', 'firstName', 'first_name')
  pgm.renameColumn('users', 'lastName', 'last_name')
  pgm.renameColumn('users', 'createdAt', 'created_at')
}
