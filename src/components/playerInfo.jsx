import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { submitPlayerInfo } from '../actions';

const useStyles = makeStyles({
  submitButton: {
    marginTop: '1em',
  }
});

function PlayerInfo({ playerInfo, submitPlayerInfo }) {
  const [values, setValues] = useState(playerInfo);
  const history = useHistory();
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPlayerInfo(values);
    history.push('/overwatch-info');
  }

  return (
    <div className="App">
      <Typography
        color='primary'
        variant='h2'
        gutterBottom
      >
        Overwatch Belong League
      </Typography>
      <Typography
        color='secondary'
        variant='h3'
        gutterBottom
      >
        Player Information
      </Typography>
      <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label='First Name'
          name='name'
          value={values.name ? values.name : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Surname"
          name='surname'
          value={values.surname ? values.surname : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Age"
          name='age'
          value={values.age ? values.age : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Location"
          name='location'
          value={values.location ? values.location : ''}
        />
        <Button
          className={classes.submitButton}
          color='primary'
          variant='contained'
          type='submit'
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    playerInfo: state.playerInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitPlayerInfo: (playerInfo) => {
      dispatch(submitPlayerInfo(playerInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
