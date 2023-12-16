import { Card, CardContent, Typography, Grid } from "@mui/material";
import styles from './Cards.module.css';
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, deaths, recovered, date } }) => {

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent='center'>

                <Grid item component={Card} xs={12} md={3} boxShadow={5} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} boxShadow={5} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} boxShadow={5} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} seperator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(date).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
}

export default Cards;