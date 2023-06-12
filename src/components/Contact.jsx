import axios from 'axios';
import { Component } from 'react';

class Contact extends Component {
  state={
    employee:[]
  }
  componentDidMount()
  {
    axios.get("https://backend-for-react-fvl8.onrender.com/retrive")
    .then((res)=>{console.log(res.data)
    this.setState({
      users:res.data
    })})
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Contact;
