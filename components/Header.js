import react from 'react';
import Navs from './Navs';

class Header extends react.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      query: {},
    };
  }

  componentDidMount() {
    this.setState({
      query: this.props.query,
    });
  }

  render() {
    return (
      <>
        <header>
          <div className="header-container">
            <div className="logo">SSSMC Analytics</div>
            <div className="topNavs">
              <Navs query={this.state.query} setPath={this.setPath} />
            </div>
            <div className="clearfix"></div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
