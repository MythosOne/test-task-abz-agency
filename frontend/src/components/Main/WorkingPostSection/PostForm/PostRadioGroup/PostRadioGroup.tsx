import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const PostRadioGroup = () => {
  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="frontendDeveloper"
            control={<Radio />}
            label="Frontend developer"
          />
          <FormControlLabel
            value="backendDeveloper"
            control={<Radio />}
            label="Backend developer"
          />
          <FormControlLabel
            value="designer"
            control={<Radio />}
            label="Designer"
          />
          <FormControlLabel
            value="qualityAssuranceEngineer"
            control={<Radio />}
            label="QA"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};
