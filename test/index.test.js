const { USER_INFO_KEYS, MODE_KEYS, STATS_KEYS, MATCH_KEYS, RECENT_MATCH_KEYS } = require("./object_keys");

require('dotenv').config();
require('jest-extended');

const fortnite = require('../src/index');
const API_KEY = process.env.FORTNITE_KEY;

const USERNAME = 'ninja';
const ACCOUNT_ID = '4735ce91-3292-4caf-8a5b-17789b40f79c';

test('should be defined', () => {
  expect(fortnite).toBeDefined();
});

test('should return fortnite.js client', () => {
  const client = new fortnite(API_KEY);
  expect(client.get).toBeDefined();
  expect(client.getMatches).toBeDefined();
  expect(client.getStore).toBeDefined();
  expect(client.getChallenges).toBeDefined();
});

test('should return user info with correct response type and structure', async () => {
  const client = new fortnite(API_KEY);
  const info = await client.get(USERNAME);
  expect(info).toContainAllKeys(USER_INFO_KEYS);
  expect(info.accountId).toBeString();
  expect(info.curr_duo).toBeObject();
  expect(info.curr_duo).toContainAllKeys(MODE_KEYS);
  expect(info.curr_solo).toBeObject();
  expect(info.curr_solo).toContainAllKeys(MODE_KEYS);
  expect(info.curr_squad).toBeObject();
  expect(info.curr_squad).toContainAllKeys(MODE_KEYS);
  expect(info.duo).toBeObject();
  expect(info.duo).toContainAllKeys(MODE_KEYS);
  expect(info.solo).toBeObject();
  expect(info.solo).toContainAllKeys(MODE_KEYS);
  expect(info.squad).toBeObject();
  expect(info.squad).toContainAllKeys(MODE_KEYS);
  expect(info.displayName).toBeString();
  expect(info.platformId).toBeNumber();
  expect(info.platformName).toBeString();
  expect(info.platformNameLong).toBeString();
  expect(info.recentMatches).toBeArray();
  for (let recentMatch of info.recentMatches) {
    expect(recentMatch).toBeObject();
    expect(recentMatch).toContainAllKeys(MATCH_KEYS.concat(RECENT_MATCH_KEYS));
    expect(recentMatch.dateCollected).toBeString();
    expect(recentMatch.id).toBeNumber();
    expect(recentMatch.kills).toBeNumber();
    expect(recentMatch.matches).toBeNumber();
    expect(recentMatch.minutesPlayed).toBeNumber();
    expect(recentMatch.platform).toBeNumber();
    expect(recentMatch.playlist).toBeString();
    expect(recentMatch.score).toBeNumber();
    expect(recentMatch.top1).toBeNumber();
    expect(recentMatch.top10).toBeNumber();
    expect(recentMatch.top12).toBeNumber();
    expect(recentMatch.top25).toBeNumber();
    expect(recentMatch.top3).toBeNumber();
    expect(recentMatch.top5).toBeNumber();
    expect(recentMatch.top6).toBeNumber();
    expect(recentMatch.trnRating).toBeNumber();
    expect(recentMatch.trnRatingChange).toBeNumber();
  }
  expect(info.stats).toBeObject();
  expect(info.stats).toContainAllKeys(STATS_KEYS);
  for (let key in info.stats) {
    expect(info.stats[key]).toBeString();
  }
});

test('should get matches with correct response type and structure', async () => {
  const client = new fortnite(API_KEY);
  const matches = await client.getMatches(ACCOUNT_ID);
  expect(matches).toBeArray();
  for (let match of matches) {
    expect(match).toBeObject();
    expect(match).toContainAllKeys(MATCH_KEYS);
    expect(match.dateCollected).toBeString();
    expect(match.id).toBeNumber();
    expect(match.kills).toBeNumber();
    expect(match.matches).toBeNumber();
    expect(match.playlist).toBeString();
    expect(match.score).toBeNumber();
    expect(match.top1).toBeNumber();
    expect(match.top10).toBeNumber();
    expect(match.top12).toBeNumber();
    expect(match.top25).toBeNumber();
    expect(match.top3).toBeNumber();
    expect(match.top5).toBeNumber();
    expect(match.top6).toBeNumber();
    expect(match.trnRating).toBeNumber();
  }
})
