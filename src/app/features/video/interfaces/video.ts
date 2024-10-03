export interface VideoListI {
    videoID: number
    title: string
    description: string
    imageUrl: string
    genres: GenreI[]
}
  
export interface GenreI {
    genreID: number
    name: string
}