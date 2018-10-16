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
                    <FormLabel component="legend">Select Specialities</FormLabel>
                    <FormGroup>
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="2D Animation" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="3D Animation" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="3D Modeling" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Account Management" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Advertising" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Animation" />
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Apparel" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Architecture" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Art Direction" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Branding &amp; Corporate Identity" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="CGI" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Commercial &amp; Industrial Products" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Communication Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Compositing" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Concept Art" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Consumer Electronics" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Content Strategy" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Copywriting &amp; Editing" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Costume Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Creative Direction" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Design Management" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Design Research" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Desktop &amp; Office Products" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="DIY" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="E-Commerce" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Engineering" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Entertainment" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Event Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Exhibit Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Fabrication" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Fashion Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Game Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Graphic Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Illustration" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Information Architecture" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Interior Design" />                    
                        <FormControlLabel style={CheckboxStyle} control={ <Checkbox color="primary" value="checkedA" /> }label="Internet Applications" />                    
                    </FormGroup>    
                </div>
            </div>
        );
    
    }    
};

export default PeopleFilter;

