"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeUsersBatch = exports.handler = void 0;
const returnData_1 = require("../../utils/returnData");
const yup_1 = require("yup");
const batchWriteitem_1 = require("../../aws/dynamodb/batchWriteitem");
const uuid_1 = require("uuid");
const handler = async (event) => {
    if (!event.body) {
        return (0, returnData_1.returnData)(400, 'No body!');
    }
    const users = JSON.parse(event.body);
    if (!users.length) {
        return (0, returnData_1.returnData)(400, 'No users!');
    }
    const response = await (0, exports.writeUsersBatch)(users);
    return (0, returnData_1.returnData)(200, JSON.stringify(response));
};
exports.handler = handler;
const writeUsersBatch = async (users) => {
    try {
        const parsedUsers = users.map((user) => {
            return {
                avatarUrl: { S: user.avatarUrl },
                email: { S: user.email },
                firstName: { S: user.firstName },
                isActive: { N: 1 },
                userId: { S: (0, uuid_1.v4)() },
                lastName: { S: user.lastName },
                userName: { S: user.userName },
            };
        });
        return await (0, batchWriteitem_1.batchWrite)(parsedUsers, process.env.TABLE_NAME_USERS);
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            return error.message;
        }
        return `Something goes wrong: ${JSON.stringify(error)}`;
    }
};
exports.writeUsersBatch = writeUsersBatch;
//# sourceMappingURL=importUsers.js.map