
const PubSub = {
  publish: function(channel, payload){
    // console.log(`published on channel ${channel}. payload: ${payload}`);
    //channelis the channel we want to publsih on and the payload is the data we want to load
    const event = new CustomEvent(channel, {
      detail: payload
    });
      document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    // console.log(`subscribed to channel ${channel}`);
    document.addEventListener(channel, callback);
  }

}

module.exports = PubSub;
