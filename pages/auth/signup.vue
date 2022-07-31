<template>
  <div class="container" v-if="!isLoading">
    <Fieldset legend="Sign Up" class="signup-container">
      <div>
        <div class="p-float-label field">
          <InputText
            id="username"
            class="input-width"
            type="text"
            v-model="userName"
          />
          <label for="username">Username (Optional)</label>
        </div>
      </div>
      <div>
        <div class="p-float-label p-input-icon-right field">
          <i class="pi pi-envelope" />
          <InputText
            id="email"
            class="input-width"
            v-model="email"
            :class="(error.indexOf('email') !== -1 || error.indexOf('all') !== -1) && 'p-invalid'"
          />
          <label for="email">Email*</label>
        </div>
      </div>
      <div>
        <div class="p-float-label field">
          <Password
            id="password"
            toggleMask
            v-model="password"
            :class="(error.indexOf('password') !== -1 || error.indexOf('all') !== -1) && 'p-invalid'"
          >
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer="sp">
              {{ sp.level }}
              <Divider />
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
          <label for="password">Password*</label>
        </div>
      </div>
      <small v-if="error" class="p-error">{{ error }}</small>
      <div class="button-container">
        <Button
          label="Confirm"
          class="p-button-raised p-button-text"
          @click="submit"
        />
      </div>
    </Fieldset>
  </div>
  <div class="container" v-else>
    <ProgressSpinner />
  </div>
</template>

<script lang="ts">
import "~/assets/css/signup.css";
export default {
  setup() {
    const email = ref("");
    const userName = ref("");
    const password = ref("");
    const isLoading = useLoading();
    const error = useSignUpError();

    const submit = () => {
      
      if (email.value && password.value) {
        signUp(email.value, password.value, userName.value);
      } else {
        if (!email.value && !password.value) {
          error.value = "Please input all required field!";
        } else if (!email.value) {
          error.value = "Please input email!";
        } else if (!password.value) {
          error.value = "Please input password!";
        }
      }
    };

    onMounted(() => {
      // clear error message in case saving the old state
      clearError();
    });

    return {
      email,
      userName,
      password,
      submit,
      isLoading,
      error,
    };
  },
};
</script>
