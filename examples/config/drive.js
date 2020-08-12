"use strict";

const Helpers = use("Helpers");
const Env = use("Env");

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Default disk
  |--------------------------------------------------------------------------
  |
  | The default disk is used when you interact with the file system without
  | defining a disk name
  |
  */
  default: "gcs",

  disks: {
    /*
    |--------------------------------------------------------------------------
    | Local
    |--------------------------------------------------------------------------
    |
    | Local disk interacts with the a local folder inside your application
    |
    */
    local: {
      driver: "local",
      config: {
        root: Helpers.tmpPath(),
      },
    },

    /*
    |--------------------------------------------------------------------------
    | S3
    |--------------------------------------------------------------------------
    |
    | S3 disk interacts with a bucket on aws s3
    |
    */
    s3: {
      driver: "s3",
      config: {
        key: Env.get("S3_KEY"),
        secret: Env.get("S3_SECRET"),
        bucket: Env.get("S3_BUCKET"),
        region: Env.get("S3_REGION"),
      },
    },

    gcs: {
      driver: "gcs",
      config: {
        keyFilename: Env.get("GCS_KEY_FILE_NAME"), // path to json file
        bucket: Env.get("GCS_BUCKET"),
      },
    },
  },
};
