import { UpdateCommandInput, UpdateCommandOutput } from '@aws-sdk/lib-dynamodb'
import { returnData } from '../../utils/returnData'
import { updateItem } from '../../aws/dynamodb/post/updateItem'
import { DynamoPostIF } from '../../types/post-if'

export const updatePost = async (
  post: DynamoPostIF,
): Promise<
  | {
      statusCode: number
      body: string
    }
  | UpdateCommandOutput
  | undefined
> => {
  const TABLE_NAME_POST = process.env.TABLE_NAME_POST
  if (!TABLE_NAME_POST) {
    console.log('No TABLE_NAME_POST')
    return
  }
  if (!post.userId || !post.createdOn) {
    return returnData(400, 'No user ID or date created!')
  }

  let updateExpression = 'set'
  let ExpressionAttributeNames = {}
  let ExpressionAttributeValues = {}
  for (const property in post) {
    updateExpression += ` #${property} = :${property} ,`
    ExpressionAttributeNames['#' + property] = property
    ExpressionAttributeValues[':' + property] = post[property]
  }

  const params: UpdateCommandInput = {
    TableName: TABLE_NAME_POST,
    Key: {
      userId: post.userId,
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: ExpressionAttributeNames,
    ExpressionAttributeValues: ExpressionAttributeValues,
  }

  return await updateItem(params)
}
