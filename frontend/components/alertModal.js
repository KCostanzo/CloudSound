import React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {modalViewed} from '../actions/modalViewAction';

class ToneAlertModal extends React.Component {
	constructor(props)	{
		super(props);

		this.state = {
			modalOpen: true,
		}
		// console.log(this.state);
	}

	closeAlert() {
		// console.log("closelaertfn");			
		this.setState({
			modalOpen: false
		});

		this.props.modalViewed();
	}

	render() {
		// console.log(this.props.modalBool);
		if (this.props.modalBool) {
			return <div className="emptyAlertDiv" />
		} else {
			return (
				<div className="alertDiv" onClick={this.closeAlert}>
					<Modal className="alertModal" isOpen={this.state.modalOpen} onRequestClose={this.closeAlert.bind(this)} >
						<h1 className="alertHeader"> Hello!</h1>
						<a className="alertText">Welcome to CloudSound, where we specialize in bringing you music tuned to 432 and 528 hz </a>
					</Modal>
				</div>
			)
		}
	}
}



const mapStateToProps = state => ({
	modalBool: state.modalView.modalBool
})

const mapDispatchToProps = dispatch => ({
	modalViewed: () => dispatch(modalViewed())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToneAlertModal);