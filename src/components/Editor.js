import editorMessage from "../data/data";
import { useState } from "react";

const Editor = () => {
    const [msg, setMsg] = useState(editorMessage);


    return (
        <div className="">
            <div className="row aling-items-center">
                <div className="col-6  mx-auto">
                    <div className="card bg-warning text-primary">
                        <div className="card-header">
                            <p className="text-center text-primary fs-4">Editor</p>
                        </div>
                        <div className="card-body">
                            <div className="">
                            <label for="editorTextArea" className="form-label"></label>
                            <textarea className="form-control" id="editorTextArea" rows="3">
                                {msg}
                            </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Editor;