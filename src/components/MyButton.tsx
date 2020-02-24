import React from "react";

class MyButton extends React.Component {

  constructor(props: any){
    super(props)
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  
  }
  
    state = {value: 0};
    private buttonClicked(event:any) {
      event.preventDefault();
      this.state = ({value :this.state.value+1});
    }
    
    render() {
      return (
          <>
          <div>{this.state.value}</div>
          <button onClick={this.buttonClicked}>Click</button>
          </>
      );
    }
  }
  
 export default MyButton
  