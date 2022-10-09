import multer from "multer";

//https://stackoverflow.com/questions/72304042/uploading-videos-and-images-using-multer
const storage = multer.diskStorage({});

// file validation
const imageFileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "Unsupported File Format" }, false);
  }
};

const videoFileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith("video")) {
    cb("Supported only video files!", false);
  }
  // upload only mp4 and mkv format
  if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
    return cb(new Error("Missing Video Format"));
  }
  cb(null, true);
};

const uploadImage = multer({
  storage: storage,
  limits: { fileSize: 4096 * 4096 },
  fileFilter: imageFileFilter,
});

const uploadVideo = multer({
  storage: storage,
  fileFilter: videoFileFilter,
});

export { uploadImage, uploadVideo };
