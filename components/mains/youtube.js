import react from 'react';
import styles from '../../styles/Home.module.css';
import global from '../../inc/global';
import ioReq from '../../inc/ioReq';
const _app = new global();

class Youtube extends react.Component {
  constructor(props) {
    super(props);
   
    this.app = _app;
    this.firebase = null;
    this.io = new ioReq();
    this.state = {
      query: {},
      channels: [],
      data: []
    };
    
  }

  async componentDidMount() {
      this.firebase = this.app.startFirebase(window);
      
      this.firebase = this.app.firebase;
      let channels = await this.firebase.get('config',{
        query: [
          {field: "type", cond: "==", value: "youtube"}
        ]
      })
      let data = await this.getChannelData(channels);
      console.log(data);
      this.setState({
        query: this.props.query,
        channels: channels,
        data: data
      });
  }

  getChannelData = async (channels) => {
    let ids = 'id=' + channels.map(a => a.data.id).join('&id=');
    //ids = ids.substring(0, '&id=', ids.length - 1);
   
    let data = await this.io.get(`channels?part=statistics&part=snippet&${ids}`);
    let arr = [];
    if(data && Array.isArray(data.items)){
      data.items.forEach((x,i)=>{
        arr[i] = {...{id: x.id}, ...x.snippet, ...x.statistics};
      })
      
    }
    return arr;
  }

  

  render() {
    return (
      <div className='p-3 w-100'>
        <div className='card'>
          <div className='card-header'>
            <h1 className={styles.title}>YouTube</h1>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <div className='p-5'></div>
                <ul className='list-group list-group-horizontal' style={{flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
                  {
                    this.state.data.map((x)=>{
                     return <li className='list-group-item' style={{border: "1px solid #dedede", maxWidth:"360px"}}> 
                      <h3 className='m-0'>{x.title}</h3>
                      <p>{x.customUrl}</p>
                      <hr />
                      <img src={x.thumbnails.high.url} style={{maxWidth:"100%"}} />
                      <div className='desc'>
                        <p>Published at {x.publishedAt}</p>
                        <strong>Subscribers: </strong>{x.subscriberCount} | <strong>Videos: </strong>{x.videoCount}<br /><strong>Views: </strong>{x.viewCount}
                      </div>
                      </li>
                    })
                  }
                 
                </ul>
              </div>
              <div className='col-md-9'>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
