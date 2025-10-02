import { useState } from 'react';
import { nanoid } from 'nanoid';

import { UserInfoForm } from './UserInfoForm/UserInfoForm';
import { PostRadioGroup } from './PostRadioGroup/PostRadioGroup';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { Button } from '@/components/Button/Button';

import { FormContainer } from './UserForm.styled';
export const UserForm = () => {
  const [userInfo, setUserInfo] = useState({});
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [resetKey, setResetKey] = useState(0);

  console.log(" UserForm:", userInfo);
  // console.log(" Position:", position);
  // console.log(" Photo:", photo);
  const isFormValid = !!( Object.keys(userInfo).length && position && photo);
  console.log(isFormValid)

  const onSubmit = () => {
    if (Object.keys(userInfo).length && position && photo) {
      const userData = { id: nanoid(), ...userInfo, position, photo };
      console.log('Form submitted:', userData);
    } else {
      console.log('Not all forms are filled correctly');
    }
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <FormContainer>
      <UserInfoForm onSubmitData={setUserInfo} resetForm = {resetKey} />
      <PostRadioGroup onSubmitData={setPosition} resetForm = {resetKey}/>
      <PhotoUpload onSubmitData={setPhoto} resetForm = {resetKey}/>
      <Button
        style={{ marginTop: '-18px' }}
        variant="signUp"
        onClick={() => {
          onSubmit();
        }}
        label="Sign Up"
        type="submit"
        disabled={!isFormValid}
      >
        Sign Up
      </Button>
    </FormContainer>
  );
};
