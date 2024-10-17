<template>
  <div>
    <Navbar />
    <Hero />
    <MoviesMovieSlides
      category="movie"
      type="popular"
      title="Trending Movies"
    />
    <MoviesMovieSlides
      category="movie"
      type="top_rated"
      title="Top Rated Movies"
    />
    <MoviesMovieSlides
      category="movie"
      type="upcoming"
      title="Upcoming Movies"
    />
    <MoviesMovieSlides
      category="tv"
      type="top_rated"
      title="Top Rated Tv Shows"
    />
    <MoviesMovieSlides category="tv" type="popular" title="Popular Tv Shows" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
