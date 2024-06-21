export const isAuthenticated = () => !!localStorage.getItem("token");

export const getOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("data-user");
  window.location.href = "/";
};

export const getStaredShortener = (url: string) => {
  if (!localStorage.getItem("onQueue")) {
    localStorage.setItem("onQueue", url);
  }

  return;
};

export const getFavicon =
  "https://s2.googleusercontent.com/s2/favicons?domain=";
