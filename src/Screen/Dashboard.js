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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Stack from '@mui/material/Stack';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ApexCharts from 'apexcharts';
import PieCharts from './Components/PieCharts';
import DonutCharts from './Components/DonutChart';
import Block from './Components/Block';
import SquareIcon from '@mui/icons-material/Square';

import Widget from './Components/Widget';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import AddWidget from './Components/AddWidget';

 
export default function Dashboard() {
  const [state, setState] =  useState({
    
    right: false,
  });

  const [status,setStatus]=useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDrawer=()=>{
    setStatus(true)
  }
  const handleClose=()=>{
    setStatus(false)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#fff", color: "#000" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

            {/* <MenuIcon /> */}
          </IconButton>

          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <div style={{ fontSize: 15, marginRight: '5%', color: "grey" }}>Home</div>
            <ArrowForwardIosIcon style={{ fontSize: 12, marginRight: '5%', color: "grey" }} />
            <div style={{ fontSize: 15, fontWeight: 'bold' }}>Dashboard</div>
          </div>


          <div style={{ marginLeft: 400 }}>
            <Paper
              elevation={0}
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 0.6 }} style={{ width: 450, opacity: 10, height: 40, background: "#e5e5e8", border: "1px solid rgb(118 116 116 / 93%)" }}>
              <IconButton sx={{ p: '10px' }} aria-label="menu">

              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search anything..."
                inputProps={{ 'aria-label': 'search google maps' }}


              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>

            </Paper>
          </div>
          <div style={{ marginLeft: 200 }}><NotificationsActiveOutlinedIcon style={{ color: "blue", cursor: 'pointer' }} /></div>


        </Toolbar>

      </AppBar>

      <Grid container style={{}}>
        <Grid item md={12} style={{ background: '#ebebf0', height: 1200 }}>
          <Grid xs={12} style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 50, marginRight: 50, background: '#fff' }} >
            <div style={{ fontWeight: 'bold' }}>CNAPP Dashboard</div>
            <div>
              <Stack spacing={2} direction="row">
                <div style={{ textTransform: 'none', color: "#000", display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }}>Add Widget<AddOutlinedIcon /></div>
                <div style={{ color: "#000", display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }}  > <SyncOutlinedIcon /> </div>
                <div style={{ color: "#000", width: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid lightgrey', borderRadius: 5, cursor: 'pointer' }}   > <MoreVertOutlinedIcon style={{ fontSize: 25 }} /> </div>
                <div variant="outlined" style={{ textTransform: 'none', color: "#000", fontSize: 12, display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }}><AccessTimeFilledIcon style={{ fontSize: 12 }} />| Last 2 Days <KeyboardArrowDownIcon /></div>

              </Stack>
            </div>
          </Grid>

          <Grid xs={12} style={{ marginLeft: 50, marginRight: 50, marginTop: 10, background: '#dcdde4ed', padding: 10, borderRadius: 20 }} >
            <Grid style={{ fontWeight: 500, margin: 4 }} >CSPM Executive Dashboard</Grid>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 13, marginTop: 5 }}>Cloud Accounts</div>

                <PieCharts />

              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ fontWeight: 650, marginLeft: 10, fontSize: 13, marginTop: 5 }}>Cloud Account Risk Assessment</div>

                <DonutCharts />

              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div style={{ textTransform: 'none', color: "#000", display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }} onClick={handleDrawer}>
         
 <AddOutlinedIcon />Add Widget</div>


              </div>
              <Drawer
            anchor={'right'}
            open={status}
            onClose={handleClose}
            style={{width:400}}
          >
            
           
