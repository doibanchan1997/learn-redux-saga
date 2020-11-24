import { withStyles } from '@material-ui/styles';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIcon from './../../assets/images/loading.gif';
import styles from './styles';
const GlobalLoading = (props) => {
    const {classes, showLoading} = props;
    let xhtml = null;
    if(showLoading){
        xhtml = (
            <div className={classes.globalLoading}>
                <img src={LoadingIcon} className={classes.icon}/>
            </div>
        );
    }
    return xhtml;
};

const mapStateToProps = (state, ownProps) => {
    return {
        showLoading : state.ui.showLoading
    };
};
const withConnect = connect(mapStateToProps, null);
export default compose(
    withStyles(styles), 
    withConnect,
)(GlobalLoading);