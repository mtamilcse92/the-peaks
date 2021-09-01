import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../common/Spinner";
import Dropdown from "../common/Dropdown";
import Bookmark from "../common/Bookmark";
import PageHeader from "../common/PageHeader";
import ContentCard from "../common/ContentCard";
import { useStories } from "../../hooks/stories";
import { paths } from '../../constants/router';
import { PersistContext } from '../../context/persistContext';
import styles from "./styles.module.scss";

const Home = () => {
  const history = useHistory();
  const {state: persistState} = React.useContext(PersistContext)
  const [sortBy, setSortBy] = React.useState<string>('relevance')
  const q = persistState.searchText || ''
  const query = q ? { q, 'order-by': sortBy } : { 'order-by': sortBy }
  const { data, refetch, isFetching, isLoading } = useStories(query);
  const showLoader = isFetching || isLoading;

  React.useEffect(() => {
    refetch()
  }, [refetch, q, sortBy])

  return (
    <section className={styles.container}>
      <PageHeader
        title={(q || '').length !== 0 ? "Search Result" : "Top stories"}
        rhsElement={
          <Fragment>
            <Bookmark label="VIEW BOOKMARK" onClick={() => history.push(paths.bookmarks)} />
            <Dropdown onSelect={(item) => setSortBy(item.value)} />
          </Fragment>
        }
      />
      {showLoader && <Spinner isVisible />}
      {!showLoader && (
        <div className={styles.contentWrapper}>
          {data?.map((item) => (
            <div key={item.id} className={styles.content}>
              <ContentCard
                onClick={() => history.push(`${paths.contentDetail}?id=${item.id}`)}
                title={item.webTitle}
                imageUrl={item?.fields?.thumbnail}
                subtitle={item?.fields?.headline}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
