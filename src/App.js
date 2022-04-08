import React, {useState} from "react";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconSearch} from "./theme/styledComponentsOverrides/IconSearch";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [test, setTest] = useState(true)
  return (
    <Container sx={{p: 5}}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Grid item xs={8}>

          </Grid>
          <Button
            variant="contained"
            size="small"
            endIcon={<DeleteIcon/>}
            startIcon={<DeleteIcon/>}
            onClick={() => setTest(!test)}
          >
            Button Small
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            className='search'
            fullWidth
            size='small'
            placeholder="Ըստ վերնագրի կամ նյութի"
            InputProps={{
              endAdornment: (
                <Button
                  variant='search'
                  disableRipple
                >
                  <SearchIcon sx={{
                    fontSize: 20,
                    color: 'white'
                  }}/>
                </Button>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained">Button Medium</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="gradient" color="primary" size="large">Button Large</Button>
        </Grid>
        <Grid item sx={{p: 12}} xs={12} sm={6} md={4}>
          <TextField
            size='small'
            variant="outlined"
            className="variant"
            label="Հեռախոսահամար"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;