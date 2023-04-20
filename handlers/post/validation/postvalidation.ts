import * as Yup from 'yup'
import { CreatePostInputIF, DynamoPostIF } from '../../../types/post-if'

export const postCreateSchema: Yup.ObjectSchema<CreatePostInputIF> = Yup.object({
  createdOn: Yup.string().required('created date is required!'),

  avatarUrl: Yup.string(),
})
