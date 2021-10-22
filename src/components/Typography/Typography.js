import React from "react"
import { H1, H2, H3, P } from "./Typography.styled.js"

const Typography = (props) => {
	const { text, variant } = props

	switch (variant) {
		case "h1":
			return (
				<H1>
					<div className="border"></div>
					<h1>{text}</h1>
				</H1>
			)
		case "h2":
			return (
				<H2>
					<div className="border"></div>
					<h2>{text}</h2>
				</H2>
			)
		case "H3":
			return (<H3>{text}</H3>)
		case "p":
			return (<P delay={props.delay ? props.delay : 1}>{text}</P>)
		default:
			return (<H1>{text}</H1>)
	}
}

export default Typography