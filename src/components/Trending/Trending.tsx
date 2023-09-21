import React, { useMemo } from "react";
import { generateBEMClassName } from "bem-classnames-generator/dist";
import useAppStore from "../../store/store.ts";
import DisplayItem from "../DisplayItem/DisplayItem.tsx";
import { SwiperSlide, Swiper } from "swiper/react";

interface ITrending {}

const Trending: React.FC<ITrending> = () => {
  const BEMBlock = "trending";

  const { trending, query } = useAppStore();

  const filteredItems = useMemo(() => {
    if (!query) return trending;
    return trending?.filter(
      (item) => item?.title?.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, trending]);

  return (
    <div className={generateBEMClassName({ block: BEMBlock })}>
      <h1>Trending</h1>
      <Swiper spaceBetween={50}>
        {filteredItems?.map((item) => (
          <SwiperSlide key={item?.id}>
            <DisplayItem item={item} isCarouselView={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
