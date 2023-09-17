import { createTheme } from "@mui/material";

const classes = createTheme({
    colours : {
        dark: {
            default: '#ff0000'
        },
        light: {
            default: '#ffffff'
        }
    },
    backgroundColour : {
        dark: {
            default: '#ffffff',
        },
        light: {
            default: '#000000'
        }
    },
    fontSize: {
        heading: 36,
        subHeading: 30,
        paragraph: 16
    }
})

export default classes