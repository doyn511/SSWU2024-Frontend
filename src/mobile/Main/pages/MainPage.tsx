import { css } from '@emotion/react';
import { IcListRight } from '../../../mobile/assets/icon';

function MainPage() {
  return (
    <div css={mainContainer}>
      <IcListRight />
      <span css={text(false)}>메인페이지래요</span>
    </div>
  );
}

export default MainPage;

// 스타일 파일 분리 말고 이렇게 한번에 쓰는거 어떨까욤?
const mainContainer = css`
  width: 10rem;
  height: 10rem;

  background-color: black;
  color: white;

  text-align: center;
`;

// props 사용은 요렇게!
const text = (state: boolean) => css`
  color: ${state ? 'black' : 'white'};
`;
