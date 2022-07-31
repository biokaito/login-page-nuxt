<template>
  <div>
    <Toolbar>
      <template #start>
        <div class="margin-right">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/nuxt-app-bfc0b.appspot.com/o/shark03.jpg?alt=media&token=448ee5d9-22d0-4282-a3c1-c6762b3c6f80"
            alt="Image Text"
            width="100"
            class="logo-image"
            @click="router.push('/')"
          />
        </div>
        <div class="welcome-message" v-if="user">Hello, {{user && user.displayName ? user.displayName : user.email}}</div>
      </template>

      <template #end>
        <div v-if="user">
          <Button
            label="Sign Out"
            class="p-button-text p-button-md"
            icon="pi pi-sign-out"
            :disabled="isLoading && 'disabled'"
            @click="signOut"
          />
        </div>
        <div v-else>
          <Button
            v-if="!route.name || route.name.indexOf('signin') === -1"
            label="Sign In"
            class="p-button-text p-button-md margin-right"
            icon="pi pi-sign-in"
            :disabled="isLoading && 'disabled'"
            @click="router.push('/auth/signin')"
          />
          <Button
            v-if="!route.name || route.name.indexOf('signup') === -1"
            label="Sign Up"
            class="p-button-text p-button-md"
            icon="pi pi-plus"
            :disabled="isLoading && 'disabled'"
            @click="router.push('/auth/signup')"
          />
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script lang="ts">
import "@/assets/css/navbar.css";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const user =  useLogonUser();
    const isLoading = useLoading();

    return {
      router,
      route,
      user,
      isLoading
    };
  },
};
</script>
