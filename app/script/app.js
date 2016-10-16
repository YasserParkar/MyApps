/*------------------------------------------------------*/

ReactDOM.render(
  <h2>1. Render text</h2>,
  document.getElementById('one')
);


/*------------------------------------------------------*/

var Two = React.createClass({
  render: function() {
      return (<h2>2. Component text</h2>);
  }
});

ReactDOM.render(
  <Two/>,
  document.getElementById('two')
);

/*------------------------------------------------------*/

var Three = React.createClass({
  render: function() {
      return (
        <div id="component">
          <span>Name: {this.props.children}</span><br/>
          <span>Status: {this.props.alfa}</span>
        </div>
      );
  }
});

ReactDOM.render(
  <div>
    <h2>3. Component property/children & reusability</h2>
    <Three alfa="OK">Yasser</Three>
    <Three alfa="OK">Saquib</Three>
  </div>,
  document.getElementById('three')
);

/*------------------------------------------------------*/

var Four = React.createClass({
  show: function(){
    alert('hi');
  },
  render: function() {
      return (
        <div>
          <h2>4. Event Handling</h2>
          <button onClick={this.show}>{this.props.text}</button>
        </div>
      );
  }
});

ReactDOM.render(
  <Four text="Notify" message="Hello"/>,
  document.getElementById('four')
);

/*------------------------------------------------------*/

var Five = React.createClass({
  getInitialState: function(){
    return({checked:true});
  },
  changeState: function(){
    this.setState({checked:!this.state.checked});
  },
  render: function() {
      var msg;
      if(this.state.checked){
        msg = 'checked';
      }else{
        msg = 'unchecked';
      }
      return (
        <div>
          <h2>5. State Handling</h2>
          <input type="checkbox" onChange={this.changeState} defaultChecked={this.state.checked}>
          </input>
          {this.props.text}&nbsp;{msg}
        </div>
      );
  }
});

ReactDOM.render(
  <Five text="Option is"/>,
  document.getElementById('five')
);

/*------------------------------------------------------*/


var Six = React.createClass({
  getInitialState: function(){
    return({editable:false});
  },

  edit: function(){
    this.setState({editable:true});
  },

  remove: function(){
    this.props.removeText(this.props.index);
  },

  save: function(){
    this.setState({editable:false});
    this.props.updateText(this.refs.newText.value,this.props.index);
  },

  renderNormal: function(){
    return (
      <div id="component">
        <h4>{this.props.children}</h4>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  },

  renderEditable: function(){
    return (
      <div id="component">
        <textarea id="sixtext" ref="newText">{this.props.children}</textarea>
        <button onClick={this.save}>Save</button>
      </div>
    );
  },

  render: function() {
      if(this.state.editable){
          return this.renderEditable();
      }else{
          return this.renderNormal();
      }
  }
});


var Top = React.createClass({

  getInitialState: function(){
    return({
      comments:['Text1','Text2','Text3']
    });
  },

  removeText: function(i){
    var arr = this.state.comments;
    arr.splice(i,1);
    this.setState({comments:arr});
  },

  updateText: function(text,i){
    var arr = this.state.comments;
    arr[i]=text;
    this.setState({comments:arr});
  },

  add: function(){
    var arr = this.state.comments;
    arr.push('Default Text');
    this.setState({comments:arr});
  },

  each: function(text,i){
    return(<Six key={i} index={i} updateText={this.updateText} removeText={this.removeText}>{text}</Six>);
  },

  render: function() {
      return (
        <div>
          <h2>6. State / Refs/ Map/ Index/ Key/ Method as Prop</h2>
          <button id="add" onClick={this.add}>Add</button><br/>
          {
            this.state.comments.map(this.each)
          }
        </div>
      );
  }

});

ReactDOM.render(
  <Top/>,
  document.getElementById('six')
);

/*------------------------------------------------------*/
