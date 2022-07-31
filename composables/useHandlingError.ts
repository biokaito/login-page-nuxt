export const clearError = () => {
    const errorSignIn = useSignInError();
    const errorSignUp = useSignUpError();

    errorSignIn.value = "";
    errorSignUp.value = "";
}