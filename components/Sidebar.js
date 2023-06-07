import react from 'react';
import Link from 'next/link';

const Links = [
  { href: '/schedules', name: 'Schedules' },
  { href: '/compose', name: 'Compose' },
  { href: '/youtube', name: 'YouTube' },
  { href: '/facebook', name: 'Facebook' },
  { href: '/instagram', name: 'Instagram' },
  { href: '/twitter', name: 'Twitter' },
  { href: '/reports', name: 'Reports' },
];

class Sidebar extends react.Component {
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

  currentLink = (e) => {
    let query = this.props.query;
    console.log(e);
    //if (e instanceof Function) {
    query.asPath = e !== undefined ? e.target.getAttribute('href') : '/';
    this.props.setPath(query);
    //}
  };

  render() {
    return (
      <div className={'sidebar'}>
        <aside>
          <ul>
            {Links.map((x, i) => {
              return (
                <li
                  className={
                    this.props.query !== undefined &&
                    this.props.query.asPath !== undefined &&
                    this.state.query.asPath === x.href
                      ? 'active'
                      : ''
                  }
                  key={i}
                >
                  <a onClick={this.currentLink} href={x.href}>
                    {x.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
