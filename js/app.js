/**
 * App
 * @param  {Object} React React
 * @param  {Object} $     jQuery
 * @param  {Object} _     Lodash
 * @param  {Object} app   App
 * @return {Object}
 */
(function (React, $, _, app) {
  var APP_NAME = "app";

  var Utils = app.Utils;
  var store = app.Storage();
  var cx    = React.addons.classSet;

  var SideNav = React.createClass({
    render: function () {
      return (
        <nav>
          <ul className="left hide-on-med-and-down">
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
          </ul>
          <ul id="slide-out" className="side-nav">
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse">
            <i className="mdi-navigation-menu"></i>
          </a>
        </nav>
      );
    }
  });

  var App = React.createClass({
    render: function () {
      return (
        <SideNav/>
      );
    }
  });

  $(function () {
    $('.button-collapse').sideNav({
      menuWidth: 400,
      edge: 'left',
      closeOnClick: true
    });

    React.render(
      <App/>,
      $('#react')[0]
    );
  });

})(
  React,
  jQuery,
  _,
  app = window.app || {}
);
