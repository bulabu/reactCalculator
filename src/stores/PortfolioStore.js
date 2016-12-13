var alt = require('../alt');
var PortfolioActions = require('../actions/PortfolioActions');
var PortfolioSource = require('../sources/PortfolioSource');

class PortfolioStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;
    this.Age;
	  this.RetirementAge;
	  this.maritalStatus;
	  this.state;
	  this.income;
	  this.expectedWageGrowth;
	  this.investmentPercentage;
	  this.anticipatedMarketConditions;
	  this.vehicles = [];

    this.bindListeners({
      handleUpdatePorfolio: PortfolioActions.UPDATE_PORTFOLIO,
      handleFetchPortfolio: PortfolioActions.FETCH_PORTFOLIO
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(PortfolioSource);
  }
  handleUpdatePortfolio(portfolio) {
    console.log("Updating portfolio");
    console.log(portfolio);
    this.Age = portfolio.age
    this.RetirementAge = portfolio.RetirementAge;
	  this.maritalStatus = portfolio.maritalStatus;
	  this.state = portfolio.state;
	  this.income = portfolio.income;
	  this.expectedWageGrowth = portfolio.expectedWageGrowth;
	  this.investmentPercentage = portfolio.investmentPercentage;
	  this.anticipatedMarketConditions = portfolio.anticipatedMarketConditions;
  }

  handleFetchPortfolio() {
    this.portfolio = { id: 0, age: 22 };
  }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');
