import { create } from "zustand";

export interface IItem {
  id: number;
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: "Movie" | "TV Series";
  rating: "E" | "18+" | "PG";
  isBookmarked: boolean;
  isTrending: boolean;
}

interface StoreState {
  items: IItem[];
  recommended: IItem[];
  trending: IItem[];
  movies: IItem[];
  tvSeries: IItem[];
  bookmarks: IItem[];
  toggleBookmark: (id: number) => void;
  fetchItems: () => void;
  query: string;
  setQuery: (query: string) => void;
}

const useAppStore = create<StoreState>()((set) => ({
  items: [],
  movies: [],
  tvSeries: [],
  bookmarks: [],
  trending: [],
  recommended: [],
  query: "",
  setQuery: (query: string) => {
    set(() => ({
      query: query,
    }));
  },
  toggleBookmark: (id: number) => {
    set((state) => {
      const items = state.items.map((item) => {
        if (item.id === id) {
          item.isBookmarked = !item.isBookmarked;
        }
        return item;
      });
      return {
        items,
        movies: items.filter((item: IItem) => item.category === "Movie"),
        tvSeries: items.filter((item: IItem) => item.category === "TV Series"),
        bookmarks: items.filter((item: IItem) => item.isBookmarked),
        trending: items.filter((item: IItem) => item.isTrending),
        recommended: items.filter((item: IItem) => !item.isTrending),
      };
    });
  },
  fetchItems: () => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => {
        set(() => ({
          items: data,
          movies: data.filter((item: IItem) => item.category === "Movie"),
          tvSeries: data.filter((item: IItem) => item.category === "TV Series"),
          bookmarks: data.filter((item: IItem) => item.isBookmarked),
          trending: data.filter((item: IItem) => item.isTrending),
          recommended: data.filter((item: IItem) => !item.isTrending),
        }));
      });
  },
}));

export default useAppStore;
