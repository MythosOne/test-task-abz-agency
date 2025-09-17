import { UserInfoForm } from './UserInfoForm/UserInfoForm';
import { PostRadioGroup } from './PostRadioGroup/PostRadioGroup';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { Button } from '@/components/Button/Button';

import { FormContainer } from './UserForm.styled';
export const UserForm = () => {
  return (
    <FormContainer>
      <UserInfoForm />
      <PostRadioGroup />
      <PhotoUpload />
      <Button
        variant="signUp"
        onClick={() => {
          console.log('click Sign Up');
        }}
        label="Sign Up"
        type="submit"
        disabled
      >
        Sign Up
      </Button>
    </FormContainer>
  );
};
