const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const requireLogin = require("../middlewares/requireLogin");
const keys = require("../config/keys");

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
});

module.exports = (app) => {
  app.get("/api/upload", requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuidv4()}.jpeg`;

    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "my-blog-bucket-1510",
        ContentType: "jpeg",
        Key: key,
      },
      (err, url) => res.send({ key, url })
    );
  });
};
