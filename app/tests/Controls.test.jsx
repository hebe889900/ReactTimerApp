var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');
describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render',() => {
    it('should render pause when starter', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus = "started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toBe(1);
    });
  });
});
