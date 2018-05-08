# fortnite.js Changelog

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