export interface CreatePostInputIF {
  createdOn?: string
  avatarUrl?: string
}

export interface DynamoPostIF {
  userId?: { S: string }
  avatarUrl?: { S: string }
  createdOn?: { S: string }
  isActive?: { N: number }
}
