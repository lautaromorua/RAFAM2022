import React from 'react'
import { Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import { InfoConfig } from '../infoPageConfig'

const TemplateConfig = () => {

    return (
        <div>
            {InfoConfig.map((item, i) => {
                return (
                    <div className='row'>
                        <Card className='card' key={i}>
                            <CardContent>
                                <Typography className='card-tittle' component="div">
                                    {item.tittle}
                                </Typography>
                                <Typography className='card-text'>
                                    {item.text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>
                                    { }
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                )
            })}
        </div>

    )
}

export default TemplateConfig