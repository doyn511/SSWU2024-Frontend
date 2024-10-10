import { css, keyframes } from '@emotion/react';
import { useEffect, useState } from 'react';
import { colors, fonts } from '../../../styles/theme';
import { ImgBubble, ImgMainPeople } from '../../assets/image';

const InteractiveViews = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isVerticalScrollLocked, setIsVerticalScrollLocked] = useState(false);

  const textEventHandler = () => {
    const text = document.querySelector('.text') as HTMLElement;

    if (text) {
      if (text.getBoundingClientRect().top < windowHeight - 500) {
        text.style.opacity = '0';
      } else {
        text.style.opacity = '1';
      }
    }
  };

  const bubbleEventHandler = () => {
    const bubble = document.querySelector('.bubble') as HTMLElement;

    if (bubble) {
      if (bubble.getBoundingClientRect().top < windowHeight - 515) {
        setTimeout(() => {
          bubble.style.opacity = '1';
          bubble.style.transform = 'translateY(-100px)';
        }, 200);
      } else {
        bubble.style.transform = 'translateY(200px)';
        bubble.style.opacity = '0';
      }
    }
  };

  const peopleSliderEventHandler = () => {
    const peopleSlider = document.querySelector('.peopleSlider') as HTMLElement;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    peopleSlider.scrollLeft = 0;

    if (peopleSlider && pageHeight / scrollTop <= 2.3) {
      // 세로 스크롤 잠금 활성화
      setIsVerticalScrollLocked(true);
      // 현재 스크롤 위치로 고정 -> 이거 왜 안되지 ?
      window.scrollTo(0, scrollTop);

      // 세로 스크롤 비율 계산
      const scrollRatio = scrollTop / pageHeight;
      // 가로 스크롤 최대 거리
      const maxScrollLeft = peopleSlider.scrollWidth - peopleSlider.clientWidth;

      // 가로 스크롤 이동
      peopleSlider.scrollLeft = maxScrollLeft * scrollRatio;

      if (peopleSlider.scrollLeft >= maxScrollLeft) {
        // 가로 스크롤이 끝에 도달하면 세로 스크롤 잠금 해제
        setIsVerticalScrollLocked(false);
        if (!isVerticalScrollLocked) {
          window.addEventListener('scroll', textEventHandler);
          window.addEventListener('scroll', bubbleEventHandler);
        }
      }
    }
  };

  console.log(isVerticalScrollLocked);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('scroll', () => {
      if (!isVerticalScrollLocked) {
        peopleSliderEventHandler();
      }
    });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', textEventHandler);
      window.removeEventListener('scroll', bubbleEventHandler);
      window.removeEventListener('resize', handleResize);
    };
  }, [windowHeight]);

  return (
    <section css={interactiveViewContainer}>
      <article css={individualsContainer}>
        <div className="text" css={individualsTitleContainer}>
          <span css={individualsTitle}>Moments of Individuals</span>
          <span
            css={individualsDesc}
          >{`성신여대 디자인과 졸업생들은 각자의 삶 속에서 다양한 일상과 경험을 마주하며 자신만의 길을 걸어갑니다.\n각자의 개성과 비전이 교차하는 복잡한 관계 속에서 우리는 유기적 네트워크를 이루고, 그 안에서 의미와 가치를 재창조합니다.\n이는 우리 모두를 더 크고 의미 있는 흐름 속으로 이끌어 갑니다.`}</span>
        </div>

        <article className="peopleSlider" css={sliderBannerContainer}>
          <div css={animationBox}>
            <img src={ImgMainPeople} css={individualsPeopleImg} />
          </div>
        </article>
        <img className="bubble" src={ImgBubble} css={bubble} />
      </article>
    </section>
  );
};

export default InteractiveViews;

const interactiveViewContainer = css`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: calc(100vh / 6.75) 0 calc(100vh / 5.7857);
  margin-top: 5.2rem;
`;

const individualsContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const individualsTitleContainer = css`
  display: flex;
  gap: calc(100vh / 22.5);
  align-items: center;
  flex-direction: column;

  opacity: 1;
  transition: opacity 2s ease;
`;

const individualsTitle = css`
  color: ${colors.gray900};
  ${fonts.desktop_title_semi_60};
`;

const individualsDesc = css`
  margin-bottom: calc(100vh / 11.4085);

  color: ${colors.gray900};

  ${fonts.desktop_body_reg_18_desc};
  text-align: center;

  white-space: pre-wrap;
`;

const sliderBannerContainer = css`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: calc(100vh / 2.2253);
`;

const bubble = css`
  position: absolute;
  top: 100rem;

  opacity: 0;
  transition: opacity 3s ease;
  transition: transform 2s ease;
`;

const infiniteSlide = keyframes`
    0% {
       transform: translateX(0);
     }
     100% {
       transform: translateX(-500%);
     }
 `;

const animationBox = css`
  display: flex;

  width: calc(100% / 0.5894);
  height: 100%;

  /* animation: ${infiniteSlide};
  animation-duration: 100s;
  animation-timing-function: linear;
  animation-iteration-count: infinite; */
`;

const individualsPeopleImg = css`
  width: calc(100% / 0.5894);
  height: 100%;
`;
