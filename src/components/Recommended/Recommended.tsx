import React, { useMemo } from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import useAppStore from "../../store/store.ts";
import DisplayItem from "../DisplayItem/DisplayItem.tsx";

interface IRecommended {}

const Recommended: React.FC<IRecommended> = () => {
  const BEMBlock = "recommended";

  const { recommended, query } = useAppStore();

  const filteredItems = useMemo(() => {
    if (!query) return recommended;
    return recommended?.filter(
      (item) => item?.title?.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, recommended]);

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      <div
        className={generateBEMClassName({
          block: BEMBlock,
          element: "header-container",
        })}
      >
        <h1>Recommended for you</h1>
      </div>
      <div
        className={generateBEMClassName({
          block: BEMBlock,
          element: "grid-container",
        })}
      >
        {filteredItems?.map((item) => (
          <DisplayItem key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
