import {createMuiTheme} from "@material-ui/core";

export const hoverColor = '#f0f0f0';
export const overdueColor = 'red';
export const assistanceColor = '#42bcf5';
export const todayColor = '#ffea00';
export const warningColor = 'red';
export const checkColor = 'green';
export const errorColor = '#ffea00';
export const searchPlaceholder = "Filter task by name or description";
export const toolbarButtonColor = '#6797c2';

export const theme = createMuiTheme({
    overrides: {
        MuiTableRow: {
            hover: {
                "&:hover": {
                    backgroundColor: `${hoverColor} !important`
                }
            }
        }
    }
});