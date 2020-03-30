'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
 * adonis-drive
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const path = require('path');
module.exports = (cli) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield cli.copy(path.join(__dirname, './examples/config.js'), path.join(cli.helpers.configPath(), 'drive.js'));
        yield cli.command.completed('create', 'config/drive.js');
    }
    catch (error) {
        // ignore error
    }
});
