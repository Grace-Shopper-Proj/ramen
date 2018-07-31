function authorize(req, res, next) {
  if (!req.user) {
    res.status(401).send('Login required')
  }
  if (req.user.userType !== 'admin') {
    res.status(401).send('User does not have permission to access admin page')
  }
}

module.exports = authorize
