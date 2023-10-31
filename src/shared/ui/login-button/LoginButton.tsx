import React from 'react'
import Image from 'next/image'
import buttons from '@/shared/ui/styles/buttons.module.scss'

type Props = {
	provider: string
	icon: string
	accent: boolean
}

export default function LoginButton(props: Props) {
	return (
		<div
			role='button'
			className={props.accent ? buttons.accent : buttons.regular}
		>
			{props.accent && <div className={buttons.back} />}
			<Image
				className='icon'
				src={`/icons/${props.icon}${
					!props.accent ? '-white' : ''
				}.svg`}
				width={12}
				height={12}
				alt=''
			/>
			<span>Continue with {props.provider}</span>
		</div>
	)
}
