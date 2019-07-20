import { createMuiTheme } from "@material-ui/core/styles";
import  grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
    palette: {
        primary: {
            main: '#bdbdbd',
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: grey[500]
                }
            }
        }
    }
})