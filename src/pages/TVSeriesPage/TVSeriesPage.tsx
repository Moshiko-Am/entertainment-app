import React, { useMemo } from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import useAppStore from "../../store/store.ts";
import DisplayItem from "../../components/DisplayItem/DisplayItem.tsx";

interface ITVSeriesPage {}

const TVSeriesPage: React.FC<ITVSeriesPage> = () => {
  const BEMBlock = "tv-series-page";

  const { tvSeries, query } = useAppStore();

  const filteredTVSeries = useMemo(() => {
    return tvSeries?.filter((tvSeries) => {
      return tvSeries?.title?.toLowerCase().includes(query.toLowerCase());
    });
  }, [tvSeries, query]);

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      {filteredTVSeries?.map((tvSeries) => (
        <DisplayItem key={tvSeries?.id} item={tvSeries} />
      ))}
    </div>
  );
};

export default TVSeriesPage;
