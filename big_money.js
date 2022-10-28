/* Starter Code: */
'use strict';

const bme = React.createElement; // basically a prototype React Element

var moneys = 69;

class BigMoney extends React.Component { // A LikeButton is a type of React Component
  constructor(props) {
    super(props);
    this.state = { newDay: false };
  }

  render() {
    var content = '$' + moneys;
    if (this.state.newDay) {
      moneys += 10;
      this.setState({newDay: false});
    }

    return bme( // Constructing and returning the React Element
      'h1', // Works on type button (is a representation of a button)
      { onClick: () => this.setState({ newDay: true }) }, // Attributes and values of what the object has
      content // Contents/children of element
    );
  }
}


/* From Like Button Tutorial */
const bmDomContainer = document.querySelector('#big_money_container');
const bmroot = ReactDOM.createRoot(bmDomContainer);
bmroot.render(bme(BigMoney));