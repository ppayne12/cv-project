import React, { useState } from "react";
import Education from "./components/resume/Education";
import GeneralInformation from "./components/resume/GeneralInformation";
import WorkExperience from "./components/resume/WorkExperience";
import "./styles/styles.css";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    phone: "",
    email: "",
    editGeneral: false,
  });

  const [education, setEducation] = useState([]);

  const [work, setWork] = useState([]);

  const handleSubmit = (event) => {
    let className = event.target.className;
    let id = event.target.id;

    switch (className) {
      case "general":
        if (general.editGeneral) {
          setGeneral({ editGeneral: false });
        } else {
          setGeneral({ name: event.target.form.elements.name.value });
          setGeneral({ phone: event.target.form.elements.phone.value });
          setGeneral({ email: event.target.form.elements.email.value });
          setGeneral({ editGeneral: true });
        }
        break;

      case "work":
        setWork(
          work.concat([
            {
              start: event.target.form.elements.start.value,
              end: event.target.form.elements.end.value,
              company: event.target.form.elements.company.value,
              title: event.target.form.elements.title.value,
              edit: false,
            },
          ])
        );

        break;

      case "addEd":
        console.log("Add eduction: " + id);
        if (id) {
          let updatedEducation = [...education];
          updatedEducation[id].edit = false;
          updatedEducation[id].start = event.target.form.elements.start.value;
          updatedEducation[id].end = event.target.form.elements.end.value;
          updatedEducation[id].school = event.target.form.elements.school.value;
          updatedEducation[id].major = event.target.form.elements.major.value;
          setEducation(updatedEducation);
        } else {
          setEducation(
            education.concat([
              {
                start: event.target.form.elements.start.value,
                end: event.target.form.elements.end.value,
                school: event.target.form.elements.school.value,
                major: event.target.form.elements.major.value,
                edit: false,
              },
            ])
          );
        }
        break;

      case "editEd":
        console.log(id);
        let updatedEducation = [...education];
        updatedEducation[id].edit = true;
        setEducation(updatedEducation);
        break;

      default:
        console.log(className);
        console.log("unknown");
    }

    event.preventDefault();
  };

  return (
    <div>
      <h1> Resume Generator</h1>
      <div className="row">
        <GeneralInformation
          tag={general.editGeneral ? "Edit" : "Add"}
          handleSubmit={handleSubmit}
          name={general.name}
          email={general.email}
          phone={general.phone}
        />
        <Education handleSubmit={handleSubmit} education={education} />
        <WorkExperience handleSubmit={handleSubmit} work={work} />
      </div>
    </div>
  );
}

export default App;
