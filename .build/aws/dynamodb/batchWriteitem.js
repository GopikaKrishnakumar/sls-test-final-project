"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchWrite = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const ddbClient_1 = require("./libs/ddbClient");
const BATCH_MAX = 25;
const batchWriteItems = async (writeRequest, tableName) => {
    const params = {
        RequestItems: {
            [tableName]: writeRequest,
        },
    };
    try {
        const response = await ddbClient_1.ddbClient.send(new client_dynamodb_1.BatchWriteItemCommand(params));
        return response.UnprocessedItems || {};
    }
    catch (error) {
        return error;
    }
};
const batchWrite = async (items, tableName) => {
    if (!tableName) {
        return { isSuccess: false, message: 'No table name!' };
    }
    if (!items.length) {
        return { isSuccess: false, message: 'No items!' };
    }
    const BATCHES = Math.floor((items.length + BATCH_MAX - 1) / BATCH_MAX);
    let output = [];
    for (let batch = 0; batch < BATCHES; batch++) {
        const itemsArray = [];
        for (let ii = 0; ii < BATCH_MAX; ii++) {
            const index = batch * BATCH_MAX + ii;
            if (index >= items.length)
                break;
            itemsArray.push({
                PutRequest: {
                    Item: items[index],
                },
            });
        }
        console.log('Batch', batch, 'write', itemsArray.length, 'items');
        try {
            const unprocessedItems = await batchWriteItems(itemsArray, tableName);
            if (unprocessedItems && unprocessedItems.length) {
                output.push(unprocessedItems);
            }
            console.log(`BatchWrite response: ${JSON.stringify(unprocessedItems)}`);
        }
        catch (error) {
            output.push(error);
            console.log(`BatchWrite response: ${JSON.stringify(error)}`);
        }
    }
    return { isSuccess: true, message: output };
};
exports.batchWrite = batchWrite;
//# sourceMappingURL=batchWriteitem.js.map