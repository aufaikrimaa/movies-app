import { useFetch } from "#app";

export const apiConfig = {
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
  now_playing: "now_playing",
} as const;

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
  airing_today: "airing_today",
} as const;

const useTmdbApi = async (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  const config = useRuntimeConfig();

  try {
    const data = await $fetch(`${apiConfig.baseUrl}${endpoint}`, {
      params: {
        ...params,
        api_key: config.public.tmdbApiKey,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
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
  person: (id: number, endpoint?: string) => {
    const path = endpoint ? `person/${id}/${endpoint}` : `person/${id}`;
    return useTmdbApi(path);
  },
};

export default tmdbApi;
