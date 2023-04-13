"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnData = void 0;
const returnData = (statusCode, message, data = '') => {
    const body = {
        message: message,
    };
    if (data) {
        body.data = data;
    }
    return {
        statusCode: statusCode,
        body: JSON.stringify(body, null, 2),
    };
};
exports.returnData = returnData;
//# sourceMappingURL=returnData.js.map