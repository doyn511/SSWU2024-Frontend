import { css } from '@emotion/react';
import { colors, fonts } from '../../../styles/theme';
import { WorkInfoProps } from '../types/WorkDetailType';

function WorkInfo(props: WorkInfoProps) {
  const { title, description, engDescription, designers } = props;

  const designerList = designers.map((designer) => designer.name).join(' ');

  return (
    <div css={workInfoContainer}>
      <div css={mainCss}>
        <h1>{title}</h1>
        <p>{designerList}</p>
      </div>
      <div css={descriptionCss}>
        <p> {description}</p>
        <p> {engDescription}</p>
      </div>
    </div>
  );
}

export default WorkInfo;

const workInfoContainer = css`
  display: flex;
  gap: 6rem;
  flex-direction: column;

  width: 100%;
  padding: 2.4rem 1.6rem 6rem;
`;

const mainCss = css`
  color: ${colors.gray900};

  h1:nth-of-type(1) {
    margin-bottom: 0.2rem;

    ${fonts.mobile_title_semi_20};
  }

  p:nth-of-type(1) {
    ${fonts.mobile_body_reg_14};
  }
`;

const descriptionCss = css`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;

  ${fonts.mobile_body_reg_14};

  p:nth-of-type(1) {
    color: ${colors.gray900};
  }

  p:nth-of-type(2) {
    color: ${colors.gray500};
  }
`;
