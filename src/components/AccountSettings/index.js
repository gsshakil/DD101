import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: '100%',
        maxWidth: '100%',
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: '100%'
    },
    chip: {
        margin: theme.spacing.unit / 4,
        minWidth: '100%'        
    },
  });

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
    };

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  class AccountSettings extends React.Component {
    state = {
      value: 0,
      name: [],
    };
  
    handleChange = (event, value) => {
      this.setState({ value, name: event.target.value });
    };
  
    render() {
      const { classes, theme } = this.props;
      const { value } = this.state;
  
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              scrollable
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="General" icon={<PhoneIcon />} />
              <Tab label="Notification" icon={<FavoriteIcon />} />
              <Tab label="Email Notification" icon={<PersonPinIcon />} />
              <Tab label="Security" icon={<HelpIcon />} />
              <Tab label="Privacy" icon={<ShoppingBasket />} />
              <Tab label="Item Six" icon={<ThumbDown />} />
              <Tab label="Item Seven" icon={<ThumbUp />} />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 1 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 2 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 3 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 4 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 5 && <TabContainer>
            <div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
          </TabContainer>}
          {value === 6 && <TabContainer><div className="col-md-6 offset-md-3">
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
                <TextField
                    id="outlined-email-input"
                    label="Input"
                    className={classes.textField}
                    type="text"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="outlined"
                    />
            </div>
        </TabContainer>}
        </div>
      );
    }
  }
  
  AccountSettings.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AccountSettings);

