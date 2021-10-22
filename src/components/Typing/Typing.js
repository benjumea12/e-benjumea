import React, { useEffect, useState } from "react"
// Style
import { Main } from "./Typing.styled"

const Typing = (props) => {
	const { text } = props

	const [index, setIndex] = useState(0)
	const [textTyping, seTextTyping] = useState("")

	const typeWriter = () => {
		let vel = 100
		if (index === 0) { vel = 2000 }
		setTimeout(() => {
			if (index <= text.length) {
				seTextTyping(textTyping + text.charAt(index))
				setIndex(index + 1)
			}
		}, vel)
	}

	useEffect(() => {
		typeWriter()
	}, [index])

	return (
		<Main>
			<h1 className="title">{textTyping}<div className="cursor"></div></h1>
		</Main>
	)
}

export default Typing