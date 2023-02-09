import React from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";
/*import Pagination from '@mui/material/Pagination';
import TablePagination from "@mui/material/TablePagination";
import Stack from '@mui/material/Stack';*/
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";

export const PaginationStyle = styled.div`
    grid-column: 1/-1;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
    align-items: center;
    border-radius: 50px;
    width: 400px;
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
        width: 400px;
        list-style-type: none;
        border-radius: 50px;
        background: #fff;
        box-shadow: -3px 5px 10px rgba(0, 0, 0, 0.1);
        li {
            display: grid;
            justify-content: center;
            align-items: center;
            margin: 8px;
            cursor: pointer;
            a {
               text-decoration: none;
               font-size: 20px;
               color: #000;
               border-radius: 100%;
               margin-left: 3px;
                padding: 0;
                width: 30px;
                height: 30px;
                line-height: 30px;
            }
            &a:hover {
                background-color: #000;
            }
            &:not(.disabled):not(.active) a:hover {
                background-color: #000;
            }
            &.active {
                background-color: #000;
                border-radius: 100%;
                a {
                    color: #000;
                    border-radius: 100%;
                }
            }
        }
    }
`

const itemsCountPerPage = 4;
const pageRangeDisplayed = 3;

const choiceElemBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "right",
    borderRadius: "50px",
    opacity: "0.9",
    fontSize: "20px",
    border: "1px solid #EFEFEF",
    backgroundColor: "white",
    height: "28px",
    width: "4vw",
    boxShadow: "-3px 5px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#000",
};

const Paginations = ({state, activePage, handlePageChange, handleNumberMovies}) => {
    return (
        <div>
            <PaginationStyle>
                <Pagination
                    activePage={ activePage }
                    itemsCountPerPage={ itemsCountPerPage }
                    totalItemsCount={ state.length }
                    pageRangeDisplayed={ pageRangeDisplayed }
                    onChange={ handlePageChange }
                />
            </PaginationStyle>
            <InputLabel id="demo-simple-select-label">Items per page</InputLabel>
            <Select style={choiceElemBox} onChange={e => handleNumberMovies(e.target.value)}>
                <MenuItem value='4'>4</MenuItem>
                <MenuItem value='8'>8</MenuItem>
                <MenuItem value='12'>12</MenuItem>
            </Select>
        </div>
    )
}

export default Paginations;