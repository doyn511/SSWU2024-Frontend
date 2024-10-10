import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGetWorkDesigners from '../../../libs/hooks/useGetWorkDesigners';
import useGetWorkDetail from '../../../libs/hooks/useGetWorkDetail';
import PageLayout from '../../Common/PageLayout';
import Designers from '../components/Designers';
import DetailImages from '../components/DetailImages';
import Details from '../components/Details';

const WorkDetailPage = () => {
  const { workId } = useLocation().state;
  const { workDetail, isWorkDetailLoading } = useGetWorkDetail(workId);
  const { workDesigners, isWorkDesignersLoading } = useGetWorkDesigners(workId);
  const isLoading = isWorkDetailLoading || isWorkDesignersLoading;

  const { workTitle, workBody, workEngBody, thumbnail, images } =
    !isWorkDetailLoading && workDetail.data;
  const designers = !isWorkDesignersLoading && workDesigners.data;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout>
      {!isLoading && (
        <section css={workDetailContainer}>
          <img src={thumbnail} css={workThumbnail} />
          <Details
            workTitle={workTitle}
            designers={designers}
            workBody={workBody}
            workEngBody={workEngBody}
          />
          <DetailImages images={images} />
          <Designers designers={designers} />
        </section>
      )}
    </PageLayout>
  );
};

export default WorkDetailPage;

const workDetailContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 5.2rem;
`;

const workThumbnail = css`
  width: 100%;
  height: calc(100vh / 1.65);
`;
