import { css } from '@emotion/react';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GNB } from '../../constants/headerConst';
import { colors, fonts } from '../../styles/theme';
import { IcGnbGraphicMobile, IcHamburger } from '../assets/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDropDown = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleOutsideDropDown = (e: CustomEvent<MouseEvent>) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(e.target as Node)
    ) {
      document.body.style.overflow = '';
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideDropDown as EventListener);
    return () => {
      document.removeEventListener(
        'click',
        handleOutsideDropDown as EventListener,
      );
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {isMenuOpen && <div css={dropDownBackground} />}
      <header css={headerContainer} ref={dropDownRef}>
        <div css={headerCss}>
          <IcGnbGraphicMobile onClick={() => navigate('/')} />
          <button onClick={toggleDropDown}>
            <IcHamburger />
          </button>
        </div>

        {isMenuOpen && (
          <div css={dropDownMenu}>
            {GNB.map(({ url, name }) => {
              return (
                <Link to={url} key={url} css={dropDownItem}>
                  {name}
                </Link>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

const dropDownBackground = css`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgb(31 27 28 / 50%);
`;

const headerContainer = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;

  width: 100%;
`;

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.8rem;
  padding-right: 0.4rem;

  border-bottom: 1px solid ${colors.gray300};
  background-color: ${colors.white};
`;

const dropDownMenu = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  background-color: ${colors.white};
  color: ${colors.gray900};
  ${fonts.mobile_title_reg_18};
`;

const dropDownItem = css`
  width: 100%;
  height: 5.4rem;
  padding: 1.8rem 0 1.8rem 1.6rem;
`;
