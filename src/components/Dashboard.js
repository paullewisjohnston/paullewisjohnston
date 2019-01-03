import React from 'react';
import {Divider, Grid, Segment, Container} from 'semantic-ui-react'
import StackedArea from './charts/recharts/StackedArea'
import PieChart from './charts/reactchart2/PieChart'
import LineGraph from './charts/reactchart2/LineGraph'

const SectionContainer = (props) => {
  return(
    <div style={{background:'#f7f7f7'}}>
      <Segment basic vertical>
        <Divider horizontal>Project One</Divider>
      </Segment>
      <Segment padded basic vertical style={{background:'white', padding: '4em 0em'}}>
        <Container>
          <Grid stackable centered>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <LineGraph/>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <PieChart/>
              </Grid.Column>
            </Grid>
          </Container>
      </Segment>
      <Segment basic vertical>
        <Divider horizontal>Project Two</Divider>
      </Segment>
      <Segment padded basic vertical style={{background:'white', padding: '4em 0em'}}>
        <Container>
          <Grid stackable centered>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <StackedArea/>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <PieChart/>
              </Grid.Column>
            </Grid>
          </Container>
      </Segment>
    </div>
    );
  }
export default SectionContainer
