/**
 * App
 * @param  {Object} React React
 * @param  {Object} $     jQuery
 * @param  {Object} _     Lodash
 * @param  {Object} app   App
 * @return {Object}
 */
(function (React, $, _, app) {
  var APP_NAME = "App";

  var Utils = app.Utils;
  var store = app.Storage();
  var cx    = React.addons.classSet;

  var MainNav = React.createClass({
    render: function () {
      return (
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="#" className="navbar-brand">{APP_NAME}</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  });

  var Calculator = React.createClass({
    getInitialState: function () {
      return {
        price: 134.5,
        purchase: 100,
        cost: 134.5
      };
    },
    handleChange: function (event) {
      var name = event.target.id;
      var value = parseFloat(event.target.value);
      var newState = {};

      switch (name) {
        case 'price':
          newState = {
              price: value,
              cost: (this.state.purchase * value) / 100
          }
          break;
        case 'purchase':
          newState = {
            purchase: value,
            cost: (this.state.price * value) / 100
          };
          break;
        case 'cost':
            newState = {
              purchase: (value * 100) / this.state.price,
              cost: value
            }
          break;
        default:
          break;
      }

      this.setState(Utils.extend({}, this.state, newState));
    },
    render: function () {
      var price    = this.state.price;
      var purchase = this.state.purchase;
      var cost     = this.state.cost;

      return (
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>Calc</h4>
            </div>
            <div className="panel-body">
              <form className="form-horizontal calc-form">
                <div className="form-group">
                  <div className="col-sm-3">
                    <div className="radio">
                      <label htmlFor="buy">
                        <input id="buy" name="type" type="radio" value="buy" defaultChecked/>
                        Buy limit
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="radio">
                      <label htmlFor="sell">
                        <input id="sell" name="type" type="radio" value="sell"/>
                        Sell limit
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="radio">
                      <label htmlFor="stop">
                        <input id="stop" name="type" type="radio" value="stop"/>
                        Stop loss
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-6">
                    <label htmlFor="price" className="active">Price</label>
                    <input id="price"
                           className="form-control"
                           type="number"
                           value={price.toFixed(2)}
                           onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-6">
                    <label htmlFor="purchase">Purchase</label>
                    <input id="purchase"
                           className="form-control"
                           type="number"
                           value={purchase.toFixed(2)}
                           onChange={this.handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-6">
                    <label htmlFor="cost" className="active">Cost</label>
                    <input id="cost"
                           className="form-control"
                           type="number"
                           value={cost.toFixed(2)}
                           onChange={this.handleChange}/>
                  </div>
                  <div className="col-sm-6">
                    <div className="checkbox">
                      <label htmlFor="charges">
                        <input id="charges" type="checkbox"></input>
                        Including charges
                      </label>
                    </div>
                  </div>
                </div>
                <div className="pull-right">
                  <a id="populate" className="btn btn-primary">Populate</a>
                  <a id="populate" className="btn btn-primary">Add Money</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  });

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <MainNav/>
          <div className="container" role="main">
            <Calculator/>
          </div>
        </div>
      );
    }
  });

  $(function () {
    React.render(<App/>, $('#react')[0]);
  });

})(
  React,
  jQuery,
  _,
  app = window.app || {}
);
