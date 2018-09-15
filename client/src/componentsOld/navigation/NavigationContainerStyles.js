import CustomTheme from '../../CustomTheme';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import SvgIconSearch from 'material-ui/svg-icons/action/search';
import SvgIconPublic from 'material-ui/svg-icons/social/public';

const styles = {
  container: {
    overflow: 'auto',
    whiteSpace: 'nowrap',
  },
  containerShelf: {
    padding: '0 64px'
  },
  content: {
    display: 'inline-block',
    position: 'fixed'
  },
  stylesNav:{
    div: {
      textAlign: 'center',
      padding: 0,
      background: CustomTheme.palette.navColor,
    },
    container: {
      height:'100vh',
      width: 64,
      background: CustomTheme.palette.navColor,
    },
    navIcons:
    {
      menu1:{
        color:CustomTheme.palette.alternateTextColor,
        icon:SvgIconFace
      },
      menu2:{
        color:CustomTheme.palette.alternateTextColor,
        icon:SvgIconSearch
      },
      nav1:{
        color:CustomTheme.palette.alternateTextColor,
        icon:SvgIconPublic
      }
    }
  },
  stylesSearch:{
    div: {
      fontSize:30,
      textAlign: 'center',
      padding: 0,
      background: CustomTheme.palette.navColor,
      color: CustomTheme.palette.alternateTextColor,
    },
    container: {
      color: CustomTheme.palette.alternateTextColor,
      height:'100vh',
      width:300,
      background: CustomTheme.palette.navColor,
    },
    checkbox: {
      color: CustomTheme.palette.alternateTextColor,
      textAlign: 'left',
      fontSize:20,
      padding:60
    },
  },
  stylesUserProfile:{
    div: {
      textAlign: 'center',
      padding: 0,
      background: CustomTheme.palette.navColor,
    },
    container: {
      height:'100vh',
      width:300,
      fontSize:30,
      background: CustomTheme.palette.navColor,
      color: CustomTheme.palette.alternateTextColor,
      // backgroundImage: `url(${paulImage})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center center',
      // backgroundRepeat: 'no-repeat',
    }
  }
};

export default styles;
