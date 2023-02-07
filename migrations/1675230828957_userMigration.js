/**
 * eslint-disable camelcase
 *
 * @format
 */

exports.shorthands = undefined

exports.up = exports.up = (pgm) => {
  pgm.createTable('users', {
    userId: {
      type: 'uuid',
      notNull: true,
      default: pgm.func('uuid_generate_v4()'),
    },
    firstName: { type: 'varchar(1000)', notNull: true },
    lastName: { type: 'varchar(1000)', notNull: true },
    email: { type: 'varchar(1000)', notNull: true },
    birthday: { type: 'date', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  })
}
