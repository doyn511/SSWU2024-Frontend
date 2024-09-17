import { css } from '@emotion/react';
import { HoveredStudioImgProps } from '../types/worksType';

const HoveredStudioImg = ({ img }: HoveredStudioImgProps) => {
  return <div css={imgContainer}>{img}</div>;
};

export default HoveredStudioImg;

const imgContainer = css`
  position: absolute;
  right: 6rem;
  bottom: 10rem;
`;
