import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Job = (props) => (
    <Container>
      <Grid inverted stackable>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column only='mobile' textAlign='center' width={4}>
            <Image size='small' avatar src={props.item.image}/>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={12}>
            <h1><b>{props.item.heading1},</b> {props.item.heading2}</h1>
            <p>{props.item.dateStart}-{props.item.dateStart}</p>
            <p>{props.item.paragraph1}</p>
            <p>Skills: {props.item.paragraph2}</p>
          </Grid.Column>
          <Grid.Column only='computer tablet' textAlign='right' width={4}>
            <Image size='medium' avatar src={props.item.image}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
);

export default Job
