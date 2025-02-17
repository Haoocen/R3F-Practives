import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import {
    allExamples,
    otherExamples,
    threeJsJourney,
} from "./pages/examplesUtil";

const App: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                {[...allExamples, ...otherExamples, ...threeJsJourney].map(
                    ({ render, path }) => (
                        <Route key={path} exact path={path} render={render} />
                    )
                )}

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
