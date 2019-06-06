/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'example') {
    return '/example/' + doc.uid
  }

  if (doc.type === 'documentation') {
    return '/documentation/' + doc.uid
  }

  return '/not-found'
}
