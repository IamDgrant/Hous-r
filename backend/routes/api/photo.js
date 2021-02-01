const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Photo, Album, User } = require("../../db/models");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validatePhoto = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a photo name.")
    .isLength({ max: 75 })
    .withMessage("Photo name must be 75 characters or less."),
  handleValidationErrors,
];

// create photo
router.post(
  "/new",
  requireAuth,
  singleMulterUpload("photo"),
  validatePhoto,
  asyncHandler(async (req, res) => {
    const { name, location, description, adderId } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);

    const photoData = {
      name,
      imageUrl,
      location,
      description,
      adderId,
    };

    const photo = await Photo.create(photoData);

    return res.json({ photo });
  })
);

// access a single photo
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const photo = await Photo.findByPk(req.params.id, {
      include: [
        {
          model: Album,
          include: User,
        },
        adderId,
      ],
    });
    return res.json({ photo });
  })
);

// update a single photo
// router.patch(
//   "/:id(\\d+)",
//   validatePhoto,
//   asyncHandler(async function (req, res) {
//     const { title, composerId, firstName, lastName } = req.body;
//     const photo = await Photo.findByPk(req.params.id);

//     if (firstName) {
//       const newComposer = await Composer.create({ firstName, lastName });
//       await photo.update({ title, composerId: newComposer.id });
//     } else {
//       await photo.update({ title, composerId });
//     }

//     return res.json({ photo });
//   })
// );

// access all of a user's photos
router.get(
  "/user/:id(\\d+)",
  requireAuth,
  asyncHandler(async function (req, res) {
    const photos = await Photo.findAll({
      where: { adderId: req.params.id },
      // include: [Album],
    });
    return res.json({ photos });
  })
);

//delete a photo
// router.delete(
//   "/:id(\\d+)",
//   asyncHandler(async function (req, res) {
//     const photo = await Photo.findByPk(req.params.id);
//     photo.destroy();
//     return res.json({ message: "success" });
//   })
// );

module.exports = router;
