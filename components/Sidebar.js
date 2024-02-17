import react from 'react';
import global from '../inc/global';
const _app = new global();


let links = [
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
    console.log(this.props);
    this.app = _app;
    this.firebase = null;
    this.state = {
      query: {},
      links: links,
      channels: []
    };
  }

  async componentDidMount() {
    this.setState({
      query: this.props.query,
    });
    this.firebase = this.app.startFirebase(window);
      this.firebase = this.app.firebase;
      let channels = await this.firebase.get('config',{
        query: [
          {field: "type", cond: "==", value: "youtube"}
        ]
      });
      let fltr = [];
      fltr = links.map((x)=>{
        let _l = channels.filter((c)=> c.type === x.name.toLowerCase());
        x.list = _l;
        return x;
       // x.name === 
      })
      console.log(fltr);
      this.setState({
        query: this.props.query,
        channels: channels,
        list: fltr
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
            {this.state.links.map((x, i) => {
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
                  {
                    x.list !== undefined && Array.isArray(x.list) ? 
                    <ul className='submenu'>
                      {
                        x.list.map((l, j)=>{
                          return <li key={j} className='submenu-item'><a href={'/' + l.type + '/' + l.data.id}>{l.data.name}</a></li>
                        })
                      }
                    </ul>
                    :
                    <></>
                  }
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
