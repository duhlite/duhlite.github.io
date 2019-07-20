import { createMuiTheme } from "@material-ui/core/styles";
import  grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
    palette: {
        primary: grey
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: 'black'
                }
            }
        }
    }
})