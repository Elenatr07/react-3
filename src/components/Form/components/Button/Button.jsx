import { MUIButton } from "@material-ui/core";

export const Button = ({ label, disable = false }) => {
    <MUIButton disabled={disabled} variant="contained" type="submit">{label}
    </MUIButton>

};