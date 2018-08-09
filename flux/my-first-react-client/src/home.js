import React from 'react'
import logo from './logo.svg'
import Layout from './Layout'
import {AppIntro} from './styles'

const paragraphStyles  = {backgroundColor: "orange"};

export default function Home() {
  return (
    
      <Layout title="Welcome to React" renderContent = {() => (
          <React.Fragment>
            <AppIntro className="App-intro" style={paragraphStyles}>
              To get started, edit <code>src/App.js</code> and save to reload.
            </AppIntro>

            <h2>reloading!</h2>
          </React.Fragment>
        )}
      /> 
  );
}