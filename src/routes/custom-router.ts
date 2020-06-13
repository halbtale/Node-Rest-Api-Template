import ExpressPromiseRouter from 'express-promise-router';
import { getStatus } from '../controllers/custom-controller';

const router = ExpressPromiseRouter();

// Optional: multer

// const fileUploader = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, path.join(process.cwd(), process.env.FILE_UPLOAD_DIRNAME));
//         },
//         filename: function (req, file, cb) {
//             const fileName = `${file.fieldname}${path.extname(file.originalname)}`;
//             cb(null, fileName);
//         },
//     }),
// });

router.route('/').get(getStatus)

export default router;
