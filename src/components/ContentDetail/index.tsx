import React from "react";
import { format } from "date-fns";
import Spinner from "../common/Spinner";
import Bookmark from "../common/Bookmark";
import BookmarkToast from "../common/BookmarkToast";
import Image from "../common/Image";
import { useStories } from "../../hooks/stories";
import useQuery from "../../hooks/useQuery";
import { storageKey, addItems, getItems } from '../../utils/localStorage'
import styles from "./styles.module.scss";

const ContentDetail = () => {
  const query = useQuery();
  const [isAddedToBookmark, setAddedToBookmark] = React.useState<boolean>(false)
  const [showToast, setShowToast] = React.useState<boolean>(false)
  const values: any = query.get("id");

  console.log(isAddedToBookmark, showToast);
  

  React.useEffect(() => {
    const bookmarkList = getItems(storageKey.bookmark)
    console.log((bookmarkList || []).includes(values));
    
    setAddedToBookmark((bookmarkList || []).includes(values))
  }, [values])

  const {
    data = [],
    isFetching,
    isLoading,
  } = useStories({ ids: [values].join(",") });
  const showLoader = isFetching || isLoading;
  const [content] = data;

  if (showLoader) {
    return <Spinner isVisible />;
  }

  const handleBookmarkClick = () => {
    const bookmarkList = getItems(storageKey.bookmark)
    const isExist = bookmarkList.includes(values);
    if(isExist) {
      const removedValues = bookmarkList.filter((v: string) => v !== values)
      addItems(storageKey.bookmark, removedValues)
      setAddedToBookmark(false)
    } else {
      addItems(storageKey.bookmark, [...bookmarkList, values])
      setAddedToBookmark(true)
    }
    setShowToast(true)
  }

  return (
    <section className={styles.container}>
      {showLoader && <Spinner isVisible />}
      <Bookmark label={`${isAddedToBookmark ? 'REMOVE': 'ADD' } BOOKMARK`} onClick={handleBookmarkClick} />
      {!showLoader && (
        <div className={styles.contentWrapper}>
          <article className={styles.articleContainer}>
            <p className={styles.date}>
              {format(
                new Date(content.webPublicationDate),
                "EE dd mm yyyy hh.mm z"
              )}
            </p>
            <h1 className={styles.webTitle}>{content.webTitle}</h1>
            <h3 className={styles.headline}>{content.fields.headline}</h3>
            <div className={styles.body} dangerouslySetInnerHTML={{ __html: content.fields.body }} />
          </article>
          <div className={styles.imageContainer}>
                <Image imageURL={content.fields?.thumbnail} />
          </div>
        </div>
      )}
        <BookmarkToast
          isVisible={showToast}
          classNames={styles.toast}
          onClose={() => setShowToast(false)}
          type={isAddedToBookmark ? 'succuss': 'error' } 
          label={`${isAddedToBookmark ? 'saved to ': 'removed from '}bookmarks`} 
        />
    </section>
  );
};

export default ContentDetail;
