import react from 'react';
import styles from '../../styles/Home.module.css';

class Instagram extends react.Component {
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
        <h1 className={styles.title}>Instagram</h1>
        <p>
          <button>Add an Account</button>
        </p>
      </>
    );
  }
}

export default Instagram;
