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

class PeopleFilter extends React.Component  {

    render (){
        let TextFieldStyle = {
            width: '100%',
        };
        
        let CheckboxStyle = {
            marginBottom:'-10px',
        };
        
        return(

            <div className="people-filter">

                <TextField style={TextFieldStyle} label="Enter Keywords" margin="normal"/>
                <TextField style={TextFieldStyle} label="Enter Location" margin="normal"/>
                <TextField style={TextFieldStyle} label="Enter Skills" margin="normal"/>
                
                <div className="occupation-filter">
                    <FormLabel component="legend">Select Occupation</FormLabel>
                    <FormGroup>
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Pizza" />                    
                    </FormGroup>    
                </div>
            </div>
        );
    
    }    
};

export default PeopleFilter;

