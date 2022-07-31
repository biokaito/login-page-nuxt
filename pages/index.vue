<template>
  <div class="container">
    <Image src="./assets/images/shark03.jpg" preview width="350" />
  </div>
</template>

<script lang="ts">
// define middleware for preventing user access while not login
definePageMeta({
  middleware: ["auth"],
});
</script>
