import axios from "axios";

export interface YoutubePreviewProps {
  items: {
    id: {
      videoId: string;
    }
    snippet: {
      channelTitle: string;
    }
  }[]
}

const youtubeResponseApi = async (drink: string): Promise<YoutubePreviewProps> => {
  const response = await axios
    .get(`${process.env.REACT_APP_YOUTUBE_API_URL}/search`, {
      params: {
        key: process.env.REACT_APP_YOUTUBE_KEY,
        q: `${drink} drink`,
        part: "snippet",
        type: "video",
        maxResults: 3,
        order: "viewCount",
      },
    });

  return response.data;
};

export default youtubeResponseApi;
