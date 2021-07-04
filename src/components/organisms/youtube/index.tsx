import React from "react";
import * as S from "./styles";

import { YoutubePreviewProps } from "../../../services/youtubeApi";

const YoutubePreview: React.FC<YoutubePreviewProps> = ({ items }) => (
  <S.Container>
    {Array.isArray(items) && items.map((item) => (
      <S.Wrapper key={item.id.videoId}>
        <S.Title>{item.snippet.channelTitle}</S.Title>
        <iframe
          width="280"
          title={item.snippet.channelTitle}
          height="200"
          src={`//www.youtube.com/embed/${item.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
      </S.Wrapper>
    ))}
  </S.Container>
);

export default YoutubePreview;
