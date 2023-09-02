const getRandomInt = (): number => {
  return Math.floor(Math.random() * 30) + 10
}

const preparePath = (url: string | undefined) => {
  if (url) {
    return url.replace('http://gateway.marvel.com/v1/public', '')
  }
}

export {
  preparePath,
  getRandomInt
}

