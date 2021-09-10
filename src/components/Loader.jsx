import React from 'react';
import {Container, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        height: window.innerHeight - 50,
        alignItems: "center",
        justifyContent: "center"
    },
}));
const Loader = () => {
    const classes = useStyles()
    return (
        <div>
            <Container>
                <Grid container className={classes.grid}>
                    <Grid>
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Loader;