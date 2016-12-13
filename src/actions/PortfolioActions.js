var alt = require('../alt');

class LocationActions {
  updatePortfolio(portfolio) {
    this.dispatch(portfolio);
  }

  fetchPortfolio() {
    this.dispatch();
  }
}

module.exports = alt.createActions(LocationActions);
