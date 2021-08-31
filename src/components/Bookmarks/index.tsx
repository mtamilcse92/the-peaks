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
  //   const query = useQuery();
  //   const { id } = query.get("id");
  const history = useHistory();
  const bookmarkList = getItems(storageKey.bookmark)
  console.log(bookmarkList);
  

  const { data, isFetching, isLoading } = useStories({ ids: bookmarkList.join(',')});
  const showLoader = isFetching || isLoading;

  return (
    <section className={styles.container}>
      <PageHeader title="All bookmark" rhsElement={<Dropdown />} />
      {showLoader && <Spinner isVisible />}
      {!showLoader && <div className={styles.contentWrapper}>
          {data?.map((item) => (
            <div key={item.id} className={styles.content}>
              <ContentCard
                onClick={() => history.push(`${paths.contentDetail}?id=${item.id}`)}
                description={item.fields.body}
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
