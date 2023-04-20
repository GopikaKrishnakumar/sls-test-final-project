import { APIGatewayEvent } from 'aws-lambda'
import { putItem } from '../../aws/dynamodb/post/putItems'
import { v4 as uuidv4 } from 'uuid'
import { PutCommandInput } from '@aws-sdk/lib-dynamodb'
import { returnData } from '../../utils/returnData'
import { CreatePostInputIF } from '../../types/post-if'
import { postCreateSchema } from './validation/postvalidation'
import { ValidationError, date } from 'yup'

export const handler = async (event: APIGatewayEvent) => {
  if (!event.body) {
    return returnData(400, 'No body!')
  }
  const post: CreatePostInputIF = JSON.parse(event.body)
  try {
    await postCreateSchema.validate(post)
  } catch (error) {
    if (error instanceof ValidationError) {
      return returnData(400, error.message)
    }
    return returnData(400, 'Something goes wrong', JSON.stringify(error))
  }
  const uuid = uuidv4()
  const params: PutCommandInput = {
    TableName: process.env.TABLE_NAME_POST,
    Item: {
      userId: uuid,
      isActive: 1,
      createdOn: post.createdOn,
    },
  }

  const result = await putItem(params)
  if (result.success) {
    return returnData(200, 'Success!', JSON.stringify({ userId: uuid }))
  } else {
    return returnData(400, 'No createdOn!')
  }
}
