import Head from 'next/head';
import react, { use } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/router';

function withParams(Component) {
  return (props) => <Component {...props} params={useRouter()} />;
}

class Index extends react.Component {
  constructor(props) {
    super(props);
    //console.log(this);
    this.state = {
      query: {},
    };
  }

  async componentDidMount() {
    
    setTimeout(() => {
      this.setState({
        query: this.props.params,
      });
      console.log(this.props.params);
    }, 1000);
  }

  setPath = (query) => {
    if (this.props.query !== undefined) {
      
      this.setState({
        query: query,
      });
    }
  };

  render() {
    return (
      <div>
        <Head>
          <title>Sri Sathya Sai</title>
        </Head>
        {this.state.query === undefined ? (
          <>Loading...</>
        ) : (
          <>
            <Header query={this.state.query} props={...this.props} setPath={this.setPath} />
            <div className="box-wrapper">
              <Sidebar query={this.state.query} props={...this.props} setPath={this.setPath} />
              <Main query={this.state.query} props={...this.props} />
              <div className="clearfix"></div>
            </div>
            <Footer query={this.state.query} props={...this.props} />
          </>
        )}
      </div>
    );
  }
}

export default withParams(Index);
