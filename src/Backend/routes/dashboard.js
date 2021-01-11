const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const express = require("express");
const Joi = require("joi");
// const { validate } = require("joi");
const router = express.Router();
const db = require("../models");
// const logger = require("./logger");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "put, post, get, DELETE, OPTIONS");

  next();
});

// Create new user

router.post("/creatuser", async (req, res, next) => {
  const validateUsers = (user) => {
    const schema = {
      active: Joi.number().integer().min(1).max(1).default(1),
      username: Joi.string().alphanum().min(5).max(50).required(),
      password: Joi.string().min(5).max(1024).required(),
      profile_pic: Joi.string().min(5).max(100).required(),
      email: Joi.string().min(5).max(60).required().email(),
      phone_number: Joi.string().min(6).max(11).required(),
      address: Joi.string().min(5).max(1024).required(),
      zip_code: Joi.string().min(4).max(8).required(),
      city: Joi.string().min(3).max(20).required(),
      user_role_id: Joi.number().integer().min(1).required(),
      created_at: Joi.string().min(10).max(12).required(),
      updated_at: Joi.string().min(10).max(12),
    };
    return Joi.validate(user, schema);
  };

  const { error } = validateUsers(req.body);
  console.log(error);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  let user = await db.user.findOne({ where: { email: req.body.email } });
  if (user) return res.status(400).send("User is already registered");

  user = new db.user({
    active: req.body.active,
    name: req.body.username,
    profile_pic: req.body.profile_pic,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    address: req.body.address,
    zip_code: req.body.zip_code,
    city: req.body.city,
    user_role_id: req.body.user_role_id,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  // res.send(`${user.name} you are registered`);

  const token = jwt.sign({ id: user.id }, config.get("jwtPrivateKey"));
  res
    .header("x-auth-token", token)
    .send(`${user.name} you are registered now, congratulations.`);

  // const token = user.generateAuthToken();

  // res.send(user);
});

// User login and validation

router.post("/login", async (req, res, next) => {
  const user = await db.user.findOne({ where: { name: req.body.username } });
  if (!user)
    return res
      .status(400)
      .send("You are not registered, please register first");

  let validpassword = await bcrypt.compare(req.body.password, user.password);
  console.log(validpassword);
  // let validpassword = await user.compare(req.body.password, user.password);
  if (!validpassword) return res.status(400).send(`Invalid password`);
  // if (validpassword) return res.status(200).send("successfull login");

  const validateUser = (user) => {
    const schema = {
      username: Joi.string().min(5).max(50).required(),
      password: Joi.string().min(5).max(1024).required(),
    };

    return Joi.validate(user, schema);
  };

  const { error } = validateUser(req.body);

  // const jwtToken = jwt.sign({id: user.id}, config.get('jwtPrivateKey'));
  // const token = jwt.sign({id: user.id, name: user.name, user_role_id: user.user_role_id}, 'jwtPrivateKey');

  const token = jwt.sign({ id: user.id }, config.get("jwtPrivateKey"));
  res.header("x-auth-token", token);

  // const token = jwt.sign(
  //   { id: user.id, name: user.name, user_role_id: user.user_role_id },
  //   config.get("jwtPrivateKey")
  // );

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  } else {
    // res.send(`${user.name} You are successfully logged in and redirected: ${token}`);
    res.status(200).send({
      user,
      // active: user.active,
      // id: user.id,
      //   name: user.username,
      //   email: user.email,
      //   user_role_id: user.user_role_id,
      accessToken: token,
      status: "200",
    });
  }
});

// All Proposals

router.get("/proposals", (req, res, next) => {
  db.proposal
    .findAll({
      attributes: ["status", "id"],
      // where: {
      //   status: "pending",
      //   id: "1",
      // },

      include: [
        {
          model: db.job,
          required: true,
          attributes: ["is_emergency"],

          include: [
            {
              model: db.boat,
              required: true,
              attributes: ["city"],

              include: [
                {
                  model: db.user,
                  required: true,
                  attributes: ["name"],
                },
              ],
            },
            {
              model: db.service,
              required: true,
              attributes: ["name"],

              include: [
                {
                  model: db.service_boat_type,
                  required: true,
                  attributes: ["id"],

                  include: [
                    {
                      model: db.boat_type,
                      required: true,
                      attributes: ["name"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    })
    .then((todos) => res.send(todos));
});

// Get current user info

router.get("/myprofile", auth, async (req, res, next) => {
  // const user = await db.user.findOne({ where: { id: req.user.id } });
  // res.send(user);

  const user = await db.user.findOne({
    // attributes: ["id", "active", "profile_pic", "name", "email", "user_role_id", "phone_number", "address", "zip_code", "city", "created_at", "updated_at"],
    attributes: {
      exclude: ["password"],
    },
    where: { id: req.user.id },
  });

  res.send(user);

  //   const user = await db.user.findById(req.user.id).select('-password');
  // res.send(user);
});

// extra queries

router.get("/boatsubtype", (req, res, next) => {
  db.boat_subtype
    .findAll({
      attributes: ["id", "name", "img"],
    })
    .then((todos) => res.send(todos));
});

router.get("/boat", (req, res, next) => {
  db.boat
    .findAll({
      attributes: [
        "id",
        "name",
        "year",
        "boat_subtype_id",
        "engine_id",
        "user_id",
        "engine_serial_number",
        "description",
        "length",
        "address",
        "zip_code",
        "city",
      ],
    })
    .then((todos) => res.send(todos));
});

router.get("/boattype", (req, res, next) => {
  db.boat_type
    .findAll({
      attributes: ["id", "name", "img"],
    })
    .then((todos) => res.send(todos));
});

router.get("/alluser", (req, res, next) => {
  db.user.findAll().then((todo) => res.send(todo));
});

module.exports = router;
