import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import funlogo from "../../images/internet.png";
import "../../Styles/Components/Category/Category.css";
import { movies$ } from "../../Services/movies";

const boxStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "50px",
    opacity: "0.9",
    fontSize: "160%",
    border: "2px solid #EFEFEF",
    color: "#000",
    backgroundColor: "white",
    height: "100px",
    width: "550px",
    marginTop: "20px",
    boxShadow: "-3px 10px 25px rgba(0, 0, 0, 0.1)",
};
  
const boxStyleSmall = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "50px",
    opacity: "0.9",
    fontSize: "min(120%, 4vw)",
    border: "1px solid #EFEFEF",
    backgroundColor: "white",
    height: "100px",
    width: "80vw",
    boxShadow: "-3px 5px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#000",
};
  
const selectStyle = {
    display: "flex",
    height: "60px",
    borderRadius: "50px",
    backgroundColor: "white",
    opacity: "0.9",
    fontSize: "min(90%, 4vw)",
    width: "275px",
    marginLeft: "10px",
    color: "#000",
    borderColor: "transparent",
};

const labelSelect = {
    height: "60px",
    fontSize: "1OO%",
    width: "275px",
    marginLeft: "10px",
    color: "transparent",
    borderColor: "transparent",
}

const cityNameArrivalStyle = {
    color: "#000",
    fontSize: "100%",
    margin: "auto",
    //marginLeft: "20%",
    paddingRight: "100%",
  };

var buttonStyle = {
    position: "relative",
    borderColor: "transparent",
    alignItems: "center",
    fontFamily: "Mont, bold",
    lineHeight: "1",
};

const Category = ({filteredCategory, dispatch}) => {
    return (
        <FormControl style={buttonStyle} fullwidth>
            <Box style={boxStyle}>
                <Select style={selectStyle} label="Select" onChange={e => dispatch({type: 'filter' , category: e.target.value})}>
                    <MenuItem selected value='default'>All Category</MenuItem>
                    {Array.from(new Set(filteredCategory)).map(category => {
                        return (
                        <MenuItem value={category} key={category}>{category}</MenuItem>)
                    })
                    }
                </Select>
                <div className="separatorStyle"></div>
                <ArrowBackIcon fontSize="large"></ArrowBackIcon>
                    <div className="elementArrival">
                        <div className="nameAndCode">
                        <span style={cityNameArrivalStyle}>Choose Category</span>
                    </div>
                </div>
            </Box>
        </FormControl>
    )
}

export default Category;