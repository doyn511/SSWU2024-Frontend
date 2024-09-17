import { css } from '@emotion/react';
import { IcListRight } from '../../../mobile/assets/icon';

function MainPage() {
  return (
    <div css={mainContainer}>
      <IcListRight />
      <span css={text(false)}>
        모바일 메인페이지 깃헙액션 테스트 좀 할게요 ..
      </span>
    </div>
  );
}

export default MainPage;

// 스타일 파일 분리 말고 이렇게 한번에 쓰는거 어떨까욤?
const mainContainer = css`
  width: 50dvw;
  height: 50dvh;

  background-color: blue;
  color: white;

  text-align: center;
`;

// props 사용은 요렇게!
const text = (state: boolean) => css`
  color: ${state ? 'black' : 'white'};
`;
