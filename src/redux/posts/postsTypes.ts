
export type PostsArrayType = Array<PostItemType>

export interface PostItemType {
    body: string
    id: number
    userId?: number
    title: string
}