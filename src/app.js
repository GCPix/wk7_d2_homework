const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentData = require('./data/instrument_data.js')
const SelectorView = require('./views/selector_view.js')
const InstrumentFamilyView = require('./views/instrument_family_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectorPosition = document.querySelector('#instrument-families')
  const selectorView = new SelectorView(selectorPosition)
  selectorView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(InstrumentData)
  instrumentFamilies.bindEvents();

  const resultPosition = document.querySelector('.familyInfo')
  const instrumentFamilyView = new InstrumentFamilyView()
  instrumentFamilyView.bindEvents();


});
