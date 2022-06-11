import React, { useState } from 'react';
import { Modal } from '@mantine/core';

import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

function Coursecard({ description, timing, location, name, _id }) {

  const [opened, setOpened] = useState(false);

  // api call to enroll user
  const handleEnroll = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/api/course/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({
        courseId: _id
      })
    })
      .then(response => response.json())
      .then(alert("Enrolled"))
      .catch(err => {
        console.log(err);
      });
  }

  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <h3>{name}</h3>
        {location}
        {timing}
        <hr></hr>
        <Badge variant='lignt'>Course description</Badge><span> </span>
        {description}
      </Modal>

      <div style={{ width: 340, margin: 'auto' }}>
        <Card shadow="sm" p="lg" onClick={() => setOpened(true)}  >
          <Card.Section>
            <Image src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' height={160} alt={name} />
          </Card.Section>

          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>{name}</Text>

          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {description}
          </Text>

          <Link to='/enroll' onClick={handleEnroll}> <button type="button" class="btn btn-primary">Enroll now</button></Link>
        </Card>
      </div>
    </>
  );
}

export default Coursecard;
