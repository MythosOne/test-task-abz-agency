import { useFormik } from 'formik';
import { object, string } from 'yup';
// import { nanoid } from 'nanoid';
import { TextField } from '@mui/material';

import { Form } from './UserInfoForm.styled';
export const UserInfoForm = () => {
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
      // setUser([...userInfo, {id: nanoid(), ...values}]);
      console.log('Отправлено', values);
      formik.resetForm();
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          name="name"
          autoComplete="name"
          id="outlined-name"
          label="Your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          name="email"
          autoComplete="email"
          id="outlined-email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="phone"
          autoComplete="phone"
          id="outlined-phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone ? formik.errors.phone : ' +380 (XX) XXX - XX - XX'}
        />
        {/* <button type="submit">Send</button> */}
      </Form>
    </>
  );
};
