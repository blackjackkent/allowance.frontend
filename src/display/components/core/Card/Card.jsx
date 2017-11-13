import React, { Component } from 'react';


export class Card extends Component {
	render() {
		const {
			plain,
			hCenter,
			title,
			category,
			ctAllIcons
		}
		return (
			<div className={"card" + (plain ? " card-plain" : "")}>
				<div className={"header"
					+ (hCenter ? " text-center" : "")}>
					<h4 className="title">{title}</h4>
					<p className="category">{category}</p>
				</div>
				<div className={"content"
					+ (ctAllIcons ? " all-icons" : "")
					+ (this.props.ctTableFullWidth ? " table-full-width" : "")
					+ (this.props.ctTableResponsive ? " table-responsive" : "")
					+ (this.props.ctTableUpgrade ? " table-upgrade" : "")}>

					{this.props.content}

					<div className="footer">
						{this.props.legend}
						{this.props.stats != null ? <hr /> : ""}
						<div className="stats">
							<i className={this.props.statsIcon}></i> {this.props.stats}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
