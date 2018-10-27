import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TestWizardStep1 from './TestWizardStep1';
import TestWizardStep2 from './TestWizardStep2';
import TestWizardStep3 from './TestWizardStep3';

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
  return ['Job Information', 'Upload Files', 'Share'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <TestWizardStep1></TestWizardStep1>;
    case 1:
      return <TestWizardStep2></TestWizardStep2>;
    case 2:
      return <TestWizardStep3></TestWizardStep3>;
    default:
      return 'Uknown stepIndex';
  }
}

class TestWizard extends React.Component {
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

TestWizard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TestWizard);