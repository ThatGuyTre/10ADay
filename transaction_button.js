/* Starter Code: */
'use strict';

const e = React.createElement; // basically a prototype React Element

class TransactionButton extends React.Component { // A LikeButton is a type of React Component
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e( // Constructing and returning the React Element
      'button', // Works on type button (is a representation of a button)
      { onClick: () => this.setState({ liked: true }) }, // Attributes and values of what the object has
      'Like' // Contents/children of element
    );
  }
}


/* From Like Button Tutorial */
const domContainer = document.querySelector('#transaction_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(TransactionButton));