import { useEffect } from "react";
import { useState } from "react"
import { getDataApi } from "../service/apirick";
import { Modall } from "./Modal";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const Home=()=>{


    const [datos, setDatos] = useState([]);
    useEffect(()=>{
        getDataApi().then((data)=>setDatos((data.results)));
    },[])
    console.log(datos);
    return(
        <>
        <h1>Personajes</h1>
        <Grid container  justifyContent="center"
        alignItems="center" gap={1} spacing={0}>
        {
            datos.map((info,index)=>{
                return <div key={index}>
                    <Grid item  xs={11}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="300"
                            width="345"
                             image={info.image} 
                            alt={info.name}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {info.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Modall valor={info.image}/>
                                <h5>Especie: {info.species}</h5>
                                <h5>Estado: {info.status}</h5>
                                <h5>Genero: {info.gender}</h5>
                                
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Grid>
                   
             

                    </div>
             
            })
        }
           </Grid>

        </>
    )
}

export default Home;