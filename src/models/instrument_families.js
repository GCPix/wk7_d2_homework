const PubSub = require('../helpers/pubsub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};


  InstrumentFamilies.prototype.bindEvents = function () {

    PubSub.publish('InstrumentFamilies:familyList', this.data)

    PubSub.subscribe('SelectorView:familyPicked', ()=>{
      indexGiven = event.detail
      console.log(event.detail);
      this.getFamilyDetail(indexGiven)
      })



  };

  InstrumentFamilies.prototype.getFamilyDetail = function (index) {
      const familyInfo = this.data[index]
      console.log(familyInfo);
      PubSub.publish('InstrumentFamilies:familyData', familyInfo)

  };
module.exports = InstrumentFamilies;
