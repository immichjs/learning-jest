function sum (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') return false
  return x + y
}

module.exports = sum