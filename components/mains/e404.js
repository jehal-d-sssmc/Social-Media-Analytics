import react from 'react';
import styles from '../../styles/Home.module.css';

class E404 extends react.Component {
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
        <h1 className={styles.title}>
          <a href="#">Error 404!</a> Not Found
        </h1>
      </>
    );
  }
}

export default E404;
