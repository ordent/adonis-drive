"use strict";
class DriveManager {
  constructor() {
    this.drivers = {
      // 'gcs': 'GoogleCloudStorage'
    };
  }
  /**
   * Extend by adding a new driver
   *
   * @method extend
   *
   * @param  {String} name
   * @param  {Class} implementation
   *
   * @chainable
   */
  extend(name, implementation) {
    this.drivers[name] = implementation;
    return this;
  }
}
module.exports = new DriveManager();
