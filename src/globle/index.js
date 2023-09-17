import styled from "@emotion/styled";
import { Theme} from "@mui/material";
import {Paper,Typography} from "@mui/material";

const currentTheme = 'dark'

export const ContactBlock = styled(Paper)(({theme})=>{
  return ({

    backgroundColor: theme.backgroundColour[currentTheme].default,
    // color: theme.colours[currentTheme].default,
    color: "blue",
    fontSize: theme.fontSize.paragraph
})});

export const Heading_main = styled(Typography)(({ theme }) => {
  return ({
    color: 'blue',
  });
});
export const Error_msg = styled(Typography)(({ theme }) => {
  return ({
    color: 'red',
  });
});




