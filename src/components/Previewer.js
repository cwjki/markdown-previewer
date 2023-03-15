import { marked } from "marked";
import { useState } from "react";
import initialMsg from "../data/data";


const Previewer = () => {
  const [msgMarkdown, setMsgMarkdown] = useState(initialMsg);

  const onChange = (e) => {
    setMsgMarkdown(e.target.value);
  };

  function getMarkdownText() {
    let rawMarkup = marked.parse(msgMarkdown);
    return { __html: rawMarkup };
  }

  // function createMarkup() {
  //   console.log(msgHtml)
  //   return {__html: msgHtml};
  // }

  return (
    <div className="">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container-fluid justify-content-center">
          <span className="navbar-brand mb-0 h1">Markdown Previewer</span>
        </div>
      </nav>

      <div className="row align-items-center">
        {/* Editor */}
        <div className="col-6">
          <div className="card bg-warning text-primary rounded-4">
            <p className="text-center text-primary fs-4 border-bottom border-dark border-3">
              Editor
            </p>
            <div className="container pb-3">
              <div className="">
                <textarea
                  className="form-control"
                  id="editorTextArea"
                  rows="25"
                  onChange={onChange}
                >
                  {msgMarkdown}
                </textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Previewer */}
        <div className="col-6">
          <div className="card bg-warning text-primary rounded-4">
            <p className="text-center text-primary fs-4 border-bottom border-dark border-3">
              Previewer
            </p>
            <div className="container pb-3">
              <div className="card-body">
                <div dangerouslySetInnerHTML={getMarkdownText()} />;

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <nav className="navbar">
        <div className="container-fluid justify-content-end">
          <span className="navbar-brand fs-6 fw-semibold">by cwjki</span>
          <a
            className="navbar-brand"
            href="https://github.com/cwjki"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            className="navbar-brand"
            href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Previewer;
