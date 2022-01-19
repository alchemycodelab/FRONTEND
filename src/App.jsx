import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './views/AboutUs/AboutUs';
import Auth from './views/Auth/Auth';
import Notes from './views/Notes/Notes';
import styles from './App.css';
import Hamburger from './components/Hamburger/Hamburger';
import { useState } from 'react';
import Button from './components/Button/Button';
import { useTheme } from './context/ThemeContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoteList from './components/Notes/NoteList/NoteList';
import Header from './components/Header/Header';
import ViewNote from './components/Notes/ViewNote/ViewNote';

export default function App() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  // add useEffect so when on mount it checks local storage for your id

  return (
    <Router>
      <main className={theme ? styles.dark : styles.light}>
        <Header />
        {/* <Hamburger />
        <Button
          buttonText={theme ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleMode}
        /> */}
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>

          <Route path="/login">
            <Auth />
          </Route>

          <Route path="/register">
            <Auth isSigningUp />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <PrivateRoute exact path="/notes">
            <Notes>
              <NoteList />
            </Notes>
          </PrivateRoute>

          <PrivateRoute exact path="/notes/:id">
            <Notes>
              <ViewNote />
            </Notes>
          </PrivateRoute>

          <PrivateRoute exact path="/notes/new">
            <Notes />
            {/* empty note form */}
          </PrivateRoute>

          <PrivateRoute exact path="/notes/:id/edit">
            <Notes isEditing />
            {/* note form with values from backend */}
          </PrivateRoute>

          {/* may need more routes? */}
        </Switch>
      </main>
    </Router>
  );
}
