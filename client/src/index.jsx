import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/Overview.jsx';
import Comparison from './components/comparison/Comparison.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import QandA from './components/qanda/QandA.jsx';

const App = function() {
  return (
    <div>
      <Overview />
      <Comparison />
      <Reviews />
      <QandA />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
