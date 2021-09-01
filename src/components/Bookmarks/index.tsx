import React from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "../common/Dropdown";
import PageHeader from "../common/PageHeader";
import Spinner from "../common/Spinner";
import ContentCard from "../common/ContentCard";
import { useStories } from "../../hooks/stories";
import { paths } from '../../constants/router';
import { storageKey, getItems } from '../../utils/localStorage'
import styles from "./styles.module.scss";

const Bookmarks = () => {
  const history = useHistory();
  const [sortBy, setSortBy] = React.useState<string>('relevance')
  const bookmarkList = getItems(storageKey.bookmark)
  

  const { data, isFetching, isLoading, refetch } = useStories({ ids: bookmarkList.join(','), 'order-by': sortBy });
  const showLoader = isFetching || isLoading;

  React.useEffect(() => {
    refetch()
  }, [sortBy, refetch])

  return (
    <section className={styles.container}>
      <PageHeader title="All bookmark" rhsElement={<Dropdown onSelect={(item) => setSortBy(item.value)} />} />
      {showLoader && <Spinner isVisible />}
      {!showLoader && <div className={styles.contentWrapper}>
          {data?.map((item) => (
            <div key={item.id} className={styles.content}>
              <ContentCard
                onClick={() => history.push(`${paths.contentDetail}?id=${item.id}`)}
                imageUrl={item?.fields?.thumbnail}
                subtitle={item?.fields?.headline}
              />
            </div>
          ))}
        </div>}
    </section>
  );
};

export default Bookmarks;
