const PubSub = require('../helpers/pubsub.js')

const InstrumentFamilyView = function(){

};

InstrumentFamilyView.prototype.bindEvents = function () {

      PubSub.subscribe('InstrumentFamilies:familyData', (event) => {



      createResultPlacement();
      const familyInfo = event.detail
      const div = document.querySelector('.familyInfo')
      const info = this.formatInfoView(familyInfo)
      div.innerHTML = ''
      div.appendChild(info)


  })
};

  const createResultPlacement = function(){
    const bodyTag = document.getElementsByTagName('body')[0];
    const newDiv = document.createElement('div');
    newDiv.classList.add('familyInfo')
    bodyTag.appendChild(newDiv)
  };

  const updateInfoView = function(event){


  };

InstrumentFamilyView.prototype.formatInfoView = function (familyData) {

  const familyDetail = document.createElement('div');
  familyDetail.classList.add('familyInfo')

  const familyName = document.createElement('h2');
  familyDetail.appendChild(familyName)
  familyName.textContent = familyData.name;

  const famDescription = document.createElement('p');
  familyName.appendChild(famDescription)
  famDescription.textContent = familyData.description;

  //guessing I could make a generic function to do this but not sure i am remotely ready for that.
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
