import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

function Project({name, desc, image, links}){
    return (<Card sx={{maxWidth: "sm", marginBottom: "2rem"}}>
        <CardMedia
            component="img"
            image={image.src}
            alt={image.alt}
        />
        <CardContent sx={{margin: "0 1rem"}}>
            <Typography variant="h5" component="h2" gutterBottom>
                {name}
            </Typography>
            <Typography gutterBottom>
                {desc}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <Button href={links.deployed} size="small">Deployed</Button>
                <Button href={links.github} size="small">GitHub</Button>
            </Stack>
        </CardContent>
    </Card>);
}

export default Project;