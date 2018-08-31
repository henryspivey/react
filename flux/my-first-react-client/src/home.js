import React from 'react'
import logo from './logo.svg'
// import Layout from './Layout'
import {withLayout} from './Layout'
import {AppIntro} from './styles'
import Greeting from "./Greeting";


const paragraphStyles  = {backgroundColor: "orange"};

export function Home({message, updateMessage}) {
  // throw new Error();
  return (
    <React.Fragment>
      <AppIntro className="App-intro" style={paragraphStyles}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
      <Greeting />
      <h2>{message}</h2>
      <button onClick={() => (message=updateMessage("food"))}>Click me!</button>

    </React.Fragment>
  );
}

export default withLayout("Welcome to React!")(Home);
