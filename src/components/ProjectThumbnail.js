import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Chip } from '@mui/material';


export default function ProjectThumbnail(props) {

  let tags;
  let php;
  let java;
  let js;
  let matlab;
  let pi;
  let mysql;
  let python;
  let react;
  let ruby;
  let sqlite;
  let api;
  let ml;
  let tailwind;
  let hardware;
  let software;
  let complete = <Chip label="In Progress" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ff6f00'}}/>;

  if(props.php === "true"){
    php= <Chip label="PHP" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9978ab'}}/>
  }
  if(props.java === "true"){
    java= <Chip label="Java" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ed8932'}}/>
  }
  if(props.js === "true"){
    js = <Chip label="JS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fff70d'}}/>
  }
  if(props.matlab === "true"){
    matlab = <Chip label="MATLAB" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5b68fc'}}/>
  }
  if(props.pi === "true"){
    pi = <Chip label="Raspberry Pi" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#e87168'}}/>
  }
  if(props.mysql === "true"){
    mysql = <Chip label="MySQL" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#52a3ff'}}/>
  }
  if(props.python === "true"){
    python = <Chip label="Python" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#253e8f', color:'#fcfcfc'}}/>
  }
  if(props.react === "true"){
    react = <Chip label="ReactJS" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#4aedff'}}/>
  }
  if(props.ruby === "true"){
    ruby = <Chip label="Ruby" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fa3725'}}/>
  }
  if(props.sqlite === "true"){
    sqlite = <Chip label="SQLite" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5ea1ff'}}/>
  }
  if(props.api === "true"){
    api= <Chip label="API" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#12fc6c'}}/>
  }
  if(props.tailwind === "true"){
    tailwind= <Chip label="Tailwind" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9ef2ff'}}/>
  }
  if(props.hardware === "true"){
    hardware = <Chip label="Hardware" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#333333', color:'#fcfcfc'}}/>
  }
  if(props.software === "true"){
    software = <Chip label="Software" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
  }
  if(props.complete === "true"){
    complete = <Chip label="Complete" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#00ff08'}}/>
  }
  if(props.ml === "true"){
    ml = <Chip label="Machine Learning" sx={{fontSize: 18, marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#d457d2'}}/>
  }
  
  return (
    <Box sx={{marginBottom:5}}>
      <Box className='ProjectThumbnailContainer'
        sx={{
          width: 400,
          height:400,
          backgroundColor: '#2E3B55',
          borderRadius: '0px 0px 10px 10px',
          verticalAlign: 'text-bottom',
          marginLeft:3,
          marginRight:3,
          boxShadow: 10,
          '&:hover': {
            backgroundColor: '#485d87', 
            cursor: "pointer",
            transition: "0.5s",
          },
        }}
      >
        <Box className='ProjectThumbnailImage'>
          <img src={props.image}></img>
        </Box>
        <Box className='ProjectThumbnailText'>
          <Typography 
          sx={{
            fontSize: 30,
            padding:1.5,
            color:"#fcfcfc",
            textAlign: "center"
          }}>
            {props.name}
          </Typography>
        </Box>
        <Box className='ProjectThumbnailTags' >
          <div className="tags" sx={{ display: 'inline' }}>
            {php}
            {java}
            {js}
            {matlab}
            {pi}
            {mysql}
            {python}
            {react}
            {ruby}
            {sqlite}
            {api}
            {ml}
            {tailwind}
            {hardware}
            {software}
            {complete}
          </div>
        </Box>
      </Box>
    </Box>
  );
}