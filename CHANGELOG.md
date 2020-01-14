# fortnite.js Changelog

# v2.1.4

- Updated dependencies to fix security vulnerabilities
- Fixed failing unit tests
- Switched Jest unit test runner to jest-circus from jest-jasmine2
- Made tests run serially and increased test timeout to 10 secs for those with HTTP requests

# v2.1.3

- Fixed error handling

# v2.1.2

- Updated dependencies to fix security vulnerabilities

# v2.1.1

- Should fix some security issues

# v2.1.0

- Added tests
- Replaced `snekfetch` package with `node-fetch`

# v2.0.2

- Now using JSdoc, hopefully to fortnite.js.org soon!
- Using travis for some auto tests as well

# v2.0.1

- Fix handling errors

# v2.0.0

- Added match history
- Added fortnite store
- Added active challenges
- (Thanks abhinavk99 for your contribution!)
- Docs to be updated shortly

# v1.3.5

- Removed prior\_

# v1.3.4

- Added prior solo/duo/squad to wrapper
- Remove time-based stats that Fortnite stopped sending
- (Thanks abhinavk99 for your contribution!)

# v1.3.3

- Added cur season stuff for solo, duo and squad (Account.cur_solo etc)

# v1.3.1

- Added raw parameter in `<Client>.get()`, will just output unfiltered JSON data if `true`, default `false`. Will basically allow you to access data if it has not been added to the api wrapper.

# v1.3.0

- Added support for the recent (unannounced) API addition of `recentMatches`. You can now see how your performed in your recent sessions!
- Addded support for TRN Rating object in `solo`, `duo` and `squad`, which is another accurate measurement to get a players overall ranking.

# v1.2.2

- Better support for URI encoding in usernames

# v1.2.1

- Changed the examples according to update v1.2

# v1.2.0

- Updated API documentation
- Restructured `<fortnite>.stats` into a nicer object.

# v1.1.0

- `<fortnite>.rateLimit` <Object> added - Custom support for ratelimiting available, reccomended for large scale apps. 30 hits per minute per api key, reseting every time the servers clock ticks to a new minute.

# v1.0.0

- First stable release
