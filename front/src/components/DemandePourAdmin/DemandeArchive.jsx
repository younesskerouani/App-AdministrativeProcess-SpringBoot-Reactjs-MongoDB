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


function createData(name, calories, fat, carbs, status) {
  return { name, calories, fat, carbs, status };
}


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
  },
  titlespan: {
    fontWeight: 'bold',
      fontSize: '20px',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '86px 10px',
      display: 'inline-block'
  }
}));


function DemandeArchive() {

  const classes = useStyles();
  const [DemandesArchive,setDemandesArchive] = useState([]);

  let navigate = useNavigate();

  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = await axios.get("http://localhost:9099/demande/archivedDemande");
      setDemandesArchive(res.data);
      console.log(res.data)
    }

    fetchPosts();
  },[])



  return (
    <>
    <span className={classes.titlespan}>Archive des Demande </span>
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

      {DemandesArchive.map((row) => (
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
                  {row.status}
                </TableCell>  
            </TableRow>
         
        </TableBody>
  ))}

      </Table>
  </TableContainer>
  </>
   );
 
}

export default DemandeArchive;
