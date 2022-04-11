import { useState } from "react";

function FileList({ filesstruct }) {
  const [expand, setExpand] = useState(false);

  if (filesstruct.isFolder) {
    return (
      <div>
        <span onClick={() => setExpand(!expand)}>
          {filesstruct.name}
          <br />
        </span>
        <div style={{ display: expand ? "block" : "none", padding: "15px" }}>
          {filesstruct.items?.map((exp) => {
            return <FileList key={exp.name} filesstruct={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {" "}
        {filesstruct.name}
        <br />{" "}
      </span>
    );
  }
}

export default FileList;
