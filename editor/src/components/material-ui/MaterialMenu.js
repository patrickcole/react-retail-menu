import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MaterialProduct from './MaterialProduct';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function MaterialMenu(props) {

  const { classes } = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{ props.title }</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        

      { 
        props.products.map( (product, index) => {
 
          return (
            <MaterialProduct 
              key={product.id}
              id={product.id}
              title={product.title} 
              description={product.description} 
              price={product.price}
            />
          )
        })
      }

      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

MaterialMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialMenu);