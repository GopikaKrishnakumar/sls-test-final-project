"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const putItem_1 = require("../../aws/dynamodb/putItem");
const uuid_1 = require("uuid");
const returnData_1 = require("../../utils/returnData");
const yup_1 = require("yup");
const usersvalidation_1 = require("./validation/usersvalidation");
const handler = async (event) => {
    if (!event.body) {
        return (0, returnData_1.returnData)(400, "No body!");
    }
    const body = JSON.parse(event.body);
    try {
        await usersvalidation_1.userCreateSchema.validate(body);
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            return (0, returnData_1.returnData)(400, error.message);
        }
        return (0, returnData_1.returnData)(400, 'Something goes wrong', JSON.stringify(error));
    }
    const uuid = (0, uuid_1.v4)();
    const params = {
        TableName: process.env.TABLE_NAME_USERS,
        Item: {
            userId: uuid,
            firstName: body.firstName,
            isActive: 1,
            lastName: body.lastName,
            email: body.email,
            userName: body.userName,
        }
    };
    if (body.avatarUrl) {
        params.Item.avatarUrl = body.avatarUrl;
    }
    const result = await (0, putItem_1.putItem)(params);
    if (result.success) {
        return (0, returnData_1.returnData)(200, "Success!", JSON.stringify({ userId: uuid }));
    }
    else {
        return (0, returnData_1.returnData)(400, "No firstName!");
    }
};
exports.handler = handler;
//# sourceMappingURL=createUser.js.map