export const getImage = (url?: string): string => {
  return window.location.protocol + '//' + window.location.host + '/src/assets/images' + url
}