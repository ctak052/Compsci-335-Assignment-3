import { colours } from "../../constants/colours";
import styled from "styled-components";

export const CustomButton = styled.button`
    background-color: #0398fc;
	border: #0c4369 1px solid;
	border-radius: 16px;
	padding: 7px 10px;
	margin: 8px;
	color: white;
	cursor: pointer;
	font-size: ${props => props.size };
    &:hover{
        background-color: #4db2f7;
	    border: #33546b 1px solid;
    }
`