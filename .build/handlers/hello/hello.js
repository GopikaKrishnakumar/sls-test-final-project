"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const returnData_1 = require("../../utils/returnData");
const handler = async (event) => {
    return (0, returnData_1.returnData)(200, 'Go Serverless v3.0! Your function executed successfully!', JSON.stringify(event));
};
exports.handler = handler;
//# sourceMappingURL=hello.js.map