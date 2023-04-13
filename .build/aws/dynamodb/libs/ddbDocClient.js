"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddbDocClient = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const ddbClient_1 = require("./ddbClient");
const marshallOptions = {
    convertEmptyValues: false,
    removeUndefinedValues: false,
    convertClassInstanceToMap: false,
};
const unmarshallOptions = {
    wrapNumbers: false,
};
const translateConfig = { marshallOptions, unmarshallOptions };
const ddbDocClient = lib_dynamodb_1.DynamoDBDocumentClient.from(ddbClient_1.ddbClient, translateConfig);
exports.ddbDocClient = ddbDocClient;
//# sourceMappingURL=ddbDocClient.js.map