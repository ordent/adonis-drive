"use strict";
const { ServiceProvider } = require("@adonisjs/fold");
const GoogleCloudStorage = require("@slynova/flydrive-gcs");
const FlyDrive = require("@slynova/flydrive");
const Manager = require("../src/DriveManager");
class DriveProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Floppy", (app) => {
      const config = app.use("Adonis/Src/Config").get("drive");
      const flyDriverInstance = new FlyDrive.StorageManager(config);
      /**
       * Registering extended drivers with flydrive
       */
      flyDriverInstance.registerDriver("gcs", GoogleCloudStorage);
      const driverConstructor = flyDriverInstance._drivers.get("gcs");
      flyDriverInstance._drivers.set(
        "gcs",
        driverConstructor.GoogleCloudStorage
      );
      return flyDriverInstance.disk();
    });
    this.app.manager("Adonis/Addons/Floppy", Manager);
    this.app.alias("Adonis/Addons/Floppy", "Floppy");
  }
}
module.exports = DriveProvider;
