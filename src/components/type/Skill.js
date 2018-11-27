import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Job = (props) => (
    <Container>
      <Grid inverted stackable>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column only='mobile' textAlign='center' width={4}>
            <Image size='small' avatar src={require("../../assets/images/"+props.item.image)}/>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={12}>
            <h1><b>{props.item.company},</b> {props.item.role}</h1>
            <p>{props.item.location}</p>
            <p>{props.item.daterange}</p>
            <p>{props.item.description}</p>
            <p>Skills: {props.item.skills}</p>
          </Grid.Column>
          <Grid.Column only='computer tablet' textAlign='right' width={4}>
            <Image size='medium' avatar src={require("../../assets/images/"+props.item.image)}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
);

export default Job
