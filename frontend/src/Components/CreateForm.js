import React, { Component } from "react";

class CreateForm extends Component {
  state = {
    url: ""
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

  handleSubmit = e => {
    const { url } = this.state;
    e.preventDefault();
    api.postURL({ url }).then(data => {
      console.log(data);
      this.setState({ url: "" });
    });
  };
}

export default CreateForm;
