import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// form parts
import FacultyRadioButtons from './formParts/RadioGroupButtons';
import YearRadioButtons from './formParts/YearRadioButtons';
import EventSourceRadioButtons from './formParts/EventSourceRadioButtons';



export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ever wanted to learn how to code, but don't know where to start? Ready to gain practical skills and level-up your technical understanding? UBC BizTech and Lighthouse Labs invite you to join the beginner-friendly Python coding lesson - Coding For Noobs! 
        📲 Please bring your Mac or PC to participate in the workshop.
        Event Details:
        😁 Who: YOU, any students of any faculty who are interested in learning Python, and professional instructors from Lighthouse Labs
        🏢 Where: Henry Angus Building, Room 295
        📅 When: Monday, November 6th from 5:30 - 8:30pm
        💸 Cost: This event is FREE for BizTech Members. Non-members can purchase membership upon sign-in at the event.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FacultyRadioButtons/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <YearRadioButtons/>
        </Grid>
        <Grid item xs={12}>
          <EventSourceRadioButtons/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
