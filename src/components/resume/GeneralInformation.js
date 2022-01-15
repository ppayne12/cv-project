import { Component } from "react";

class GeneralInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tag, handleSubmit, name, phone, email } = this.props;

    if (tag == "Add") {
      return (
        <div className="column">
          <h2>General Information</h2>
          <form>
            <label htmlFor="name">Name: </label>
            <br />
            <input type="text" id="name" defaultValue={name} />
            <br />
            <label htmlFor="phone">Phone Number: </label>
            <br />
            <input type="text" id="phone" defaultValue={phone} />
            <br />
            <label htmlFor="email">Email: </label>
            <br />
            <input type="text" id="email" defaultValue={email} />
            <br />
            <br />
            <button className="general" onClick={handleSubmit}>
              {tag}
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="column">
          <h2>General Information</h2>
          <h3>Name: </h3> {name}
          <br />
          <h3>Phone Number: </h3> {phone}
          <br />
          <h3>Email: </h3> {email}
          <br />
          <br />
          <button className="general" onClick={handleSubmit}>
            {tag}
          </button>
        </div>
      );
    }
  }
}

export default GeneralInformation;
