import React, { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/landingPage/Landing';
import Loader from './components/loader/Loader';
import Audio from './components/audio/Audio';
import './css/App.css';
import Dev from './components/devPage/Dev';
import Thanks from './components/thanks/Thanks';
import Form from './components/devPage/DevComponents/Contact/Form';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Context = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState(true);
  const [noScroll, setNoScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handlePageChange();
      setTest(false);
    }, 1700)
  }, []);

  const handlePageChange = () => {
    loading ? setLoading(false) : setLoading(true);
  }

  const handleNoScroll = () => {
    setNoScroll(!noScroll)
  }

  const contextValue = {
    loading,
    setLoading,
    test,
    noScroll,
    handlePageChange,
    handleNoScroll
  }

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <Loader />
        <Audio />
        <Switch>
          <Route exact path="/" component={Landing}>
            <Landing />
          </Route>
          <Route path="/web-dev" component={Dev} handlePageChange={handlePageChange}>
            <Dev />
          </Route>
          <Route path="/thanks" component={Thanks} handlePageChange={handlePageChange}>
            <Thanks />
          </Route>
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </Context.Provider>
  );
}

export default App;
