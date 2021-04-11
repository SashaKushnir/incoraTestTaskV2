import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export const EditButton = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained">Edit</Button>
        </div>
    );
}
export const ShowCommetnsButton = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                Show comments
            </Button>
        </div>
    );
}