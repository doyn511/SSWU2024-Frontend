import { css } from '@emotion/react';

function MainPage() {
  return <div css={mainContainer}>메인페이지래요</div>;
}

export default MainPage;

//스타일 파일 분리 말고 이렇게 한번에 쓰는거 어떨까욤?
const mainContainer = css`
  width: 100rem;
  height: 10rem;

  background-color: black;
  color: white;

  text-align: center;
`;
