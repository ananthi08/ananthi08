const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
// @route GET api/profile/me
// @desc get current user profile
// @access private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "there is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route post api/profile
// @desc create and update user profiles
// @access private
router.post(
  "/",
  [
    auth,
    [
      check("maritalstatus", "maritalstatus is required").not().isEmpty(),
      check("age", "age is required").not().isEmpty(),
      check("address", "address is required").not().isEmpty(),
      check("height", "height is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      maritalstatus,
      height,
      familytype,
      mothertongue,
      age,
      religion,
      address,
  
    
     } = req.body;


    const profileFields = {};
    profileFields.user = req.user.id;
    if (maritalstatus) profileFields.maritalstatus = maritalstatus;
    if (height) profileFields.height = height ;
    if (familytype) profileFields.familytype = familytype ;
    if (mothertongue) profileFields.mothertongue = mothertongue ;
    if (age) profileFields.age = age;
    if (religion) profileFields.religion = religion ;
    if (address) profileFields.address = address ;
   
   
    
  
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      // create

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

// @route get api/profile
// @desc get all profiles
// @access public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route get api/profile/user/:user_id
// @desc get profile by user ID
// @access public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profiles = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!Profile)
      return res.status(400).json({ msg: "there is no profile for this user" });
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.statusMessage(400).json({ msg: "profile not found" });
    }
    res.status(500).send("server error");
  }
});

// @route delete api/profile
// @desc delete profiles,user and posts
// @access public
router.delete("/", auth, async (req, res) => {
  try {
    // @todo - remove users posts
    // remove profiles
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route PUT  api/profile/social
// @desc add profiles social media details
// @access private
router.put(
  "/social",
  [
    auth,
    [
      check("facebook", "facbook Id is required").not().isEmpty(),
      check("instagram", "instagram Id is required").not().isEmpty(),
      check("linkedin", "linkedin Id is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { facebook,instagram,linkedin } =
      req.body;

    const newSoc = {
      facebook,instagram,linkedin,
    }
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.social.unshift(newSoc);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server message");
    }
  }
);

// @route DELETE  api/profile/social/:exp_id
// @desc delete  social media details from profile
// @access private
router.delete("/social/:soc_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // get remove index
    const removeIndex = profile.social
      .map((item) => item.id)
      .indexOf(req.params.soc_id);
    profile.social.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

// @route PUT  api/profile/profession
// @desc add profiles profession
// @access private
router.put(
  "/profession",
  [
    auth,
    [
      check("highesteducation", "Highest Education is required").not().isEmpty(),
      check("employeedin", "Employeed In is required").not().isEmpty(),
      check("occupation", "Occupation is required").not().isEmpty(),
      check("annualincome", "Annual Income is required").not().isEmpty(),
      check("worklocation", "Work Location is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { highesteducation , employeedin , occupation, annualincome,worklocation } =
      req.body;

    const newProf = {
      highesteducation , employeedin , occupation, annualincome,worklocation
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.profession.unshift(newProf);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server message");
    }
  }
);

// @route DELETE  api/profile/experience/:exp_id
// @desc delete  experience from profile
// @access private
router.delete("/profession/:pro_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // get remove index
    const removeIndex = profile.profession
      .map((item) => item.id)
      .indexOf(req.params.exp_id);
    profile.profession.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});


// @route PUT  api/profile/profession
// @desc add profiles profession
// @access private
router.put(
  "/partner",
  [
    auth,
    [
      check("height", "height is required").not().isEmpty(),
      check("mothertongue", "Mother tongue is required").not().isEmpty(),
      check("physicalstatus", "physical status is required").not().isEmpty(),
      check("qualification", "qualification is required").not().isEmpty(),
      check("annualincome", "Annual Income is required").not().isEmpty(),
      check("age", "Age is required").not().isEmpty(),
      check("religion", "Religion is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { height,mothertongue,physicalstatus,qualification,annualincome,age,religion } =
      req.body;

    const newPart = {
      height,mothertongue,physicalstatus,qualification,annualincome,age,religion 
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.partner.unshift(newPart);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server message");
    }
  }
);

// @route DELETE  api/profile/experience/:exp_id
// @desc delete  experience from profile
// @access private
router.delete("/partner/:part_id", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // get remove index
    const removeIndex = profile.partner
      .map((item) => item.id)
      .indexOf(req.params.part_id);
    profile.partner.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
