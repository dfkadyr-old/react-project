import { User } from 'entities/user'

export interface CommentProps {
  id: string
  user: User
  text: string
}
