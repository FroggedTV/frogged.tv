function findBy(obj, key, value) {
  obj.find(item => item[key] === value);
}

export default { findBy };
