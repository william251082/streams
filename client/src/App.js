import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
      <div>
          PageOne
          <Link to="/pagetwo">Navigate to page 2</Link>
      </div>
  );
};

const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Navigate to page 1</Link>
        </div>
    );
};


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pagetwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;