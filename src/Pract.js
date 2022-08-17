import React, { useState, useEffect } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import auditData from "../src/oldJson/Audit.json";
import docData from "../src/oldJson/docData.json";
import Document from "./Json/DocData.json";
import Audit from "./Json/auditData.json";

const Pract = () => {
  const [Audits, setAudits] = useState({});
  const [Docs, setDocs] = useState();

  useEffect(() => {
    setAudits(Audit);
  }, []);

  console.log(Audits);

  return (
    <div>
      {Audits.map((Audit, index) => {
        <p key={index}>{Audit.auditName}</p>;
      })}
    </div>
  );
};

export default Pract;
