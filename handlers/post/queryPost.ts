import { QueryCommandInput } from '@aws-sdk/lib-dynamodb'
import { queryItems } from '../../aws/dynamodb/post/queryItems'
import { returnData } from '../../utils/returnData'

export const handler = async () => {
  const TABLE_NAME_POST = process.env.TABLE_NAME_POST
  if (!TABLE_NAME_POST) {
    console.log('No TABLE_NAME_POST')
    return
  }
  const params: QueryCommandInput = {
    IndexName: 'isActiveIndex',
    KeyConditionExpression: 'isActive = :i',
    ExpressionAttributeValues: {
      ':i': 1,
    },
    TableName: TABLE_NAME_POST,
  }
  const data = await queryItems(params)
  return returnData(200, 'User list', JSON.stringify(data))
}
