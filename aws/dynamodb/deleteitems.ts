import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";


export const params = {
  TableName: "users",
  Key: {
    userId: { N: "1" },
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new DeleteItemCommand(params));
    console.log("Success, item deleted", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
