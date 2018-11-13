import React from 'react';
const styles = {
  sectionContent: {
    height:'50vh',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    justifyContent: 'space-evenly'
  },
  content: {
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-evenly',
    width:'70%',
    color:'lighten(blue,50%)'
  },
  contentTitle: {
    fontSize:40,
  },
  contentDesc: {
    fontSize:20,
    color:'lighten(blue,50%)'
  },
  contentImage: {
    verticalAlign: 'middle',
    width: '200px',
    height: '200px',
    borderRadius: '50%'
  }
};
const Job = (props) => (
    <section key={props.item._id} style={{...styles.section, background:props.item.color}}>
      <div style={styles.sectionContent}>
        <div style={styles.content}>
          <p style={styles.contentTitle}>{props.item.title}</p>
          <p style={styles.contentDesc}>{props.item.desc}</p>
        </div>
          <img style={styles.contentImage} src ={props.item.image} alt="logo"/>
      </div>
    </section>
);

export default Job
