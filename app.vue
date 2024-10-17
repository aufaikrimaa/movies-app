<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}
@media (min-width: 300px) {
  .container {
    margin: 0 8px;
    max-width: max-content !important;
    width: auto;
  }
}
@media (min-width: 640px) {
  .container {
    margin: 0 20px;
  }
}
@media (min-width: 768px) {
  .container {
    margin: 0 28px;
  }
}

@media (min-width: 1024px) {
  .container {
    margin: 0 36px;
    width: auto;
  }
}
@media (min-width: 1280px) {
  .container {
    margin: 0 40px;
  }
}
</style>
