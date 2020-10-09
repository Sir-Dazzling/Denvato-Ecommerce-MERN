import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination(req, file, callback)
    {
        callback(null, "uploads/");
    },
    filename(req, file, callback)
    {
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);   
    }
});

// To check the file type being uploaded
function checkFileType(file, callback)
{
    const fileTypes = /jpg|jpeg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if(extName && mimetype)
    {
        return callback(null, true);
    } else 
    {
        callback("Sorry, Images only");
    }
}

const upload = multer({
    storage,
    fileFilter: function(req, file , callback)
    {
        checkFileType(file, callback);
    }
});

router.post('/', upload.single("image"), (req, res) => 
{
    res.send(`/${req.file.path}`);
});

export default router;