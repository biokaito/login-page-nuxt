import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

export const signUp = async (
  email: string,
  password: string,
  displayName: string
) => {
  const isLoading = useLoading();
  const auth = getAuth();
  const router = useRouter();
  const logonUser = useLogonUser();

  isLoading.value = true;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      logonUser.value = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: displayName,
      })
        .then((res) => {
          router.push("/");
          isLoading.value = false;
        })
        .catch((err) => {
          alert(err);
          isLoading.value = false;
        });
    })
    .catch((err) => {
      const signUpErr = useSignUpError();
      if (err.code === "auth/email-already-in-use") {
        signUpErr.value = "That email is already in use!";
      } else if (err.code === "auth/invalid-email") {
        signUpErr.value = "That email is invalid!";
      } else if (err.code === "auth/weak-password") {
        signUpErr.value = "That password is too weak!";
      }
      isLoading.value = false;
    });
};

export const signIn = async (email: string, password: string) => {
  const auth = getAuth();
  const router = useRouter();
  const isLoading = useLoading();
  const logonUser = useLogonUser();

  isLoading.value = true;

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      logonUser.value = userCredential.user;
      router.push("/");
      isLoading.value = false;
    })
    .catch((err) => {
      const signInErr = useSignInError();
      if (err.code === "auth/invalid-email") {
        signInErr.value = "That email is invalid!";
      } else if (err.code === "auth/user-not-found") {
        signInErr.value = "That email not found!";
      } else if (err.code === "auth/wrong-password") {
        signInErr.value = "That password is wrong!";
      }
      isLoading.value = false;
    });
};

export const signOut = async () => {
  const auth = getAuth();
  const router = useRouter();
  const logonUser = useLogonUser();

  await auth
    .signOut()
    .then((res) => {
      console.log("Sign Out: ", res);
      logonUser.value = null;
      router.push("/auth/signin");
    })
    .catch((err) => {
      alert(err);
    });
};
