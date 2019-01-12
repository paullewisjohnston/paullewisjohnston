import React, {Component} from 'react';
import {Icon, Segment, Grid, List, Header, Divider, Image, Container} from 'semantic-ui-react';
import Logo from '../assets/logo.png';


export default class Footer extends Component {
  render() {
    return (
      <Segment vertical style={{ padding: '0 0 3em 0',background:'#fbfbfb' }}>
        <Container textAlign='center'>
          <Grid divided stackable>
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as='h4' content='Contact' />
                <List link>
                  <List.Item as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>LinkedIn</List.Item>
                  <List.Item as='a' href='//github.com/paullewisjohnston' target='_blank'>Github</List.Item>
                  <List.Item as='a' href="mailto:pjohnston36@qub.ac.uk">Email</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column verticalAlign='middle' width={10}>
                <p>
                  Paul Lewis Johnston
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider section />
          <Image centered size='mini' src={Logo} />
        </Container>
      </Segment>
    )
  }
}
