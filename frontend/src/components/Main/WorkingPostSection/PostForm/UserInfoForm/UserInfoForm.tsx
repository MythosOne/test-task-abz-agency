import { useState, useEffect} from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
// import { nanoid } from 'nanoid';
// import { TextField } from '@mui/material';

import { Form, TextFieldStyled } from './UserInfoForm.styled';

type UserInfoFormProps = {
  onSubmitData: (userInfo: {
    name: string;
    email: string;
    phone: string;
  }) => void;
  resetForm: number;
};

export const UserInfoForm: React.FC<UserInfoFormProps> = ({
  onSubmitData,
  resetForm,
}) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      onSubmitData(userInfo as { name: string; email: string; phone: string });
    }
  }, [userInfo, onSubmitData]);

  const UserSchema = object().shape({
    name: string()
      .required('Required')
      .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/, 'Only letters and spaces are allowed')
      .min(2),
    email: string()
      .required('Required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Incorrect email address',
      ),
    phone: string()
      .required('Required')
      .matches(
        /^\+380[0-9\s()-]*$/,
        'Phone number must start with +380 and contain only numbers',
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      setUserInfo({ ...values });
      // console.log('Отправлено', values);
    },
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
  });

  const { values, isValid, dirty, submitForm, resetForm: formikResetForm } = formik;

  useEffect(() => {
    if (isValid && dirty) {
      submitForm();
    }
  }, [values, isValid, dirty, submitForm]);

  useEffect(() => {
    formikResetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetForm]);

  return (

    <Form onSubmit={formik.handleSubmit}>
      <TextFieldStyled
        name="name"
        autoComplete="name"
        id="outlined-name"
        label="Your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.name &&
          formik.values.name !== '' &&
          !!formik.errors.name
        }
        helperText={
          formik.touched.name && formik.values.name !== ''
            ? formik.errors.name
            : ''
        }
      />
      <TextFieldStyled
        name="email"
        autoComplete="email"
        id="outlined-email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email &&
          formik.values.email !== '' &&
          !!formik.errors.email
        }
        helperText={
          formik.touched.email && formik.values.email !== ''
            ? formik.errors.email
            : ''
        }
      />
      <TextFieldStyled
        name="phone"
        autoComplete="phone"
        id="outlined-phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.phone && !!formik.values.phone && !!formik.errors.phone
        }
        helperText={
          formik.touched.phone && formik.values.phone !== ''
            ? formik.errors.phone
            : ' +380 (XX) XXX - XX - XX'
        }
      />
      {/* <button type="submit">Send</button> */}
    </Form>
  );
};
