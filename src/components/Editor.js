import editorMessage from "../data/data";
import { useState } from "react";

import { marked } from 'marked';
// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');



const Editor = () => {
  const [msg, setMsg] = useState(editorMessage);

  return (
    <div className="">

      
      <div className="row align-items-center">
        
        {/* Editor */}
        <div className="col-6">
          <div className="card bg-warning text-primary rounded-4">
            <p className="text-center text-primary fs-4 border-bottom border-dark border-3">Editor</p>
            <div className="container pb-3">
              <div className="">
                <textarea className="form-control" id="editorTextArea" rows="25">
                  {msg}
                </textarea>
              </div>
            </div>
          </div>
        </div>

      {/* Previewer */}
        <div className="col-6">
          <div className="card bg-warning text-primary rounded-4">
            <p className="text-center text-primary fs-4 border-bottom border-dark border-3">Previewer</p>
            <div className="container pb-3">
              <div className="">
                <textarea className="form-control" id="previewerTextArea" rows="25">
                  {msg}
                </textarea>
              </div>
            </div>
          </div>
        </div>

      </div>

      


    </div>
  );
};

export default Editor;
