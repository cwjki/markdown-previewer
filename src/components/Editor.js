import { marked } from "marked";
import { useState } from "react";
import editorMessage from "../data/data";

const html = marked.parse("# Marked in Node.js\n\nRendered by **marked**.");

const Editor = () => {
  const [msg, setMsg] = useState(editorMessage);

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
                >
                  {msg}
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
              <div className="">
                <textarea
                  className="form-control"
                  id="previewerTextArea"
                  rows="25"
                >
                  {msg}
                </textarea>
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
            class="navbar-brand"
            href="https://github.com/cwjki"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            class="navbar-brand"
            href="https://www.linkedin.com/in/juan-carlos-casteleiro/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Editor;
