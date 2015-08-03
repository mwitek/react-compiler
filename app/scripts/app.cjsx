Transformer = React.createClass
  getInitialState: ->
    return {
      input: """
      /* add jsx here */\n
      var App = (
        <Form>
          <FormRow>
            <FormLabel />
            <FormInput />
          </FormRow>
        </Form>
      );
      """
      output: ''
      err: ''
    }
    
  componentDidMount: ->
    code = @state.input
    @setState
      output: JSXTransformer.transform(code).code
      err: ''
      
  update: (e) ->
    code = e.target.value
    try
      @setState
        output: JSXTransformer.transform(code).code
        err: ''
    catch err
      @setState
        err: err.message

  render: ->
    return (
        <div className="container">
          <div data-alert=true className="alert-box secondary">
            &nbsp;{@state.err}
            <a href="#" class="close">&times;</a>
          </div>
          <div className="row">
            <textarea defaultValue={@state.input} className="medium-6 columns" onChange={@update} />
            <div className="medium-6 columns">
              <div className="panel callout">
                <pre>{@state.output}</pre>
              </div>
            </div>
          </div>
        </div>
      )
document.addEventListener "DOMContentLoaded", ->
  React.render(<Transformer />, document.body);
