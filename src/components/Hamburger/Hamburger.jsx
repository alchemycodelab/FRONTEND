import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';
import { slide as Menu } from 'react-burger-menu';
import { useTheme } from '../../context/ThemeContext';

export default class Hamburger extends Component {
  showSettings(e) {
    e.preventDefault();
  }

  const { theme, setTheme } = useTheme();

  render() {
    const lightMenu = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
      },
      bmBurgerBars: {
        background: '#ffffff',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: '#bdc3c7',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: 'auto',
      },
      bmMenu: {
        background: '#FFDDD6',
        border: '#FFB1A0 solid 3px',
        borderRadius: '20px',
        padding: '2px',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
      },
      bmItem: {
        display: 'inline-block',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
      },
    };

    return (
      <header>
        <nav>
          <Menu styles={theme ? lightMenu : darkMenu} noOverlay>
            <ul>
              <li>
                <Link className="menu-item" to="/">
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link className="menu-item" to="/notes">
                  Notes
                </Link>
              </li>
              <hr />

              <li>
                <Link className="menu-item" to="/notes/new">
                  New Note
                </Link>
              </li>
              <hr />

              <li>
                <Link className="menu-item" to="/about">
                  About Us
                </Link>
              </li>
              <hr />

              <li>
                <Link className="menu-item" to="/login">
                  Log Out
                </Link>
              </li>
            </ul>
          </Menu>
        </nav>
      </header>
    );
  }
}