<Widget/>
</Drawer>

            </div>
          </Grid>

          <Grid xs={12} style={{ marginLeft: 50, marginRight: 50, marginTop: 10, background: '#dcdde4ed', padding: 10, borderRadius: 20 }} >
            <Grid style={{ fontWeight: 500, margin: 4 }} >CWPP Dashboard</Grid>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 13, marginTop: 5 }}>Top 5 Namespace Specific Alerts</div>

                <div style={{ textAlign: 'center' }}>
                  <img src=" 1.png" style={{ width: 50, marginTop: 50, }} />
                  <div style={{ fontWeight: 650, fontSize: 12, color: 'grey' }} >No Graph data available</div>
                </div>

              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 13, marginTop: 5 }}>Workload Alerts</div>

                <div style={{ textAlign: 'center' }}>
                  <img src=" 1.png" style={{ width: 50, marginTop: 50, }} />
                  <div style={{ fontWeight: 650, fontSize: 12, color: 'grey' }} >No Graph data available</div>
                </div>


              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div style={{ textTransform: 'none', color: "#000", display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }}  onClick={handleDrawer}>
                  <AddOutlinedIcon />Add Widget</div>
                  <Drawer
            anchor={'right'}
            open={status}
            onClose={handleClose}
 
          >
            <Widget  />
            </Drawer>

              </div>

            </div>
          </Grid>

          <Grid xs={12} style={{ marginLeft: 50, marginRight: 50, marginTop: 10, background: '#dcdde4ed', padding: 10, borderRadius: 20 }} >
            <Grid style={{ fontWeight: 500, margin: 4 }} >Registry Scan</Grid>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 13, marginTop: 5 }}>Image Risk Assessment</div>


                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 12, color: 'grey', marginTop: 4 }} ><span style={{ fontSize: 15, fontWeight: 700, color: '#000', marginRight: 5 }}>1470</span>Total Vulneribalities</div>
                <img src="2.png" style={{ width: 450 }} />
                <div style={{ marginLeft: 10, display: 'flex', alignItems: 'center',justifyContent:'space-evenly' }}>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                    <SquareIcon style={{color:'rgb(169 30 80)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >High(75)</span>
                  </div>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                  <SquareIcon style={{color:'rgb(241 224 90)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Critical(15)</span>
                  </div>
                   
                </div>
                <div style={{ marginLeft: 10, display: 'flex', alignItems: 'center',justifyContent:'space-evenly',marginTop:10 }}>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:190, }}>
                    <SquareIcon style={{color:'rgb(86 61 124)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Normal(7)</span>
                  </div>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                  <SquareIcon style={{color:'rgb(222 212 212)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Nothing(2)</span>
                  </div>
                   
                </div>


              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10 }}>
                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 13, marginTop: 5 }}>Image Security Issues</div>

                <div style={{ marginLeft: 10, fontWeight: 650, fontSize: 12, color: 'grey' }} ><span style={{ fontSize: 15, fontWeight: 700, color: '#000', marginRight: 5 }}>2</span>Total Images</div>

                <img src="3.png" style={{ width: 450 }} />
                <div style={{ marginLeft: 10, display: 'flex', alignItems: 'center',justifyContent:'space-evenly' ,marginTop:10}}>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                  <SquareIcon style={{color:'rgb(241 224 90)',borderRadius:'50%'}} /><span style={{ marginLeft: '2%' }} >High(75)</span>
                  </div>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                  <SquareIcon style={{color:'#e34c26',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Critical(14)</span>
                  </div>
                   
                </div>
                <div style={{ marginLeft: 10, display: 'flex', alignItems: 'center',justifyContent:'space-evenly',marginTop:10 }}>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:180, }}>
                    <SquareIcon style={{color:'rgb(86 61 124)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Normal(10)</span>
                  </div>
                  <div style={{   display: 'flex', alignItems: 'center',marginRight:200, }}>
                  <SquareIcon style={{color:'rgb(222 212 212)',borderRadius:'50%'}} /> <span style={{ marginLeft: '2%' }} >Nothing(2)</span>
                  </div>
                   
                </div>

              </div>

              <div style={{ width: 450, height: 230, background: '#fff', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div style={{ textTransform: 'none', color: "#000", display: 'flex', alignItems: 'center', border: '1px solid lightgrey', padding: 5, borderRadius: 5, cursor: 'pointer' }}>
                  <AddOutlinedIcon />Add Widget</div>


              </div>

            </div>
          </Grid>

        </Grid>
      </Grid>

    </Box>
  );
}