import oneLine from 'common-tags/lib/oneLine'
import { join } from 'path'

// Is the javascript environment a browser?
export const isBrowser = typeof window !== 'undefined'

// Is the site running in production?
export const isProd = isBrowser
  ? window.location.hostname !== 'localhost'
  : process.env.NODE_ENV === 'production'

// Title of the site
export const title = 'BitMidi'

// Description of the site
export const description = oneLine`
  Listen to free MIDI songs, download the best MIDI files, and share the
  best free MIDIs on the web.
`

// Google Analytics tracking ID
export const analyticsId = 'UA-3898076-25'

// Keywords of the site
export const keywords = [
  'free midi',
  'mid',
  'midi files',
  'midi',
  'music'
]

// Website hostname + port
export const host = isProd
  ? 'bitmidi.com'
  : 'localhost:4000'

// Website origin (scheme + hostname + port)
export const httpOrigin = (isProd ? 'https' : 'http') + '://' + host

// Root path of project
export const rootPath = isBrowser
  ? '/'
  : join(__dirname, '..')

// Time (in milliseconds) to wait before updating page component data. Page
// data will be reloaded at least this often.
export const loadInterval = 10 * 60 * 1000 // 10 minutes

// Time (in milliseconds) to cache static resources. This value is sent in
// the HTTP "Cache-Control" header.
export const maxAgeStatic = isProd
  ? 7 * 24 * 60 * 60 * 1000 // 7 days
  : 0

// Time (in milliseconds) to keep cookies before deletion. This value is sent in
// the HTTP "Set-Cookie" header as the "Expires" attribute.
export const maxAgeCookie = isProd
  ? 365 * 24 * 60 * 60 * 1000 // 1 year
  : 0

// Time (in milliseconds) to cache the HTTP "Strict-Transport-Security" (HSTS)
// setting. This value is sent as the "max-age" attribute in the header.
export const maxAgeHSTS = 365 * 24 * 60 * 60 * 1000 // 1 year

// Time (in milliseconds) to wait before an API request is considered timed out.
export const apiTimeout = 30 * 1000

// User agent for API requests
export const apiUserAgent = `${title}/1.0.0 (${httpOrigin})`

// Website theme colors
export const theme = {
  mainColor: 'dark-blue',
  headerColor: 'hot-pink'
}