import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

import LoginSchema from '@/app/forms/LoginSchema';
import ApiClientLocal from '@/app/utils/ApiClientLocal';

interface ILogin {
  username: string;
  password: string;
}
const LoginSection = () => {
  const initialValues: ILogin = { username: '', password: '' };
  const handleSubmit = (values: ILogin) => {
    ApiClientLocal.post('/api/authentication/login/', values)
      .then(() => {
        console.log('success');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        validationSchema={LoginSchema}
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          // actions.setSubmitting(false);
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field className="bg-red-500" name="username" type="username" />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}
            <Field className="bg-red-500" name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <ErrorMessage name="password" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginSection;
