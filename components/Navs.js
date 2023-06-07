import react from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Links = [
  { href: '/account', name: 'Account' },
  { href: '/settings', name: 'Settings' },
  { href: '/logout', name: 'Logout' }
];

class Navs extends react.Component {

  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      query: {}
    }
  }

  componentDidMount(){
    this.setState({
      query: this.props.query 
    });
  }

  currentLink = (e) => {
    let query = this.props.query;
    query.asPath =
      typeof e !== undefined && e.getAttribute instanceof Function
        ? e.getAttribute('href')
        : '/';
    this.props.setPath(
      typeof e !== undefined && e.getAttribute ? e.getAttribute('href')
        : '/'
    );
  };


  render() {
    return (
      <div className={styles.navs}>
        <aside>
          <ul>
          {Links.map((x, i) => {
              return (
                <li className={this.props.query !== undefined && this.props.query.asPath !== undefined && this.state.query.asPath === x.href ? 'active' : ''} key={i}>
                  <Link onClick={this.currentLink} href={x.href}>{x.name}</Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Navs;
