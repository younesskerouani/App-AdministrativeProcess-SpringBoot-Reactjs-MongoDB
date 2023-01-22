import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter
} from '@material-ui/core';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  table: {
      minWidth: 650,
      padding: '40px'
  },
  
  tableContainer: {
      borderRadius: 15,
      margin: '60px 20px',
      maxWidth: 950,
      maxHeight: '500px'
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      fontWeight: 'bold',
      color: theme.palette.secondary.dark,
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  },
  Button: {
    fontWeight: 'bold',
    fontSize: '15px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
}));


function DemandeList() {

  const classes = useStyles();
  const [Demandes,setDemandes] = useState([]);

  let navigate = useNavigate();

  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = await axios.get("http://localhost:9099/demande/All");
      setDemandes(res.data);
    }

    fetchPosts();
  },[])

  const handleAccept = async(demandeId) =>{
    try{
      const res =await axios.post(`http://localhost:9099/demande/accepter/${demandeId}`);
      window.location.replace("http://localhost:3000/AllDemande");
    }catch(err){
      console.log(err);
    }
      
  }

const handleArchiver = async(demandeId) => {
  try{
    const res =await axios.post(`http://localhost:9099/demande/archiver/${demandeId}`);
    window.location.replace("http://localhost:3000/AllDemande");
  }catch(err){
    console.log(err);
  }
}

  return (
    <TableContainer component={Paper}  className={classes.tableContainer}>
      <Table  className={classes.table} aria-label="simple table" >
       
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Les Demandes</TableCell>
            <TableCell className={classes.tableHeaderCell}>Documents</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
            <TableCell className={classes.tableHeaderCell}></TableCell>
          </TableRow>
        </TableHead>

      {Demandes.map((row) => (
        <TableBody>
          
            <TableRow key={row.cin}>
              <TableCell>
            
              <Grid container>
                  <Grid item lg={2}>
                    <Avatar alt='' src='.' className={classes.avatar}/>
                  </Grid>  
                  <Grid item lg={10}>
                    <Typography className={classes.name}>{row.cin}</Typography>
                    <Typography color="textSecondary" variant="body2">{row.title}</Typography>
                  </Grid>  
              </Grid>    
            
              </TableCell>

              <TableCell >
                   {row.documents?.map((doc)=>
                           (<Typography color="primary" variant="subtitle2"> 
                             { doc } 
                           </Typography>)
                  )}
                
                </TableCell>

              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'accepted' && 'green') ||
                        (row.status === 'pending' && 'blue') ||
                        (row.status === 'rejected' && 'red') )
                    }}
                  >{row.status}</Typography>
                </TableCell>
                  
                <TableCell>
                  {row.status === 'pending' ? <button className={classes.Button} onClick={(e) =>{
                     e.preventDefault()
                     handleAccept(row.demandeId)}}>
                      Accept
                      </button>
                       : row.status ==='rejected' || row.status === 'finished' 
                       ? <button className={classes.Button} onClick={
                        (e) => {
                          handleArchiver(row.demandeId)
                        }
                       }>Archiver</button> : "" }
                </TableCell>  
            </TableRow>
         
        </TableBody>
  ))}

      </Table>
  </TableContainer>
  );
}

export default DemandeList;
