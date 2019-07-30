import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: {
            main: '#bdbdbd',
        },
        secondary: {
            main: '#546e7a',
        },
        type: 'dark',
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: '#546e7a'
                }
            }
        },
        AppBar: {
            root: {
                marginBottom: '0vh'
            }
        }
    }
})