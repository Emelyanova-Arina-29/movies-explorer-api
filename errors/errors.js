const AuthError = require('./authError');
const BadRequestError = require('./badRequestError');
const ConflictError = require('./conflictError');
const ForbiddenError = require('./forbiddenError');
const NotFoundError = require('./notFoundError');

module.exports = {
  AuthError,
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
};
