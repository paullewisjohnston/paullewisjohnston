import React from 'react';
import {Divider, Grid, Segment, Container} from 'semantic-ui-react'
import Chart from '../Chart';

const Section = (props) => {
  return(
    <div>
      <Segment basic vertical style={{background:props.color}}>
        <Divider inverted horizontal>Project One</Divider>
      </Segment>
      <Segment padded basic vertical style={{background:props.color, padding: '4em 0em'}}>
        <Container width={600}>
          <Grid columns={props.columns} stackable>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Chart type='stacked-area'/>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <Chart type='stacked-area'/>
              </Grid.Column>
            </Grid>
          </Container>
      </Segment>
    </div>
    );
  }
export default Section
