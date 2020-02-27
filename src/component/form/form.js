import React from 'react';
import superagent from 'superagent';
class RESTy extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      url: '',
      method: 'get',
      header: {},
      body: {},
      history: {},
      headersVisible: false,
    };

  }
handelChange = e =>{
  let prop = e.target.name;
  let value = e.target.value;
  this.setState({[prop]: value});
};
// look in the send command
callingAPI = e =>{
  e.preventDefault();
  superagent('get', this.state.url)
    .set('Content-Type', 'application/json')
    .send(this.state.requestBody)
    .then(response=>{
      let header = response.header;
      let body = response.body;
      this.setState({header, body});
    }).catch(e =>{
      let body = {error: e.message};
      let header = {};
      this.setState({header, body});
    });
};

}

export default RESTy;