export const useLogonUser = () => useState("logonUser", () => null);
export const useLoading = () => useState("isLoading", () => false);
export const useSignInError = () => useState("signInError", () => "");
export const useSignUpError = () => useState("signUpError", () => "");