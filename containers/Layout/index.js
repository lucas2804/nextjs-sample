import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../styles/sizes';
import makeStyles from '@material-ui/core/styles/makeStyles';

const styles = theme => ({
  appFrame: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(rgba(255, 255, 255, 0), rgb(243, 243, 243) 540px)',
  },
  toolbar: {
    minHeight: theme.mixins.toolbar.minHeight,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'scroll',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
    },
  },
  container: {
    display: 'flex',
    minHeight: '90vh',
    justifyContent: 'center',
    padding: '20px 20px 50px',
  },
});

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const classes = makeStyles(styles);
    return (
      <div className={classes.appFrame}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.container}>{children}</div>
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  breadCrumb: PropTypes.array,
};

Layout.contextTypes = {
  store: PropTypes.object,
};

export default withStyles(styles)(Layout);
