import { css } from '@emotion/react';
import { colors, fonts } from '../../styles/theme';
import { IcGnbGraphic } from '../assets/icon';

const Header = () => {
  const GNB = ['Works', 'Designers', 'Displays'];

  return (
    <header css={headerContainer}>
      <IcGnbGraphic />
      <div css={gnbContainer}>
        {GNB.map((category) => {
          return (
            <button type="button" key={category} css={gnb}>
              {category}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;

const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;

  width: 100%;

  border-bottom: 0.1rem solid ${colors.gray300};
  background-color: ${colors.white};
`;

const gnbContainer = css`
  display: flex;
  gap: 10rem;
  justify-content: center;
  align-items: center;

  margin-right: 8rem;
`;

const gnb = css`
  color: ${colors.gray500};
  ${fonts.desktop_body_reg_18};
`;
