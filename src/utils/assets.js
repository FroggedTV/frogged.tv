function getImagePath (image) {
  return image ? require(`@/assets/${image}`) : ''
}

export default { getImagePath }
