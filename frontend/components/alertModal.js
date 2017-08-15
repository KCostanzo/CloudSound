import React from 'react';
import Modal from 'react-modal';

export default class ToneAlertModal extends React.component {
	constructor(props)	{
		super(props);

		this.state = {
			modalOpen: false,
		}
	}

	componentDidMount () {
		this.setState({
			modalOpen: true
		});
	}

	closeAlert() {
		this.setState({
			modalOpen: false
		});
	}

	render() {
		return (
			<div className="alertDiv">
				<modal className="alertModal" isOpen={this.state.modalOpen} onRequestClose={this.closeAlert}>
					<h1 className="alertHeader"> Hello!</h1>
					<a className="alertText">Welcome to CloudSound, where we specialize in bringing you music tuned to 432 and 528 hz. Please enjoy the soothing sounds of these naturally pure and phisiologically beneficial tones.</a>
				</modal>
			</div>
			)
	}
}