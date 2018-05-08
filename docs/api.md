# fortnite.js Documentation
**Version 1.0**

**Table Of Contents**
- [Client](#Client)
    * [get()](#clientgetusernameplatformraw)
    * [Platforms](#platforms)
- [Account](#Account)
    * [Solo, Duo, Squad Stats](#accountsoloaccountduoaccountsquad)
    * [Lifetime Stats](#accountstats)
    * [Recent Matches](#accountrecentmatches)

## Client

#### Client#get(username, platform, raw)
- `username` <[String]> Epic Games / Xbox Live / Playstation Network username
- `platform` <[Platform]>
- `raw` <[Boolean]> default: `false`, if `true` will return just raw JSON api data
- Returns: <[Account]>

#### Platforms
- PC: `pc` or `<Client>.PC`
- XBOX: `xbl` or `<Client>.XBOX`
- PS4: `psn` or `<Client>.PS4`

## Account

| Data               | Type       | Description                     |
|--------------------|------------|---------------------------------|
| `accountId`        | <[String]> | UUID for account                |
| `platformId`       | <[Number]> | ID of platform                  |
| `platformName`     | <[String]> | String based id of the platform |
| `platformNameLong` | <[String]> | Human readable platform name    |
| `displayName`      | <[String]> | Account holders display name    |

#### `<Account>.solo` / `<Account>.duo` / `<Account>.squad`
Also `<Account>.prior_solo` / `<Account>.prior_duo` / `<Account>.prior_squad`
And `<Account>.curr_solo` / `<Account>.curr_duo` / `<Account>.curr_squad`

Each one below is an <[Object]>
- TRN Rating: `trnRating`
- Score: `score` 
- Top 1: `top1` 
- Top 3: `top3` 
- Top 5: `top5` 
- Top 6: `top6` 
- Top 10: `top10` 
- Top 12: `top12` 
- Top 25: `top25` 
- Kill / Death: `kd` 
- Matches Played: `matches` 
- Kills: `kills` 
- Minutes Played: `minutesPlayed` 
- Kills Per Minute: `kpm` 
- Kills Per Game: `kpg` 
- Avg Survival Time `avgTimePlayed` 
- Score Per Match: `scorePerMatch` 
- Score Per Minute: `scorePerMin`

Example of `<Account>.duo.kpm`
```js
{ fullName: 'Kills Per Min',
  name: 'KPM',
  category: 'General',
  value: '0.6',
  valueInt: undefined,
  rank: 100033,
  percentile: 13,
  displayValue: '0.6'
}
```

#### `<Account>.stats`
A summarised life time stats of the above, but each is not an object, only a human readable string.
- Top 5: `top5`
- Top 3s: `top3` 
- Top 6s: `top6`
- Top 12s: `top12`
- Top 25s: `top25`
- Score: `score`
- Matches Played: `matches`
- Wins: `top1`
- Win%: `winPercent`
- Kills: `kills`
- K/d: `kd`

#### `<Account>.recentMatches`
An array of recent matches from the player, each containing the following objects. The API strangely groups up the matches hence `matches`, I'm currently looking further into it to better understand it.
- `id`
- `accountId`
- `playlist`
- `kills`
- `minutesPlayed`
- `top1`
- `top5`
- `top6`
- `top10`
- `top12`
- `top25`
- `matches`
- `top3`
- `dateCollected`
- `score`
- `platform`
- `trnRating`
- `trnRatingChange`


[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String "String"
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object"
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array"
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number"
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map"
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean "Boolean"

[Account]: #account "Account"
[Client]: #client "Client"
[Platform]: #platforms "Platform"