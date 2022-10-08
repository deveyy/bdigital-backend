import  multer from "multer";

//https://stackoverflow.com/questions/72304042/uploading-videos-and-images-using-multer
const storage = multer.diskStorage({
  destination: function(req, file, cb){
        cb(null, './public/imageUpload')
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// file validation
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype ===  'image/png'){
        cb(null,true);
    }else{
        cb({message: 'Unsupported File Format'}, false)
    }
};


const uploadImage = multer({ 
  storage: storage,
  limits: {fileSize: 4096 * 4096}, 
  fileFilter: fileFilter 
});


export {uploadImage}