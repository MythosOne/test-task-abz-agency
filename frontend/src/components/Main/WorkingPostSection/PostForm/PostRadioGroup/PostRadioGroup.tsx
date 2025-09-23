import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { CustomFormLabel, CustomRadio } from './PostRadioGroup.styled';

export const PostRadioGroup = () => {
  return (
    <>
      <FormControl>
        <CustomFormLabel id="demo-radio-buttons-group-label">
          Select your position
        </CustomFormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="frontendDeveloper"
            control={<CustomRadio />}
            label="Frontend developer"
          />
          <FormControlLabel
            value="backendDeveloper"
            control={<CustomRadio />}
            label="Backend developer"
          />
          <FormControlLabel
            value="designer"
            control={<CustomRadio />}
            label="Designer"
          />
          <FormControlLabel
            value="qualityAssuranceEngineer"
            control={<CustomRadio />}
            label="QA"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};
