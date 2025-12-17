import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (item, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <div className="text-center skills-tile">
              {item.icon ? (
                <div
                  style={{
                    fontSize: "220%",
                    textAlign: "center",
                    display: "inline-block",
                    lineHeight: "1",
                  }}
                >
                  <span
                    className="iconify"
                    data-icon={item.icon}
                    data-inline="false"
                    style={{ margin: "0 auto" }}
                  ></span>

                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {item.name}
                  </p>
                </div>
              ) : (
                <i className={item.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {item.name}
                  </p>
                </i>
              )}
            </div>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
