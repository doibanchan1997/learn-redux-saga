import {Modal} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Clear";
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, compose } from "redux";
import * as modalActions from "./../../actions/modal.js";
import styles from "./styles.js";
const CommonModal = (props) => {
  const { component, open, classes, modalActionCreator, title } = props;
  const { hideModal } = modalActionCreator;
  return (
    <Modal open={open} onClose={hideModal}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <span className={classes.title}>{title}</span>
          <CloseIcon className={classes.icon} onClick={hideModal} />
        </div>
        <div className={classes.content}>{component}</div>
      </div>
    </Modal>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActionCreator: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(CommonModal);
