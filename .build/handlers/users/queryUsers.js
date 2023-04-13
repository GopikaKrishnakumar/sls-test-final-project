"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const queryItems_1 = require("../../aws/dynamodb/queryItems");
const returnData_1 = require("../../utils/returnData");
const handler = async () => {
    const TABLE_NAME_USERS = process.env.TABLE_NAME_USERS;
    if (!TABLE_NAME_USERS) {
        console.log('No TABLE_NAME_USERS');
        return;
    }
    const params = {
        IndexName: 'isActiveIndex',
        KeyConditionExpression: "isActive = :i",
        ExpressionAttributeValues: {
            ":i": 1,
        },
        TableName: TABLE_NAME_USERS
    };
    const data = await (0, queryItems_1.queryItems)(params);
    return (0, returnData_1.returnData)(200, "User list", JSON.stringify(data));
};
exports.handler = handler;
//# sourceMappingURL=queryUsers.js.map