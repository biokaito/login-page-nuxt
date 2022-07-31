<template>
  <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
    <Head>
      <Title>BasTrieu's World</Title>
      <Meta name="description" content="Nothing here" />
      <Link
        rel="icon"
        type="image/x-icon"
        href="https://firebasestorage.googleapis.com/v0/b/nuxt-app-bfc0b.appspot.com/o/shark03.jpg?alt=media&token=448ee5d9-22d0-4282-a3c1-c6762b3c6f80"
        as="scrit"
      />
    </Head>
  </Html>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
