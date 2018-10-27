import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class InstructorWizardStep2 extends React.Component {
    
    render(){
        const TextFieldStyele={
            width:'100%'
        };

        const HeadingStyle={
            margin: '50px 0',
            padding: '10px 0',
            borderBottom: '3px solid #bf1e2d'
        }

        return(
            <div className="container">      
                <div className="wizard-content">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <h1 style={HeadingStyle}>PLEASE PROVIDE SOME BASIC INFORMATION OF THE COURSE</h1>
                            <FormGroup>
                                <div className="row">
                                    <div className="col-md-6">
                                        <TextField style={TextFieldStyele} label="Enter First Name" margin="normal"/>                                    
                                    </div>
                                    <div className="col-md-6">
                                        <TextField style={TextFieldStyele} label="Enter Last Name" margin="normal"/>                                    
                                    </div>
                                </div>
                                <TextField style={TextFieldStyele} label="Enter Occupation" margin="normal"/>                                    
                                <TextField style={TextFieldStyele} label="Enter Skills" margin="normal"/>                                    
                                <TextField style={TextFieldStyele} label="Enter Bio" margin="normal"/>                                    
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default InstructorWizardStep2;