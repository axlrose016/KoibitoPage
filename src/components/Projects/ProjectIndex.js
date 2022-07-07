import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {FaCloudDownloadAlt} from 'react-icons/fa';
import Typography from '@mui/material/Typography';

const ProjectIndex = () => {
    return (
    <>
    <Grid container>
    <Grid xs={12} sm={6} md={4}>
            <Card style={{margin:'20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={require('../../images/mosquitokill_bg.jpg')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Mosquito Kill
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A very simple game that only need is to throw a selected item to mosquito to get a score. 
                    Have fun and unlock achievements, buy items, compete with google play friends with leaderboard.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="https://play.google.com/store/apps/details?id=com.KoibitoGames.MosquitoKill" target="_blank" size="small"><FaCloudDownloadAlt/>&nbsp;Download</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
            <Card style={{margin:'20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={require('../../images/HR.jpg')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Cloud-based Human Resource System
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <h2>What is Lorem Ipsum?</h2>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
            <Card style={{margin:'20px'}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={require('../../images/twilio.png')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Twilio SMS Text Blast
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <h2>Why do we use it?</h2>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                    as opposed to using 'Content here, content here', making it look like readable English. 
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    Various versions have evolved over the years, 
                    sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    </>
  )
}

export default ProjectIndex