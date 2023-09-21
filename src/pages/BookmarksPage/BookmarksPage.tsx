import React, { useMemo } from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import useAppStore from "../../store/store.ts";
import DisplayItem from "../../components/DisplayItem/DisplayItem.tsx";

interface IBookmarksPage {}

const BookmarksPage: React.FC<IBookmarksPage> = () => {
  const BEMBlock = "bookmarks-page";

  const { bookmarks, query } = useAppStore();

  const filteredBookmarks = useMemo(() => {
    return bookmarks?.filter((bookmark) => {
      return bookmark?.title?.toLowerCase().includes(query.toLowerCase());
    });
  }, [bookmarks, query]);

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      <div
        className={generateBEMClassName({
          block: BEMBlock,
          element: "movies-container",
        })}
      >
        <h1
          className={generateBEMClassName({
            block: BEMBlock,
            element: "movies-title",
          })}
        >
          Bookmarked Movies
        </h1>
        <div
          className={generateBEMClassName({
            block: BEMBlock,
            element: "grid",
            modifier: "movies",
          })}
        >
          {filteredBookmarks
            ?.filter((bookmark) => bookmark?.category === "Movie")
            .map((bookmark) => (
              <DisplayItem key={bookmark?.id} item={bookmark} />
            ))}
        </div>
      </div>
      <div
        className={generateBEMClassName({
          block: BEMBlock,
          element: "series-container",
        })}
      >
        <h1
          className={generateBEMClassName({
            block: BEMBlock,
            element: "series-title",
          })}
        >
          Bookmarked TV Series
        </h1>
        <div
          className={generateBEMClassName({
            block: BEMBlock,
            element: "grid",
            modifier: "series",
          })}
        >
          {filteredBookmarks
            ?.filter((bookmark) => bookmark?.category === "TV Series")
            .map((bookmark) => (
              <DisplayItem key={bookmark?.id} item={bookmark} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarksPage;
