import multer from 'multer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const upload = multer({ dest: 'public/uploads/' })
const upload = multer({ storage: storage });

export default async function handler(req, res) {
  if (req.method !== 'POST') return;
  try {
    const body = await new Promise((resolve, reject) => {
      upload.single('file')(req, res, (err) => {
        if (err) return reject(err);
        resolve({ file: req.file, path: req.body.path });
      });
    });
  } catch (e) {
    res.status(500).send(e);
  }
  res.end();
}
