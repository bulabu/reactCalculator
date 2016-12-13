var React = require('react');
var AltContainer = require('alt/AltContainer');
var LocationStore = require('../stores/LocationStore');
var FavoritesStore = require('../stores/FavoritesStore');
var LocationActions = require('../actions/LocationActions');

var About = React.createClass({
  render() {
    return (
    <div className="row setup-content" id="step-1">
      <div className="col-xs-6 col-md-offset-3">
        <div className="col-md-12">
          <h3> <div className="text-heavy">About you</div></h3>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Current age</div>
            </label>
            <input maxlength="100" type="text" required="required" className="form-control" placeholder="Your current age" value = {this.props.portfolio.age}/>
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Retirement age</div>
            </label>
            <input maxlength="100" type="text" required="required" className="form-control" placeholder="Planned retirement age" />
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">State</div>
            </label>
            <select required="required" className="form-control" placeholder="Where do you work">
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>IA</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>KS</option>
              <option>LA</option>
              <option>MA</option>
              <option>MD</option>
              <option>ME</option>
              <option>MI</option>
              <option>MN</option>
              <option>MO</option>
              <option>MS</option>
              <option>MT</option>
              <option>ND</option>
              <option>NE</option>
              <option>NH</option>
              <option>NM</option>
              <option>NC</option>
              <option>NJ</option>
              <option>NV</option>
              <option>NY</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VA</option>
              <option>VT</option>
              <option>WA</option>
              <option>WI</option>
              <option>WV</option>
              <option>WY</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Marital status</div>
            </label>
            <select required="required" className="form-control" placeholder="Current marital status">
              <option>Single</option>
              <option>Married</option>
              <option>Divorced or Widowed</option>
            </select>
          </div>
          <button className="btn btn-primary nextBtn btn-sm pull-right" type="button">Next</button>
        </div>
      </div>
    </div>
    );
  }
});

var Wizard = React.createClass({
  componentDidMount() {
    PortfolioStore.fetchPortfolio();
  },

  render() {
    return (
      <div id="wizard">
      <div className="stepwizard col-md-offset-3">
        <div className="stepwizard-row setup-panel">
          <div className="stepwizard-step">
            <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
            <p>About you</p>
          </div>
          <div className="stepwizard-step">
            <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
            <p>Your money</p>
          </div>
          <div className="stepwizard-step">
            <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
            <p>Your benefits</p>
          </div>
          <div className="stepwizard-step">
            <a href="#step-4" type="button" className="btn btn-default btn-circle" disabled="disabled">4</a>
            <p>Your loans</p>
          </div>
        </div>
      </div>

      <form role="form" action="" method="post">
      <About/>
      </form>
      </div>
    );
  }
});

module.exports = Wizard;
