import react from 'react';
import styles from '../../styles/Home.module.css';

class Index extends react.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      query: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      query: this.props.query === undefined ? {} : this.props.query,
    });
  }

  render() {
    console.log(this.state.query);
    return (
      <>
        {this.state.query === undefined ? (
          <h1 className={styles.title}>Loading...</h1>
        ) : (
          <h1 className={styles.title}>Dashboard</h1>
        )}
      </>
    );
  }
}

export default Index;
