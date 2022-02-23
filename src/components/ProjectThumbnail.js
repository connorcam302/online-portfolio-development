import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Stack, Chip } from '@mui/material';
import AcademicPaperLibrary from './../img/academicpaperlibrary.jpg'
import { red } from '@mui/material/colors';

const color = red[500];

export default function ProjectThumbnail(props) {

  let php = <div></div>
  let java = <div></div>
  let js = <div></div>
  let matlab = <div></div>
  let pi = <div></div>
  let mysql = <div></div>
  let python = <div></div>
  let react = <div></div>
  let ruby = <div></div>
  let sqlite = <div></div>
  let tailwind = <div></div>
  let api = <div></div>
  let hardware = <div></div>
  let software = <div></div>

  if(props.php === "true"){
    php = <Chip label="PHP" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9978ab'}}/>
  }
  if(props.java === "true"){
    java = <Chip label="Java" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#ed8932'}}/>
  }
  if(props.js === "true"){
    js = <Chip label="JS" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fff70d'}}/>
  }
  if(props.matlab === "true"){
    matlab = <Chip label="MATLAB" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5b68fc'}}/>
  }
  if(props.pi === "true"){
    pi = <Chip label="Raspberry Pi" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#e87168'}}/>
  }
  if(props.mysql === "true"){
    mysql = <Chip label="MySQL" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#52a3ff'}}/>
  }
  if(props.python === "true"){
    python = <Chip label="Python" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#253e8f', color:'#fcfcfc'}}/>
  }
  if(props.react === "true"){
    react = <Chip label="ReactJS" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#4aedff'}}/>
  }
  if(props.ruby === "true"){
    ruby = <Chip label="Ruby" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#fa3725'}}/>
  }
  if(props.sqlite === "true"){
    sqlite = <Chip label="SQLite" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#5ea1ff'}}/>
  }
  if(props.api === "true"){
    api = <Chip label="API" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#12fc6c'}}/>
  }
  if(props.tailwind === "true"){
    tailwind = <Chip label="Tailwind" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#9ef2ff'}}/>
  }
  if(props.hardware === "true"){
    hardware = <Chip label="Hardware" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#333333', color:'#fcfcfc'}}/>
  }
  if(props.software === "true"){
    software = <Chip label="Software" sx={{marginLeft:1,marginRight:1,marginBottom:0.5, backgroundColor:'#dbdbdb'}}/>
  }
  
  return (
    <div>
    <Box className='ProjectThumbnailContainer'
      sx={{
        width: 400,
        backgroundColor: '#2E3B55',
        borderRadius: '50px 50px 10px 10px',
        paddingTop:10,
        verticalAlign: 'text-bottom',
        marginLeft:3,
        marginRight:3,
      }}
    >
      <Box className='ProjectThumbnailImage'>
        <img src={AcademicPaperLibrary}></img>
      </Box>
      <Box className='ProjectThumbnailText'>
        <Typography 
        sx={{
          fontSize: 40
        }}>
          {props.name}
        </Typography>
      </Box>
      <Box className='ProjectThumbnailTags' >
        <div sx={{ display: 'inline' }}>
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
          {tailwind}
          {hardware}
          {software}
        </div>
      </Box>
    </Box>
  </div>
  );
}