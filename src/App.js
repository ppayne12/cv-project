import React, { Component } from "react";
import Education from "./components/resume/Education";
import GeneralInformation from "./components/resume/GeneralInformation";
import WorkExperience from "./components/resume/WorkExperience";
import "./styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      education: [],
      work: [],
      editGeneral: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let className = event.target.className;
    let id = event.target.id;

    switch (className) {
      case "general":
        if (this.state.editGeneral) {
          this.setState({ editGeneral: false });
        } else {
          this.setState({ name: event.target.form.elements.name.value });
          this.setState({ phone: event.target.form.elements.phone.value });
          this.setState({ email: event.target.form.elements.email.value });
          this.setState({ editGeneral: true });
        }
        break;

      case "work":
        this.setState({
          work: this.state.work.concat([
            {
              start: event.target.form.elements.start.value,
              end: event.target.form.elements.end.value,
              company: event.target.form.elements.company.value,
              title: event.target.form.elements.title.value,
              edit: false,
            },
          ]),
        });
        break;

      case "addEd":
        console.log("Add eduction: " + id);
        if (id) {
          let updatedEducation = [...this.state.education];
          updatedEducation[id].edit = false;
          updatedEducation[id].start = event.target.form.elements.start.value;
          updatedEducation[id].end = event.target.form.elements.end.value;
          updatedEducation[id].school = event.target.form.elements.school.value;
          updatedEducation[id].major = event.target.form.elements.major.value;
          this.setState({ education: updatedEducation });
        } else {
          this.setState({
            education: this.state.education.concat([
              {
                start: event.target.form.elements.start.value,
                end: event.target.form.elements.end.value,
                school: event.target.form.elements.school.value,
                major: event.target.form.elements.major.value,
                edit: false,
              },
            ]),
          });
        }
        break;

      case "editEd":
        console.log(id);
        let updatedEducation = [...this.state.education];
        updatedEducation[id].edit = true;
        this.setState({ education: updatedEducation });
        break;

      default:
        console.log(className);
        console.log("unknown");
    }

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1> Resume Generator</h1>
        <div className="row">
          <GeneralInformation
            tag={this.state.editGeneral ? "Edit" : "Add"}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            email={this.state.email}
            phone={this.state.phone}
          />
          <Education
            handleSubmit={this.handleSubmit}
            education={this.state.education}
          />
          <WorkExperience
            handleSubmit={this.handleSubmit}
            work={this.state.work}
          />
        </div>
      </div>
    );
  }
}

export default App;
