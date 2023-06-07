import react from 'react';
import Navs from './Navs';

class Header extends react.Component {
  render() {
    return (
      <>
        <header>
          <div className="header-container">
            <div className="logo">Sri Sathya Sai</div>
            <div className="topNavs"><Navs /></div>
            <div className="clearfix"></div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
