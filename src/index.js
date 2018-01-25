import React from 'react';
import ReactDOM from 'react-dom';

//  Create a new component. This component should produce some HTML

// fat arrow function is the same as function(){}... except that value of "this" inside function changes
const App = () => {
  return <div>HI!</div>;
}

// Put the component into the DOM (APP instance of the class defined above, second argument here is where we're putting it in the DOM from the HTML file)
ReactDOM.render(<App/>, document.querySelector('.container') );