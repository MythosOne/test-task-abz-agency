import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import type { User } from '@/types/User';

import { UserInfoForm } from './UserInfoForm/UserInfoForm';
import { PostRadioGroup } from './PostRadioGroup/PostRadioGroup';
import { PhotoUpload } from './PhotoUpload/PhotoUpload';
import { Button } from '@/components/Button/Button';

import { FormContainer } from './UserForm.styled';

type UserFormProps = {
  onAddUser: (user: User) => void;
};
export const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const [isSubmitButton, setIsSubmitButton] = useState(true);

  // console.log('userInfo in UserForm', userInfo);
  // console.log(' Position:', position);
  // console.log(' Photo:', photo);

  // const isFormValid = !!( Object.keys(userInfo).length && position && photo);
  // console.log(isFormValid)

  const isUserInfoFilled = Object.values(userInfo).every(
    (value) => value !== '',
  );

  useEffect(() => {
    if (isUserInfoFilled && position && photo) {
      console.log('isUserInfoFilled', isUserInfoFilled);
      setIsSubmitButton(false);
    } else {
      setIsSubmitButton(true);
    }
  }, [userInfo, position, photo]);

  const onSubmit = () => {
    if (isUserInfoFilled && position && photo) {
      const newUser: User = { id: nanoid(), ...userInfo, position, photo };
      setIsSubmitButton(true);
      console.log('Form submitted:', newUser);
      onAddUser(newUser);
    } else {
      console.log('Not all forms are filled correctly');
      setIsSubmitButton(true);
    }
    setResetKey((prevKey) => prevKey + 1);
    setUserInfo((prev) => {
      return { ...prev, name: '', email: '', phone: '' };
    });
    setPosition('');
    setPhoto(null);
  };

  return (
    <FormContainer>
      <UserInfoForm onSubmitData={setUserInfo} resetForm={resetKey} />
      <PostRadioGroup onSubmitData={setPosition} resetForm={resetKey} />
      <PhotoUpload onSubmitData={setPhoto} resetForm={resetKey} />
      <Button
        style={{ marginTop: '-18px' }}
        variant="signUp"
        onClick={() => {
          onSubmit();
        }}
        label="Sign Up"
        type="submit"
        disabled={isSubmitButton}
      >
        Sign Up
      </Button>
    </FormContainer>
  );
};
