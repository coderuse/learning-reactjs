type EndPoint = {
    method: string;
    url: string;
}

type EndPointMap = {
    [name: string]: EndPoint;
}

export const endPoints: EndPointMap = {
  currentUser: {
    method: 'GET',
    url: 'https://www.yammer.com/api/v1/users/current.json'
  },
  allFeed: {
    method: 'GET',
    url: 'https://www.yammer.com/api/v1/messages.json'
  },
  topFeed: {
    method: 'GET',
    url: 'https://www.yammer.com/api/v1/messages/algo.json'
  },
  followingFeed: {
    method: 'GET',
    url: 'https://www.yammer.com/api/v1/messages/following.json'
  },
  defaultFeed: {
    method: 'GET',
    url: 'https://www.yammer.com/api/v1/messages.json/my_feed.json'
  }
};