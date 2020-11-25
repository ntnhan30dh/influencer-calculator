import React from 'react'
import ReactExport from "react-export-excel";
import {  Button } from "semantic-ui-react";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportExcel = (props) =>{
    return (
        <div>
        <ExcelFile element={<Button>Download Data</Button>}>
        <ExcelSheet data={props.influencerArr} name="Employees">
          <ExcelColumn label="Name" value="name" />
          <ExcelColumn label="link" value="link" />
          <ExcelColumn label="followers" value="followers" />
          <ExcelColumn label="category" value="category" />
          <ExcelColumn label="platform" value="platform" />
          <ExcelColumn label="prominence" value="prominence" />
          <ExcelColumn label="price" value="price" />
        </ExcelSheet>
      </ExcelFile>
        </div>
    )
}


export default ExportExcel

