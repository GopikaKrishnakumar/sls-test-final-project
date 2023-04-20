export { putItem } from './dynamodb/putItem'
export const createPost = (event) => {
  if (!event.body) {
    {
      return {
        statusCode: 400,
        body: JSON.stringify(
          {
            message: 'No body!',
          },
          null,
          2,
        ),
      }
    }
  }
  const params = {
    TableName: process.env.TABLE_NAME_POST,
    Item: {
      userId: 'User_1',
      createdOn: 'Test',
      isActive: true,
    },
  }
  const result = putItem(params)
  console.log(result)
}
