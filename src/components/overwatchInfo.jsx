import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { submitOverwatchInfo } from '../actions';

const useStyles = makeStyles({
  submitButton: {
    marginTop: '1em',
  }
});

function OverwatchInfo({ overwatchInfo, submitOverwatchInfo }) {
  const [values, setValues] = useState(overwatchInfo || {});
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
    submitOverwatchInfo(values);
    history.push('/thank-you');
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
        Overwatch Information
      </Typography>
      <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label='Battle.net Tag'
          name='battletag'
          value={values.battletag ? values.battletag : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Main Tank main"
          name='mainTank'
          value={values.mainTank ? values.mainTank : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Off Tank main"
          name='offTank'
          value={values.offTank ? values.offTank : ''}
        />
        <TextField
          onChange={handleInputChange}
          margin='dense'
          label="Peak SR"
          name='peakSR'
          value={values.peakSR ? values.peakSR : ''}
        />
        <Button
          className={classes.submitButton}
          color='primary'
          variant='contained'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    overwatchInfo: state.overwatchInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitOverwatchInfo: (overwatchInfo) => {
      dispatch(submitOverwatchInfo(overwatchInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverwatchInfo);
