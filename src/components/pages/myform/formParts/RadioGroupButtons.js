import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export class RadioGroupButtons extends Component {
  optionsArray = ["option1", "option2", "option3", "option2", "option3", "option2", "option3", "option2", "option3", "option2", "option3"] 
  radioGroupTitle = "optionsssssss"

  createButtons(optionsArr) {
    return optionsArr.map((option) => (
          <FormControlLabel value={option} control={<Radio/>} label={option} />
        ));
  }


  render() { return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{this.radioGroupTitle}</FormLabel>
      {/* <RadioGroup defaultValue={this.optionsArray[0]} aria-label={this.radioGroupTitle} name={this.radioGroupTitle}> */}
      <RadioGroup defaultValue={this.optionsArray[0]}>
        {this.createButtons(this.optionsArray)}
      </RadioGroup>
    </FormControl>
  );
} }

export default RadioGroupButtons


