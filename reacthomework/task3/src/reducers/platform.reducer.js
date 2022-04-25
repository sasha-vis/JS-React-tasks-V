const defaultData = {
  platformArray: require('./../json/platform.json')
}

if (localStorage.getItem('platform') === null) {
    localStorage.setItem('platform', JSON.stringify(defaultData));
}

export default (state = defaultData, action) => {
  switch (action.type) {
      default:
          return state;
  }
};