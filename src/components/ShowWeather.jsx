import React, { useState } from 'react'
import { Card, Typography, CardContent, makeStyles, Divider, Button, Modal, Box } from '@material-ui/core'
import Forecast from './Forecast'

const useStyles = makeStyles({
    button: {
        marginTop: 10,
        backgroundColor: '#0d6efd'
    },

    button2: {
        marginTop: 50,
        backgroundColor: '#0d6efd'
    },

    div: {
        marginTop: 30,

    },

    cardG: {
        textAlign: 'center',
        margin: 40,
        width: 300,
        marginTop: 30
    },
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        fontSize: 12,
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        width: 500,
        height: 230,
        p: 4,
        m: 4,
        textAlign: 'center',
        justifyContent: 'start'

    },
})


const ShowWeather = ({ weather: {
    current_weather: {
        temperature,
    },
    daily,
    timezone

} }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const classes = useStyles()

    return (

        <Card className={classes.cardG} variant='outlined'>
            <CardContent>
                <Typography >
                    Ciudad: Buenos Aires
                </Typography>
                <Divider></Divider>
                <Typography variant='h6' component='div'>
                    Temperatura actual: {`${temperature}°C`}
                </Typography>
                <Typography sx={{ mb: 10 }} color='error'>
                    Mínima: {`${daily.temperature_2m_min[0]}°C`}
                </Typography>
                <Typography color='initial'>
                    Máxima: {`${daily.temperature_2m_max[0]}°C`}
                </Typography>
                <Divider></Divider>
                <Button onClick={handleOpen} className={classes.button} variant='outlined' >Ver proximos días</Button>
                <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box className={classes.style}>
                        <h2 id="child-modal-title">Pronostico proximos días</h2>
                        <div id="child-modal-description" className={classes.div}>
                            <Forecast daily={daily} />
                        </div>
                        <Button onClick={handleClose} className={classes.button2}>Cerrar</Button>
                    </Box>
                </Modal>
            </CardContent>


        </Card>
    )
}

export default ShowWeather