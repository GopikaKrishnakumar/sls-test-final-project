"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryItems = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const ddbDocClient_1 = require("./libs/ddbDocClient");
const queryItems = async (params) => {
    try {
        const data = await ddbDocClient_1.ddbDocClient.send(new lib_dynamodb_1.QueryCommand(params));
        console.log('Success: ', data.Items);
        return data.Items;
    }
    catch (error) {
        console.log("Error", JSON.stringify(error));
    }
};
exports.queryItems = queryItems;
//# sourceMappingURL=queryItems.js.map