
import React,{useState} from 'react';
import { Modal } from '@mantine/core';

import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';
function Coursecard(props) {

  const [opened, setOpened] = useState(false);

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

        <h3>Course description</h3>
        Duration - 3 months
        <hr></hr>
        <Badge variant='lignt'>Course description</Badge><span> </span>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum facilis suscipit, pariatur nobis optio deserunt nulla necessitatibus, vel totam dolores. Architecto id autem corrupti odit hic aperiam repellendus non neque cum in.
      </Modal>




      

     

    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" p="lg"  onClick={() => setOpened(true)}  >
        <Card.Section>
          <Image src={require('./images/tech1.jpg')} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Learning deal</Text>
          {/* <Badge color="pink" variant="light">
            On Sale
          </Badge> */}
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Join the great learning experience by joining our course and creating a better future for yourself.
        </Text>

        {/* <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Enroll now
        </Button> */}
       

        <Link to='/enroll'> <button type="button" class="btn btn-primary">Enroll now</button></Link>
      </Card>
    </div>
    </>
  );
}

export default Coursecard;
