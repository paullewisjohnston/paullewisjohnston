import React from 'react';
import {Segment, Grid, List, Divider, Image, Container, Icon} from 'semantic-ui-react';
import Border from './Border'
import Logo from '../assets/logo.png';

const Footer = (props) => {
  return (
    <Segment vertical style={{ padding: '0 0 3em 0',background:props.theme.footer }}>
      <Border type='curved' scrollHeaderHeight={550} viewBoxHeight={20} background='white' fill={props.theme.footer}/>
      <Container textAlign='center'>
        <Grid divided stackable >
          <Grid.Row>
          <Grid.Column verticalAlign='middle' width={8}>
              <p>
                Paul Lewis Johnston
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <List horizontal link>
                <List.Item as='a' href='//linkedin.com/in/paul-lewis-johnston-3abb6b100/' target='_blank'>
                  <Icon name='linkedin' size='big' style={{color:'black'}}/>
                </List.Item>
                <List.Item as='a' href='//github.com/paullewisjohnston' target='_blank'>
                  <Icon name='github' size='big' style={{color:'black'}}/>
                </List.Item>
                <List.Item as='a' href="mailto:pjohnston36@qub.ac.uk">
                  <Icon name='mail' size='big' style={{color:'black'}}/>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider section />
        <Image centered size='mini' src={Logo} />
      </Container>
    </Segment>
  )
}

export default Footer;
