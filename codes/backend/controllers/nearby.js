const nearby = (req, res) => {
  try {
    const User = req.user;
    res.json(User);
    // console.log("User data from request:", User);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { nearby };
