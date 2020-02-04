import React, { useState } from 'react';
import axios from 'axios';
import styled-components
import NavBar from './NavBar';
import BottomNavBar from './BottomNavBar';

const SignIn = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '', token: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(user.username);
    alert(user.password);
  };

  return (
    <div>
      <NavBar />

      <Paper className={classes.root}>
        <form
          onSubmit={event => handleSubmit(event)}
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <div className={classes.centered}>
            <Typography variant="h2" gutterBottom>
              Sign in
            </Typography>
          </div>
          <div className={classes.centered}>
            <LockOpenOutlinedIcon />
          </div>
          <div className={classes.centered}>
            <TextField
              name="username"
              label="Username"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.username || ''}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <TextField
              name="password"
              label="Password"
              type="password"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.password || ''}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              className="classes.button"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
      <BottomNavBar />
    </div>
  );
};

export default SignIn;
