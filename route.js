const { sequelize, User } = require("./models");
const express = require("express");
const router = express.Router();

router.get('/validateKey', async (req, res) => {
  const response = {
    result: false,
    key: ''
  }
  try {
    const { key } = req.query;
    const result = await User.findOne({
      where: {
        fcm_key: key,
      },
    });
    if(result) {
      const returnKey = result.dataValues.fcm_key;
      response.result = true;
      response.key = returnKey;
      res.json(response);
    } else {
      User.create({
        fcm_key: key,
        misc: ''
      });
      response.result = true;
      response.key = key;
      res.json(response);
    }
  } catch(e) {
    console.log(e);
    res.json(response);
  }

});

module.exports = router;
