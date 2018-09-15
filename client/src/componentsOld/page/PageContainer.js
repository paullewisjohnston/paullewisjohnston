import React from 'react';
import Page from './pageComponents/Page';
import CustomTheme from '../../CustomTheme';
import styles from './PageContainerStyles';

const PageContainer = (props) => {
    return (
       <div style={{padding:props.padding}}>
         <div style={styles.container}>
        {props.data.map(page => ([
          <div key={page._links.self.href}
            style={{background: CustomTheme.palette[page.background], color: CustomTheme.palette[page.color],
                    fontFamily: CustomTheme.fontFamily, fontSize:40,overflow:'hidden', display:'inline-block',
                    height:'100vh', whiteSpace:'normal', textAlign: 'center'}}>
              {(page.field1.toLowerCase().indexOf(props.searchText.toString().toLowerCase()) !== -1 ||
                page.field2.toLowerCase().indexOf(props.searchText.toString().toLowerCase()) !== -1) &&
                (props.filterItem.indexOf(page.type) > -1 || props.filterItem.length === 0)  &&
                <div style={{width:page.width, margin: '10px 30px'}}>
                <Page
                  style={styles.country}//Need to change to styles[page.type] and get working
                  field1={page.field1}
                  field2={page.field2}
                  field3={page.field3}
                  field4={page.field4}
                  />
                  </div>
                }
          </div>
          ]))}
        </div>
      </div>
    );
}
export default PageContainer;
