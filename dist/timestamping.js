"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FS = require("fs");
const Path = require("path");
class Timestamping {
    constructor() {
        this.data = {};
    }
    recordsToJsonFile(filename) {
        return FS.writeFileSync(Path.resolve(process.cwd(), 'results', `${filename}.json`), JSON.stringify(this.data));
    }
    record(key, fn) {
        return () => {
            const hrstart = process.hrtime();
            fn();
            this.keep(key, process.hrtime(hrstart));
        };
    }
    keep(key, [seconds, nanoseconds]) {
        if (!this.data[key]) {
            this.data[key] = [nanoseconds];
            return;
        }
        this.data[key].push(nanoseconds);
    }
}
exports.default = Timestamping;
//# sourceMappingURL=timestamping.js.map