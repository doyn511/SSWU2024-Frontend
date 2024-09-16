import { css } from '@emotion/react';
import { useState } from 'react';
import { colors, fonts } from '../../../styles/theme';
import { IcListRight } from '../../assets/icon';
import { ImgBg2Web } from '../../assets/image';
import { STUDIO_DETAILS } from '../constants/studioDetail';

const WorksPage = () => {
  const [hoveredStudio, setHoveredStudio] = useState('');
  return (
    <section css={worksPageContainer}>
      <div css={imgContainer}>
        <ImgBg2Web />
      </div>

      <p css={title}>Works</p>

      <article css={totalStudioContainer}>
        {STUDIO_DETAILS.map((detail, idx) => {
          const { studio, description } = detail;
          const isHoveredStudio = studio === hoveredStudio;
          return (
            <article key={idx} css={studioContainer}>
              <span
                css={studioName(isHoveredStudio)}
                onMouseEnter={() => setHoveredStudio(studio)}
              >
                {studio}
              </span>

              {isHoveredStudio && (
                <div css={hoveredContainer}>
                  <IcListRight />
                  <p css={studioDescription}>{description}</p>
                </div>
              )}
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default WorksPage;

const worksPageContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 15.2rem 0 14.8rem 6rem;
`;

const imgContainer = css`
  position: absolute;
  top: 5.2rem;
  z-index: -1;
`;

const title = css`
  margin-bottom: 7.2rem;

  color: ${colors.gray900};
  ${fonts.desktop_title_reg_54};
`;

const totalStudioContainer = css`
  display: flex;
  gap: 3.6rem;
  justify-content: center;
  flex-direction: column;
`;

const studioContainer = css`
  display: flex;
  align-items: center;
  position: relative;
`;

const studioName = (isHoveredStudio: boolean) => css`
  width: 22.9rem;

  color: ${isHoveredStudio ? colors.pink300 : colors.gray900};
  ${fonts.desktop_title_reg_24};
`;

const hoveredContainer = css`
  display: flex;

  margin-left: 1.2rem;
`;

const studioDescription = css`
  position: absolute;

  width: 65rem;
  margin-left: 7.3rem;

  color: ${colors.gray900};

  ${fonts.desktop_body_reg_16};
  word-break: keep-all;
`;
