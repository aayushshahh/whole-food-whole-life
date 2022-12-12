import axios from "axios";

axios.get(`http://35.190.42.252/apiv1/profile`)
      .then(res => {
        const person = res.data;
        this.setState({ person });
      })