import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
      <div>
          PageOne
          BAD!
          <a href="/pagetwo">Navigate to page 2</a>
      </div>
  );
};

const PageTwo = () => {
    return <div>PageTwo</div>
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