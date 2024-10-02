export const getImage = (url?: string): string => {
  return window.location.protocol + '//' + window.location.host + '/src/assets/images' + url
}

export const truncateText = (lines: number = 1) => {
  return ` display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
        overflow: hidden;`
}