const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Album } = require("../../db/models");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateAlbum = [
  check("albumName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an album title.")
    .isLength({ max: 40 })
    .withMessage("Album title must be 40 characters or less."),
  handleValidationErrors,
];

// create album
router.post(
  "/new",
  requireAuth,
  singleMulterUpload("photo"),
  validateAlbum,
  asyncHandler(async (req, res) => {
    let album;
    const {
      albumName,
      numberOfPhotos,
      numberOfViews,
      albumCreatedBy,
    } = req.body;
    if (req.file) {
      const imageUrl = await singlePublicFileUpload(req.file);
      album = await Album.create({
        albumName,
        numberOfPhotos,
        numberOfViews,
        albumCreatedBy,
      });
    } else {
      album = await Album.create({
        albumName,
        numberOfPhotos,
        numberOfViews,
        albumCreatedBy,
      });
    }

    return res.json({
      album,
    });
  })
);

// access a single album
router.get(
  "/:id(\\d+)",
  asyncHandler(async function (req, res) {
    const album = await Album.findByPk(req.params.id, {
      include: {
        model: Photo,
        // include: Composer,
      },
    });
    // const artist = await User.findByPk(album.artistId);
    // return res.json({ album, artist });
  })
);

// update a single album
// router.patch(
//   '/:id(\\d+)',
//   validateAlbum,
//   asyncHandler(async function (req, res) {
//     const album = await Album.findByPk(req.params.id)
//     if (req.file) {
//       const imageUrl = await singlePublicFileUpload(req.file);
//       req.body.imageUrl = imageUrl;
//     }
//     await album.update(req.body);
//     return res.json({album});
//   })
// );

// access all of a user's albums
router.get(
  "/user/:id(\\d+)",
  requireAuth,
  asyncHandler(async function (req, res) {
    const albums = await Album.findAll({
      where: { artistId: req.params.id },
      include: {
        model: Photo,
        // include: Composer,
      },
    });
    return res.json({ albums });
  })
);

// access all albums
router.get(
  "/",
  requireAuth,
  asyncHandler(async function (req, res) {
    const albums = await Album.findAll({
      include: User,
    });
    return res.json({ albums });
  })
);

module.exports = router;
