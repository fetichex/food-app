function notFound() {
  return {
    status: 404,
    body: {
      error: 'Not Found'
    }
  }
}

module.exports = { notFound }
