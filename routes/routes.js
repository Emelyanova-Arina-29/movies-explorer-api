const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const {
  createUser, login,
} = require('../controllers/users');

const {
  NotFoundError,
} = require('../errors/errors');

const {
  validationSignUp,
  validationSigIn,
} = require('../middlewares/validation');

router.post('/signup', validationSignUp, createUser);
router.post('/signin', validationSigIn, login);

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

router.use('*', auth, () => {
  throw new NotFoundError('Страница не найдена');
});

module.exports = router;
