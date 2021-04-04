import React from 'react';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    Hello
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;