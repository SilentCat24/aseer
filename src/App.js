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
  const [data, setData] = useState({});
  const [auditData, setAuditData] = useState({});
  const Audits = Audit;
  const Docs = Document;

  const getAuditBy = (auditId) => {
    getAuditById(auditId);
    setAuditData(getAuditById(auditId));
    setData({});
  };
  // console.log(auditData);
  // console.log(data);

  const getDocumentBy = (documentId) => {
    getDocumentById(documentId);
    setData(getDocumentById(documentId));
    setAuditData({});
  };
  // console.log(auditData);
  // console.log(data);
  // console.log(data);
  // console.log(getAuditById(2));
  // console.log(getAuditById(1));

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
              {Audits.map((name, i) => (
                <p
                  key={i}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => getAuditBy(name.auditId)}
                >
                  {name.auditCreatedBy}
                </p>
              ))}
            </Paper>
          )}
        </div>

        <div>
          {(option === 0 || option === 2) && (
            <Paper elevation={4}>
              <h4>Document</h4>
              {Docs.map((name) => (
                <p
                  style={{ cursor: "pointer" }}
                  onClick={(e) => getDocumentBy(name.documentId)}
                >
                  {name.documentCreatedBy}
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
              <p>
                User Name:{data.documentCreatedBy} {auditData.auditCreatedBy}{" "}
              </p>

              <p>
                Date:{data.documentCreatedDate} {auditData.auditCreatedDate}{" "}
              </p>

              <p>
                Status:{data.documentStatus} {auditData.auditStatus}{" "}
              </p>
            </div>
          }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
