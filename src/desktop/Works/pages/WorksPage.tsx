import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBg2Web } from '../../assets/image';
import PageLayout from '../../Common/PageLayout';
import Studios from '../components/Studios';

const WorksPage = () => {
  return (
    <PageLayout>
      <section css={worksPageContainer}>
        <div css={bgContainer}>
          <ImgBg2Web />
        </div>

        <p css={title}>Works</p>
        <Studios />
      </section>
    </PageLayout>
  );
};

export default WorksPage;

const worksPageContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 15.2rem 0 14.8rem 6rem;
`;

const bgContainer = css`
  position: absolute;
  top: 5.2rem;
  z-index: -1;
`;

const title = css`
  margin-bottom: 7.2rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;
