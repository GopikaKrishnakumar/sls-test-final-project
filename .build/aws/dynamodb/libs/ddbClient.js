"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddbClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const REGION = process.env.REGION || 'eu-west-1';
const ENDPOINT = process.env.DYNAMO_ENDPOINT || 'http://localhost:8010';
exports.ddbClient = new client_dynamodb_1.DynamoDBClient({
    region: REGION,
    endpoint: ENDPOINT
});
//# sourceMappingURL=ddbClient.js.map