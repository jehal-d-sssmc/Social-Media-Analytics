import Head from 'next/head';
import react, { use } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { useRouter } from 'next/router';

function withParams(Component) {
  return (props) => <Component {...props} params={useRouter()} />;
}

class Index extends react.Component {
  constructor(props) {
    super(props);
    console.log(this);
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

  loadProps = (Component) => {
    setTimeout((this) => {
      return () => <Component {...this.props} />;
    }, 1000);
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
          this.loadProps(
            <>
              <Header />
              <div className="box-wrapper">
                <Sidebar query={this.state.query} />
                <Main />
                <div className="clearfix"></div>
              </div>
              <Footer />
            </>
          )
        )}
      </div>
    );
  }
}

export default withParams(Index);
