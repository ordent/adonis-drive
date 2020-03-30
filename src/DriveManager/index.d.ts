declare class DriveManager {
    drivers: object;
    constructor();
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
    extend(name: string, implementation: any): DriveManager;
}
