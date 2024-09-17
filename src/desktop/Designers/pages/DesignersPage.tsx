import { css } from '@emotion/react';
import { fonts } from '../../../styles/theme';
import PageLayout from '../../Common/PageLayout';

const DesignersPage = () => {
  return (
    <PageLayout>
      <div css={container}>디자이너 페이지 🔥</div>
    </PageLayout>
  );
};

export default DesignersPage;

const container = css`
  margin-top: 5.5rem;

  ${fonts.desktop_title_reg_60};
`;
