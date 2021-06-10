import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

export const Cards = (data) => {
    console.log('-------',data);
    if(!data){
        return 'Loading';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start = {0} end = {data.totalConfimed} duration={2.5} separator =","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdated).toDateString()}</Typography>
                        <Typography variant="body2">Number of active case of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start = {0} end = {data.totalRecovered} duration={2.5} separator =","/></Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdated).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start = {0} end = {data.totalDeaths}duration={2.5} separator =","/></Typography>
                        <Typography color="textSecondary">{new Date(data.lastUpdated).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths cause by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>

    )
}
export default Cards;