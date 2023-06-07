import react from 'react';
import Link from 'next/link';

const Links = [
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
  }
  render() {
    return (
      <div className={'sidebar'}>
        <aside>
          <ul>
            {Links.map((x, i) => {
              return (
                <li key={i}>
                  <Link href={x.href}>{x.name}</Link>
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
