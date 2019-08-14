import React, { Component } from "react";

class CreateForm extends Component {
  state = {
    url: ""
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <input className={styles.button} type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateForm;
