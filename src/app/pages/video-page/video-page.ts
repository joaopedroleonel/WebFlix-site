import { GenreI } from "../../features/video/interfaces/video"

export interface VideoPageI {
    videoId: number
    videoUrl: string
    title: string
    description: string
    genres: GenreI[]
}