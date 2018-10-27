import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShopWizardStep1 from './ShopWizardStep1';
import ShopWizardStep2 from './ShopWizardStep2';
import ShopWizardStep3 from './ShopWizardStep3';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Project Information', 'Upload Files', 'Share'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ShopWizardStep1></ShopWizardStep1>;
    case 1:
      return <ShopWizardStep2></ShopWizardStep2>;
    case 2:
      return <ShopWizardStep3></ShopWizardStep3>;
    default:
      return 'Uknown stepIndex';
  }
}

class ShopWizard extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    const WizardContainerStyle = {
        width: '100%',
        marginBottom: '100px'
    }

    const ButtonContainerStyle= {
        width: '46%',
        marginTop: '50px'
    }

    const ButtonBackStyle = {
        display:'block',
        float: 'left',
        marginLeft: '50px'
    }

    const ButtonNextStyle = {
        display:'block',
        float: 'right',
    }

    return (
      <div className={classes.root} style={WizardContainerStyle}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div className="row text-center">
                <div className="cold-md-6 offset-md-3" style={ButtonContainerStyle}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                        style={ButtonBackStyle}
                    >
                        Back
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleNext} style={ButtonNextStyle}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ShopWizard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ShopWizard);