import { useFetch } from "#app";

const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  oriImg: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Img: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export const category = {
  movie: "movie",
  tv: "tv",
} as const;

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
} as const;

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
} as const;

const useTmdbApi = (endpoint: string, params: Record<string, any> = {}) => {
  const config = useRuntimeConfig();

  const { data, error } = useFetch(`${apiConfig.baseUrl}${endpoint}`, {
    params: {
      ...params,
      api_key: config.public.tmdbApiKey,
    },
  });

  if (error.value) {
    console.error("Error fetching data:", error.value);
    return null;
  }

  return data.value;
};

const tmdbApi = {
  getMoviesList: (
    type: keyof typeof movieType,
    params: Record<string, any> = {}
  ) => {
    return useTmdbApi(`movie/${movieType[type]}`, params);
  },
  getTvList: (type: keyof typeof tvType, params: Record<string, any> = {}) => {
    return useTmdbApi(`tv/${tvType[type]}`, params);
  },
  getVideos: (cate: keyof typeof category, id: number) => {
    return useTmdbApi(`${category[cate]}/${id}/videos`);
  },
  search: (cate: keyof typeof category, params: Record<string, any>) => {
    return useTmdbApi(`search/${category[cate]}`, params);
  },
  detail: (
    cate: keyof typeof category,
    id: number,
    params: Record<string, any> = {}
  ) => {
    return useTmdbApi(`${category[cate]}/${id}`, params);
  },
  credits: (cate: keyof typeof category, id: number) => {
    return useTmdbApi(`${category[cate]}/${id}/credits`);
  },
  similar: (cate: keyof typeof category, id: number) => {
    return useTmdbApi(`${category[cate]}/${id}/similar`);
  },
};

export default tmdbApi;
