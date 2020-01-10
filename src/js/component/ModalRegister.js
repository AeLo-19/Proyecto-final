import React from "react";
import PropTypes from "prop-types";

export const ModalRegister = props => {
	return (
		<div className={props.show ? "bg-dark" : "modal invisible"} tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>{"Hola " + props.info.name + ", has sido regustrado efectivamente."}</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Entrar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalRegister.propTypes = {
	info: PropTypes.object,
	show: PropTypes.bool
};
