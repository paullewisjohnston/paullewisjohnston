import React from 'react';
import Page from './pageComponents/Page';
import CustomTheme from '../../CustomTheme';
import styles from './PageContainerStyles';

const PageContainer = (props) => {
    return (
       <div style={{padding:props.padding}}>
         <div style={styles.container}>
        {props.data.map(page => ([
          <div key={page._links.self.href}>
              {(true  &&
                <div style={{width:page.width, margin: '10px 30px'}}>
                <Page page={page}/>
                </div>
                }
          </div>
          ]))}
        </div>
      </div>
    );
}
export default PageContainer;
