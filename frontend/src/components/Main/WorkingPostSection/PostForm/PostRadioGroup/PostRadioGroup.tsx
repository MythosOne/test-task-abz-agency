import { useState, useEffect } from 'react';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { CustomFormLabel, CustomRadio } from './PostRadioGroup.styled';

type PostRadioGroupProps = {
  onSubmitData: (position: string) => void;
  resetForm: number;
};
export const PostRadioGroup: React.FC<PostRadioGroupProps> = ({
  onSubmitData,
  resetForm,
}) => {
  const [position, setPosition] = useState('frontendDeveloper');
  // console.log('Position', position);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPosition(value);
    onSubmitData(value);
  };

  useEffect(() => {
    setPosition('');
  }, [resetForm]);

  return (
    <>
      <FormControl>
        <CustomFormLabel id="demo-radio-buttons-group-label">
          Select your position
        </CustomFormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={position}
          onChange={handleChange}
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
