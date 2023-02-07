/* eslint-disable camelcase */

exports.shorthands = undefined

exports.up = (pgm) => {
  pgm.renameColumn('users', 'userId', 'user_id')
}
