'use strict';
const { ServiceProvider } = require('@adonisjs/fold');
const FlyDrive = require('@slynova/flydrive');
const Manager = require('../src/DriveManager');
class DriveProvider extends ServiceProvider {
    register() {
        this.app.singleton('Adonis/Addons/Floppy', (app) => {
            // console.log(FlyDrive)
            // console.log(Object.getOwnPropertyNames(FlyDrive.StorageManager.prototype))
            const config = app.use('Adonis/Src/Config').get('drive');
            const flyDriverInstance = new FlyDrive.StorageManager(config);
            const { drivers } = Manager;
            /**
             * Registering extended drivers with flydrive
             */
            Object.keys(drivers).forEach((driver) => {
                flyDriverInstance.extend(driver, drivers[driver]);
            });
            return flyDriverInstance.disk();
        });
        this.app.manager('Adonis/Addons/Floppy', Manager);
        this.app.alias('Adonis/Addons/Floppy', 'Floppy');
    }
}
module.exports = DriveProvider;
