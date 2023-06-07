import react from 'react';
import styles from '../styles/Home.module.css';

class Navs extends react.Component {
  render() {
    return (
      <div className={styles.navs}>
        <aside>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Navs;
