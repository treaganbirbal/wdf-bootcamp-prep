let planet = 'Planet Earth';
function fullstackHQ(country){
  country = 'United States';
  return middleFunction('United States');
  function middleFunction(state) {
    state = 'New York State'
    return innerFunction('New York State');
    function innerFunction(city) {
       city = 'New York City';
      return innermostFunction('New York City');
      function innermostFunction(place) {
        return 'Fullstack HQ is at ' + planet + ', ' + country + ', ' + state + ', ' + place;
      }
    }
  }
}

console.log(fullstackHQ())
