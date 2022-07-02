import React from 'react';
import './commoncss/bootstrap.css';
import './commoncss/font-icon.css';
import './App.css';
import Header from './components/Header';
import WeadingDate from './components/WeadingDate';
import CountDown from './components/CountDown';
import WeadingDetails from './components/WeadingDetails2';
import Invitation from './components/Invitation';
import Weadingloaction from './components/Weadingloaction'
import Contact from './components/Contact';
import CodeInvitation from './components/code-invitation';
import {  createTheme, Paper, Tab, Tabs, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5a9197'
    },
    secondary: {
      main: '#ed97bd'
    }
  }
});
function App() {

  const [invitationTab, setInvitationTab] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <WeadingDate />
        <CountDown />
        <Paper>
          <Tabs
            value={invitationTab}
            onChange={(event, newTab) => { setInvitationTab(newTab) }}
            indicatorColor="primary"
            textColor="primary"
            variant='fullWidth'
          >
            <Tab label="Soy una persona Normal" />
            <Tab label="Soy un programador" />
          </Tabs>
        </Paper>
        <div hidden={invitationTab !== 0}>
          <Invitation />
          <Weadingloaction />
        </div>
        <div hidden={invitationTab !== 1}>
          <CodeInvitation />
        </div>
        <WeadingDetails />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
