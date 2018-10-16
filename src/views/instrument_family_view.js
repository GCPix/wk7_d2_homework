const PubSub = require('../helpers/pubsub.js')

const InstrumentFamilyView = function(){

};

InstrumentFamilyView.prototype.bindEvents = function () {

      PubSub.subscribe('InstrumentFamilies:familyData', (event) => {
      const familyInfo = event.detail
      console.log(event.detail);
      const bodyTag = document.getElementsByTagName('body')[0];
      const newDiv = document.createElement('div');
      newDiv.classList.add('familyInfo')
      bodyTag.appendChild(newDiv)
      const div = document.querySelector('.familyInfo')
      const info = this.populateView(familyInfo)
      div.innerHTML = ''
      div.appendChild(info)

  })
};

InstrumentFamilyView.prototype.populateView = function (familyData) {
  debugger;
  const familyDetail = document.createElement('div');
  familyDetail.classList.add('familyInfo')
  const familyName = document.createElement('h2');
  familyDetail.appendChild(familyName)
  familyName.textContent = familyData.name;

  const famDescription = document.createElement('p');
  familyName.appendChild(famDescription)
  famDescription.textContent = familyData.description;
  const ul = document.createElement('ul')
  familyDetail.appendChild(ul)
    for(let instrument of familyData.instruments){
      const li = document.createElement('li')
      ul.appendChild(li)
      li.textContent = instrument 
    }
  return familyDetail
};

module.exports = InstrumentFamilyView;
