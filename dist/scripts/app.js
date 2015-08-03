var Transformer;

Transformer = React.createClass({
  getInitialState: function() {
    return {
      input: '/* add jsx here */',
      output: '',
      err: ''
    };
  },
  update: function(e) {
    var code, err;
    code = e.target.value;
    try {
      return this.setState({
        output: JSXTransformer.transform(code).code,
        err: ''
      });
    } catch (_error) {
      err = _error;
      return this.setState({
        err: err.message
      });
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "container"
    }, React.createElement("div", {
      "data-alert": true,
      "className": "alert-box secondary"
    }, "\u00a0", this.state.err, React.createElement("a", {
      "href": "#",
      "class": "close"
    }, "\u00d7")), React.createElement("div", {
      "className": "row"
    }, React.createElement("textarea", {
      "defaultValue": this.state.input,
      "className": "medium-6 columns",
      "onChange": this.update
    }), React.createElement("div", {
      "className": "medium-6 columns"
    }, React.createElement("div", {
      "className": "panel callout"
    }, React.createElement("pre", null, this.state.output)))));
  }
});

document.addEventListener("DOMContentLoaded", function() {
  return React.render(React.createElement(Transformer, null), document.body);
});
