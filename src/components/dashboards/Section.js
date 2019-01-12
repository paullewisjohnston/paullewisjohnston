import React from 'react';
import {Divider, Grid, Segment, Container} from 'semantic-ui-react'
import Chart from '../Chart';
import Border from '../Border';

const Section = (props) => {
  return(
    <div>
      <Segment basic vertical style={{background:props.color}}>
        <Divider horizontal>Project One</Divider>
      </Segment>
      <Segment padded basic vertical style={{background:props.color, padding: '4em 0em'}}>
        <Container>
          <Grid columns={props.columns} stackable>
              <Grid.Column>
                <Chart type='line'/>
              </Grid.Column>
              <Grid.Column>
                <Chart type='pie'/>
              </Grid.Column>
            </Grid>
          </Container>
      </Segment>
      <Border type='curved' scrollHeaderHeight={100} viewBoxHeight={20} background={props.color} fill={props.colorNext} />
    </div>
    );
  }
export default Section
