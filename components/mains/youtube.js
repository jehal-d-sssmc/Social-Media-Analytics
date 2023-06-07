import react from 'react';
import styles from '../../styles/Home.module.css';
import global from '../../inc/global';
const _app = new global();

class Youtube extends react.Component {
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

  handleClientLoad = () => {

  }

  render() {
    return (
      <>
        <h1 className={styles.title}>YouTube</h1>
        <p>
          <button>Add Channel</button>
        </p>
      </>
    );
  }
}

export default Youtube;
