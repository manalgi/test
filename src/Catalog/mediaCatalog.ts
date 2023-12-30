import videosData from './videos.json';

export type Video = {
  url: string;
  youtubeId:String;
  videoTime: string |null;
};
type Gif = {
    url: string;
  };
export type MediaCatalog ={
    videos: Video[]
   // Gifs: Gif[]
}

export const getMediaCatalog = (): MediaCatalog => { return {videos:videosData} };


export const getRandomVideo = (): Video | undefined => {
    const {videos} = getMediaCatalog();
    const randomVideosIndex = Math.floor(Math.random() * videos.length);
    return videos[randomVideosIndex];
  };
