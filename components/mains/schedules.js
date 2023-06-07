import react from 'react';
import styles from '../../styles/Home.module.css';

class Schedules extends react.Component {
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
        <h1 className={styles.title}>Schedules</h1>
      </>
    );
  }
}

export default Schedules;
