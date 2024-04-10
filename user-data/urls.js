const githubUsername = "kr-pks";
const mediumUsername = "mrpksjr";
const apiKey = 'wsjdl3gkwwqiz5zatutvl59cf4ujm5ujoagj2z7e';
const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@${username}/feed`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    medium: createMediumURL(mediumUsername),
    gitConnected: createGitConnectedURL(githubUsername)
};
