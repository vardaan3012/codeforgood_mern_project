import React from 'react';
import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Group } from '@mantine/core';






import { useState } from 'react';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
});







function Enrollform() {





  const form = useForm({
    schema: yupResolver(schema),
    initialValues: {
      name: '',
      email: '',
      description: '',
      address: '',
      phone: "",
      category: ""

    },
  });

  return (
    <Box sx={{ maxWidth: 840 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => {



        let sellerdata = {
          name: values.name,
          address: values.address,
          email: values.email,
          phonenumber: values.phonenumber,
          description: values.description,
          category: values.category,

        }

        //  Use this part for sending data to api

        // currently document cannot be uploaded




      })}>

        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps('name')}
        />
        <TextInput
          required
          label="Description"
          placeholder="about product"
          mt="sm"
          {...form.getInputProps('description')}
        />

        <TextInput
          required
          label="address"
          placeholder="shop address"
          mt="sm"
          {...form.getInputProps('address')}
        />
        <NumberInput
          required
          label="Phone number"
          placeholder="Enter a phone number"
          mt="sm"
          {...form.getInputProps('phone')}
        />



        <TextInput
          required
          label="Document proof(google drive)"
          placeholder="category"
          mt="sm"
          {...form.getInputProps('category')}
        />



        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>


    </Box>
  );
}

export default Enrollform