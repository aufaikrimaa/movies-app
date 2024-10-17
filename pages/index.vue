<template>
  <div>
    <Navbar />
    <Hero />
    <MoviesMovieSlides category="movie" type="popular" />
    <MoviesMovieSlides category="movie" type="top_rated" />
    <MoviesMovieSlides category="movie" type="upcoming" />
    <MoviesMovieSlides category="tv" type="top_rated" />
    <MoviesMovieSlides category="tv" type="popular" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>
