import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import store from './store/StoreConfiguration';
import Home from './view/Component/Home/Home';
import Footer from './view/Footer/Footer';
import Header from './view/Header/Header';
import { Provider } from 'react-redux';
import TimeSeriesContainer from './view/Component/TimeSeries/TimeSeriesContainer';
function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route exact path="/" component={TimeSeriesContainer} />
            <Route exact path="/home" component={TimeSeriesContainer} />
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </Provider>
    
  );
}
export default App;
