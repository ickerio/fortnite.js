const {
  USER_INFO_KEYS,
  MODE_KEYS,
  STATS_KEYS,
  MATCH_KEYS,
  RECENT_MATCH_KEYS,
  ITEM_KEYS,
  CHALLENGE_KEYS
} = require('./object_keys');

const sleep = require('./sleep');

require('dotenv').config();
require('jest-extended');

const HTTP_TEST_TIMEOUT_MS = 10000;

const fortnite = require('../src/index');
const API_KEY = process.env.FORTNITE_KEY;

const USERNAME = 'ninja';
const ACCOUNT_ID = '4735ce91-3292-4caf-8a5b-17789b40f79c';

const INVALID_USERNAME = 'neuofiirhuidn';
const PLAYER_NOT_FOUND_ERROR = { error: 'Player Not Found' };

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

test('should return error on invalid username', () => {
  const client = new fortnite(API_KEY);
  expect.assertions(1);
  return client.get(INVALID_USERNAME).catch(e => expect(e).toEqual(PLAYER_NOT_FOUND_ERROR));
});

test(
  'should return user info with correct response type and structure',
  async () => {
    const client = new fortnite(API_KEY);
    await sleep(2000);
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
  },
  HTTP_TEST_TIMEOUT_MS
);

test(
  'should get matches with correct response type and structure',
  async () => {
    const client = new fortnite(API_KEY);
    await sleep(2000);
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
  },
  HTTP_TEST_TIMEOUT_MS
);

test(
  'should get current store with correct response type and structure',
  async () => {
    const client = new fortnite(API_KEY);
    await sleep(2000);
    const storeItems = await client.getStore();
    expect(storeItems).toBeArray();
    for (let item of storeItems) {
      expect(item).toBeObject();
      expect(item).toContainAllKeys(ITEM_KEYS);
      expect(item.imageUrl).toBeString();
      expect(item.manifestId).toBeNumber();
      expect(item.name).toBeString();
      expect(item.rarity).toBeString();
      expect(item.storeCategory).toBeString();
      expect(item.vBucks).toBeNumber();
    }
  },
  HTTP_TEST_TIMEOUT_MS
);

test(
  'should get current challenges with correct response type and structure',
  async () => {
    const client = new fortnite(API_KEY);
    await sleep(2000);
    const challenges = await client.getChallenges();
    expect(challenges).toBeObject();
    expect(challenges).toHaveProperty('items');
    expect(challenges.items).toBeArray();
    for (let challenge of challenges.items) {
      expect(challenge).toBeObject();
      expect(challenge).toContainAllKeys(CHALLENGE_KEYS);
      expect(challenge.name).toBeString();
      expect(challenge.questsCompleted).toBeString();
      expect(challenge.questsTotal).toBeString();
      expect(challenge.rewardDescription).toBeString();
      expect(challenge.rewardDescription).toEqual('None');
      expect(challenge.rewardName).toBeString();
      expect(challenge.rewardPictureUrl).toBeString();
      expect(challenge.type).toBeString();
    }
  },
  HTTP_TEST_TIMEOUT_MS
);
