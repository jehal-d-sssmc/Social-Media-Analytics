import react from 'react';
import Index from './mains';
import Compose from './mains/compose';
import E404 from './mains/e404';
import Facebook from './mains/facebook';
import Instagram from './mains/instagram';
import Schedules from './mains/schedules';
import Twitter from './mains/twitter';
import Youtube from './mains/youtube';

class Main extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.component = {
      404: <E404 />,
      '': <Index props={this.props} />,
      compose: <Compose props={this.props} />,
      schedules: <Schedules props={this.props} />,
      youtube: <Youtube props={this.props} />,
      facebook: <Facebook props={this.props} />,
      instagram: <Instagram props={this.props} />,
      twitter: <Twitter props={this.props} />,
    };
    this.keys = Object.keys(this.component);
  }

  async componentDidMount() {
    this.setState({
      query:
        this.props.query !== undefined && this.props.query.query !== undefined
          ? this.props.query.query.index
          : '',
    });
    console.log(this.props.query);
  }

  render() {
    console.log(this.props.query);
    return (
      <main className={'main'}>
        {this.keys.includes(
          this.props.query !== undefined && this.props.query.query !== undefined
            ? this.props.query.query.index
            : ''
        )
          ? this.component[
              this.props.query !== undefined &&
              this.props.query.query !== undefined
                ? this.props.query.query.index
                : ''
            ]
          : this.component['404']}
      </main>
    );
  }
}

export default Main;
