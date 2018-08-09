import React from 'react'
import logo from './logo.svg'
import {App, AppHeader, Title, AppIntro, AppLogo} from './styles'

const paragraphStyles  = {backgroundColor: "orange"};

export default function Layout({title, renderContent,}) {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Title className="App-title">{title}</Title>
      </AppHeader>
      {renderContent()}
      
    
    </App>
  );
}