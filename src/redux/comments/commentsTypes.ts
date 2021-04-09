export type CommentsArrayType = Array<CommentType>

export interface CommentType {
    body: string
    email: string
    id: number
    name: string
    postId: number
}