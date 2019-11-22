import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react'

const Education = (props) => (
    <Container>
      <Grid inverted stackable>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column only='mobile' textAlign='center' width={4}>
            <Image size='small' avatar src={require("../../assets/images/"+props.item.image)}/>
          </Grid.Column>
          <Grid.Column verticalAlign='middle' width={12}>
            <h2><b>{props.item.university},</b> {props.item.course}</h2>
            <p>{props.item.daterange}</p>
            <p>{props.item.modules}</p>
          </Grid.Column>
          <Grid.Column only='computer tablet' textAlign='right' width={4}>
            <Image size='medium' avatar src={require("../../assets/images/"+props.item.image)}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
);

export default Education
