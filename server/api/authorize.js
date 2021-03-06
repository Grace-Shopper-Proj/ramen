function authorize(req, res, next) {
  if (!req.user) {
    res.status(401).send('Login required')
  } else if (req.user.userType !== 'admin') {
    res.status(401).send('User does not have permission to access admin page')
  }
  next()
}

module.exports = authorize
