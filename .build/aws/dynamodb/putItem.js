"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const ddbDocClient_js_1 = require("./libs/ddbDocClient.js");
const putItem = async (params) => {
    try {
        const data = await ddbDocClient_js_1.ddbDocClient.send(new lib_dynamodb_1.PutCommand(params));
        console.log("Success - item added or updated", data);
        return {
            success: true
        };
    }
    catch (error) {
        console.log("Error", error.stack);
        return {
            success: false,
            error: error
        };
    }
};
exports.putItem = putItem;
//# sourceMappingURL=putItem.js.map