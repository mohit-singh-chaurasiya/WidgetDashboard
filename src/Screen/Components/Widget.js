import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Grid, ListItemButton, } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { CheckBox } from '@mui/icons-material';
export default function Widget() {
    return (
        <Box sx={{ flexGrow: 1 }}>
             <Grid xs={12} style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:50,background:'rgb(33 86 138)',color:'#fff'}}>
                <div style={{marginLeft:15}}>Add Widget</div>
                <CloseIcon/>
             </Grid>
            <Grid container >
                <Grid xs={12} style={{}}>
                    <Grid xs={12} style={{ fontSize:15,fontWeight:600, marginLeft: '2%', marginTop: 10 }}>
                        Personalize your Dashboard by add the following widget.
                    </Grid>
                    <Grid xs={12} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', lineHeight: "2",marginBottom:15 }}>
                        <Grid xs={6} style={{ display: 'flex', justifyContent: ' ', alignItems: 'center',marginTop:10 }}>
                            <Button  style={{ fontWeight: 600,border:' 1px  solid grey',marginRight:20 ,marginLeft:30,color:'#000' }}>CSPM</Button>
                            <div style={{ fontWeight: 600,marginRight:20 }}>CWPP</div>
                            <div style={{ fontWeight: 600,marginRight:20 }}>Image</div>
                            <div style={{ fontWeight: 600, marginRight:20}}>Ticket</div>
                        </Grid>
                        <Grid xs={6}></Grid>
                    </Grid>
                    <Paper elevation={1} xs={12} style={{ display: 'flex', alignItems: 'center', color: 'grey', fontWeight: 600, marginLeft: '2%', padding: 5 }} >
                        <CheckBox style={{ marginRight: '1%', color: '#000', cursor: 'pointer' }} />Cloud Accounts
                    </Paper>
                    <Paper xs={12} style={{ display: 'flex', alignItems: 'center', color: 'grey', fontWeight: 600, marginLeft: '2%', padding: 5, marginTop: 2 }} >
                        <CheckBox style={{ marginRight: '1%', color: '#000', cursor: 'pointer' }} />Cloud Account Risk Assessment
                    </Paper>
                </Grid>
                <Grid xs={12} fullWidth style={{ position: "absolute", bottom: 5, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '95%' }}>
                    <div style={{ textTransform: 'none', marginRight: 10, border: '1px solid grey', padding: 6, paddingLeft: 15, paddingRight: 15, borderRadius: 5, paddingBottom: 10, cursor: 'pointer' }} >Cancel</div>

                    <Button variant='contained' style={{ textTransform: 'none',background:'rgb(33 86 138)' }} >Confirm</Button>
                </Grid>

            </Grid>
        </Box>
    )
}