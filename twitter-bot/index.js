require('dotenv').config()

const twit = require('./twit');

function getTweets(since_id) {
    return new Promise((resolve, reject) => {
      let params = {
        q: "#entryleveldeveloper",
        count: 10,
      };
      if (since_id) {
        params.since_id = since_id;
      }
      console.log("We are getting the tweets ...", params);
      twit.get("search/tweets", params, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }
  
  function postRetweet(id) {
    return new Promise((resolve, reject) => {
      let params = {
        id,
      };
      twit.post("statuses/retweet/:id", params, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }