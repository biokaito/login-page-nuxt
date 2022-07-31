export default defineNuxtRouteMiddleware(() => {
  const logonUser = useLogonUser();
  const isLoggedInUser = !!logonUser.value;

  if (!isLoggedInUser) {
    return navigateTo("/auth/signin");
  }
  
});
