import React, { useState, useEffect } from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
// import auditData from "../src/oldJson/Audit.json";
// import docData from "../src/oldJson/docData.json";
import Document from "./Json/DocData.json";
import Audit from "./Json/auditData.json";
import { getAuditById } from "./Json/AuditByApi";
import { getDocumentById } from "./Json/DocumentApi";

const App = () => {
  const [option, setOption] = useState(0);
  const [display, setDisplay] = useState({
    Head: "",
    userName: "",
    CreatedBy: "",
    status: "",
    Date: "",
    status: "",
  });
  const Docs = Document;
  const Audits = Audit;

  const onClick = async (auditId) => {
    const GetAudit = getAuditById(auditId);
    setDisplay({
      Head: "AUDITS",
      userName: GetAudit.auditCreatedBy,
      CreatedBy: GetAudit.auditName,
      status: GetAudit.auditPurpose,
      Date: GetAudit.auditCreatedDate,
      status: GetAudit.auditStatus,
    });
  };

  // console.log(display);

  const handleClick = async (documentId) => {
    const GetDocs = getDocumentById(documentId);
    setDisplay({
      Head: "DOCUMENTS ",
      userName: GetDocs.documentCreatedBy,
      CreatedBy: GetDocs.documentName,
      status: GetDocs.documentCreatedDate,
      Date: GetDocs.documentCreatedDate,
      status: GetDocs.documentStatus,
    });
  };

  // const getAuditBy = (auditId) => {
  //   setAuditData(getDocumentById(auditId));
  //   setData({});
  // };
  // console.log(auditData);
  // console.log(data);

  // const getDocumentBy = (documentId) => {
  //   setData(getDocumentById(documentId));
  //   setAuditData({});
  // };

  return (
    <Grid container columnSpacing={2} padding={2}>
      <Grid item xs={12}>
        <FormControl xs={{ minwidth: 120 }}>
          <InputLabel>Views</InputLabel>
          <Select
            value={option}
            label="Views"
            onChange={(e) => setOption(e.target.value)}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Audit</MenuItem>
            <MenuItem value={2}>Document</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* left side */}
      <Grid item xs={6}>
        <div>
          {(option === 0 || option === 1) && (
            <Paper elevation={4}>
              <h4>Audit</h4>
              {Audits.map((obj, i) => (
                <p
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => onClick(obj.auditId)}
                >
                  {obj.auditCreatedBy}
                </p>
              ))}
            </Paper>
          )}
        </div>

        <div>
          {(option === 0 || option === 2) && (
            <Paper elevation={4}>
              <h4>Document</h4>
              {Docs.map((obj, i) => (
                <p
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => handleClick(obj.documentId)}
                >
                  {obj.documentCreatedBy}
                </p>
              ))}
            </Paper>
          )}
        </div>
      </Grid>

      {/*  result part */}
      <Grid item xs={6}>
        <Paper elevation={4}>
          {
            <div>
              <h2>{display.Head}</h2>
              <p>Created BY:{display.CreatedBy}</p>
              <p>User Name:{display.userName}</p>
              <p>Date:{display.Date}</p>
              <p>Status:{display.status.toString()}</p>
            </div>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
