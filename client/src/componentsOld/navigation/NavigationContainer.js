import React from 'react';
import Nav from './navigationComponents/Nav';
import UserProfile from './navigationComponents/UserProfile';
import Search from './navigationComponents/Search';
import paulImage from '../../images/paul.jpg';
import styles from './NavigationContainerStyles'

const NavigationContainer = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Nav styles={styles.stylesNav}
          key={'nav'}
          name={'nav'}
          tagline={'nav'}
          released={'nav'}
          onNavItem={props.onNavItem}
          onMenuItem={props.onMenuItem}
        />
      </div>
      <div style={styles.containerShelf}>
        <div style={styles.content}>
          {props.menuItem === '1' &&
          <div style={styles.content}>
            <UserProfile
              styles={styles.stylesUserProfile}
              profilePic={paulImage}
              key={'Profile'}
              name={'Paul Lewis Johnston'}
              tagline={'Profile'}
              released={'Profile'}
              removePage={'Profile'}
              />
          </div>
          }
        </div>
        <div style={styles.content}>
          {props.menuItem === '2' &&
          <Search
          styles={styles.stylesSearch}
          key={'Search'}
          name={'Search'}
          tagline={'Search'}
          released={'Search'}
          removePage={'Search'}
          onFilterItem={props.onFilterItem}
          filterItem={props.filterItem}
          onSearchTextChange={props.onSearchTextChange}
          />
          }
        </div>
      </div>
    </div>
  );
}
export default NavigationContainer;
