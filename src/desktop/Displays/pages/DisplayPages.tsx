import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DisplayPages = () => {
  return (
    <PageLayout>
      <div css={container}>디스플레이 페이지 💥</div>
    </PageLayout>
  );
};

export default DisplayPages;

const container = css`
  margin-top: 5.5rem;

  ${fonts.desktop_title_reg_60};
`;
