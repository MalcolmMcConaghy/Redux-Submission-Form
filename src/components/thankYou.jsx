import React, { Fragment }  from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Typography  } from '@material-ui/core';

function ThankYou({ name, surname, age, location, battleTag, mainTank, offTank, peakSR }) {
  return (
    <Fragment>
      <Typography
        align='center'
        color='primary'
        variant='h3'
        gutterBottom
      >
        {`Thank you ${battleTag} for registering your interest for a Tank Role`}
      </Typography>
      <div className='player-info'>
        <p>{`Name: ${name}`}</p>
        <p>{`Surname: ${surname}`}</p>
        <p>{`Age: ${age}`}</p>
        <p>{`Location: ${location}`}</p>
        <p>{`Battle Tag: ${battleTag}`}</p>
        <p>{`Main Tank: ${mainTank}`}</p>
        <p>{`Off Tank: ${offTank}`}</p>
        <p>{`Peak SR: ${peakSR}`}</p>
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    name: state.playerInfo.name,
    surname: state.playerInfo.surname,
    age: state.playerInfo.age,
    location: state.playerInfo.location,
    battleTag: state.overwatchInfo.battletag,
    mainTank: state.overwatchInfo.mainTank,
    offTank: state.overwatchInfo.offTank,
    peakSR: state.overwatchInfo.peakSR,
  }
}

export default connect(mapStateToProps)(ThankYou);
