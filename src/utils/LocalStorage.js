export const handleGoogleUserInLocalStorage = (googleUser = null) => {
  if (localStorage.getItem("GOOGLE_USER")) {
    return JSON.parse(localStorage.getItem("GOOGLE_USER"));
  } else if (googleUser) {
    localStorage.setItem("GOOGLE_USER", JSON.stringify(googleUser));
  }
};
