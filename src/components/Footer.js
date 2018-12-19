import React, {Component} from 'react';
import {Icon, Segment, Grid, List, Header, Divider, Image, Container} from 'semantic-ui-react';
import Logo from '../assets/logo.png';


export default class GlobalNav extends Component {
  render() {
    return (
      <Segment secondary inverted vertical style={{ margin: '3em 0em 0em', padding: '3em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header inverted as='h4' content='Contact' />
                <List link inverted>
                  <List.Item as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>LinkedIn</List.Item>
                  <List.Item as='a' href='//github.com/paullewisjohnston' target='_blank'>Github</List.Item>
                  <List.Item as='a' href="mailto:pjohnston36@qub.ac.uk">Email</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column verticalAlign='middle' width={10}>
                <Icon name='react' size='large'/>
                <p>
                  Developed using React & Semantic UI React. Hosted on Github Pages.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          <Image centered size='mini' src={Logo} />
        </Container>
      </Segment>
    )
  }
}