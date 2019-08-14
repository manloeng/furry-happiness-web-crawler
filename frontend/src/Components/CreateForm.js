import React, { Component } from 'react';
import Axios from 'axios';

class CreateForm extends Component {
  state = {
    url: ''
  };

  render() {
    const { url } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={url} type="text" onChange={this.handleTextChange} />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }

  handleTextChange = ({ target: { value } }) => {
    this.setState({ url: value });
  };

  handleSubmit = (e) => {
    const { url } = this.state;
    const { setStats } = this.props;
    e.preventDefault();
    this.postURL({ url }).then((home) => {
      setStats(home);
      this.setState({ url: '' });
    });
  };

  postURL = async ({ url }) => {
    const URL = ``;
    // const { data: { home } } = await Axios.post(URL, { url});
    // return home;
    return 0.73;
  };
}

export default CreateForm;
