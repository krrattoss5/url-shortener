export const isAuthenticated = () => !!localStorage.getItem('token')

export const getOut = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}

export const getStaredShortener = (url: string) => {

    if(!localStorage.getItem('onQueue')){
      localStorage.setItem('onQueue', url)
    }

    return

}