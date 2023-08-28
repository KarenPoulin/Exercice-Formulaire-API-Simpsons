import React from 'react'
import BsForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/button';
import { Form } from 'formik'
import { Input } from '../Input/Input'
import { Formik } from 'formik';

export const SearchForm = () => {
  const initialValue = {
    search: "",
  };

  return (
    <Formik initialValues={initialValue} validateOnChange>
      <Form as={BsForm} noValidate>
        <Input label='Search' type='text' placeholder='Homer Simpson' id='search' />
        <Button type='submit'>Search</Button>
      </Form>
    </Formik>
  )
}
