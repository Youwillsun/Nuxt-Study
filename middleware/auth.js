/* eslint-disable */
export default function (context) {
  console.log('this is a middleware')
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
