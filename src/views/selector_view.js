const PubSub = require('../helpers/pubsub.js')

const SelectorView = function(select){
  this.select = select
};

SelectorView.prototype.bindEvents = function () {

  PubSub.subscribe('InstrumentFamilies:familyList', (event)=>{
    const familyNames = event.detail;
    console.log('selectview family names', familyNames);
    this.populateList(familyNames)
  })

  this.select.addEventListener('change', (event) => {
    const familyIdSelected = event.target.value;
    PubSub.publish('SelectorView:familyPicked',familyIdSelected)
  })

};


SelectorView.prototype.populateList = function (instrumentArray) {

      instrumentArray.forEach((family, index)=>{
        const option = document.createElement('option');
        option.textContent = family.name;
        option.value = index;
        this.select.appendChild(option);
      })

};

module.exports = SelectorView;
