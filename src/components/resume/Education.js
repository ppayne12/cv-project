import { Component } from "react";
import { Display } from "../Display";
import { Input } from "../Input";

class Education extends Component {
  constructor() {
    super();
  }

  display(start, end, major, school, index, handleSubmit) {
    return (
      <div key={index}>
        <h3>Start Date: </h3> {start}
        <br />
        <h3>End Date: </h3> {end}
        <br />
        <h3>School: </h3> {school}
        <br />
        <h3>Major: </h3> {major}
        <br />
        <br />
        <button className="editEd" id={index} onClick={handleSubmit}>
          Edit
        </button>
        <br /> <br />
      </div>
    );
  }

  edit(start, end, major, school, index, handleSubmit) {
    return (
      <form key={index}>
        <label htmlFor="start">Start Date: </label>
        <br />
        <input type="text" id="start" defaultValue={start} />
        <br />
        <label htmlFor="end">End Date: </label>
        <br />
        <input type="text" id="end" defaultValue={end} />
        <br />
        <label htmlFor="school">School: </label>
        <br />
        <input type="text" id="school" defaultValue={school} />
        <br />
        <label htmlFor="major">Major: </label>
        <br />
        <input type="text" id="major" defaultValue={major} />
        <br />
        <br />
        <button
          className="addEd"
          id={index}
          type="submit"
          onClick={handleSubmit}
        >
          Add
        </button>
        <br /> <br />
      </form>
    );
  }

  render() {
    const { handleSubmit, education } = this.props;
    const educationDisplay = education.map((obj, index) => {
      if (obj.edit) {
        return this.edit(
          obj.start,
          obj.end,
          obj.major,
          obj.school,
          index,
          handleSubmit
        );
      } else {
        return this.display(
          obj.start,
          obj.end,
          obj.major,
          obj.school,
          index,
          handleSubmit
        );
      }
    });

    educationDisplay.push(this.edit("", "", "", "", "", handleSubmit));
    console.log(educationDisplay);

    return (
      <div className="column">
        <h2>Education</h2>
        {educationDisplay}
      </div>
    );
  }
}

export default Education;
