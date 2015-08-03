var Transformer = React.createClass({
  getInitialState:function(){
    return {
      input: '/* add jsx here */',
      output: '',
      err: ''
    }
  },
  update: function(e){
    var code = e.target.value;
    try {
      this.setState({
        output: JSXTransformer.transform(code).code,
        err: ''
      })
    }
    catch(err){
      this.setState({
        err: err.message
      })
    }
  },
  render:function(){
    /* added 'container' class just for jsbin display*/
    return (
        <div className="container">
          <div className="row">
            <p className="alert alert-danger">&nbsp;{this.state.err}</p>
          </div>
          <div className="row">
            <textarea defaultValue={this.state.input} className="col-sm-6 input-lg" onChange={this.update} />
            <pre className="col-sm-6 input-lg">{this.state.output}</pre>
          </div>
        </div>
      )
  }
});

React.render(<Transformer />, document.body);
