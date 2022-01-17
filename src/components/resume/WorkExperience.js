import { Component } from "react";

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }
  //somefunctions

  render() {
    const { handleSubmit, work } = this.props;
    console.log(work);
    const previousWork = work.map((obj, index) => (
      <div key={index}>
        <h3>Start Date: </h3> {obj.start}
        <br />
        <h3>End Date: </h3> {obj.end}
        <br />
        <h3>Company: </h3> {obj.company}
        <br />
        <h3>Title: </h3> {obj.title}
        <br />
        <br />
        <button className={"work" + index} onClick={handleSubmit}>
          Edit
        </button>
        <br /> <br />
      </div>
    ));

    return (
      <div className="column">
        <h2>Work Experience</h2>
        {previousWork}
        <form>
          <label htmlFor="start">Start Date: </label>
          <br />
          <input type="text" id="start" defaultValue="" />
          <br />
          <label htmlFor="end">End Date:</label>
          <br />
          <input type="text" id="end" defaultValue="" />
          <br />
          <label htmlFor="company">Company:</label>
          <br />
          <input type="text" id="company" defaultValue="" />
          <br />
          <label htmlFor="title">Title:</label>
          <br />
          <input type="text" id="title" defaultValue="" />
          <br />
          <br />
          <button className="work" type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default WorkExperience;
