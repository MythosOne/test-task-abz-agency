import { useFormik } from 'formik';
import { object, string } from 'yup';

import { Form, Input, Label } from './UserInfoForm.styled';
export const UserInfoForm = () => {
  const UserSchema = object().shape({
    name: string()
      .matches(/^[a-zA-Zа-яА-ЯёЁ\s]+$/)
      .required('Required')
      .min(2),
    email: string()
      .required('Required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    phone: string()
      .matches(/^[+]?[0-9\s()-]+$/)
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" {...formik.getFieldProps('phone')} />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
        {/* <button type="submit">Submit</button> */}
      </Form>
    </>
  );
};
