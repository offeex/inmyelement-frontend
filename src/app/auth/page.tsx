'use client'

import './styles.scss'
import Image from 'next/image'
import LoginButton from '@/shared/ui/login-button/LoginButton'
import { useCallback } from 'react'
import { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { Particles } from 'react-particles'

const ParticlesBG = () => {
	const particlesInit = useCallback(
		async (engine: Engine) => await loadSlim(engine),
		[]
	)
	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={{
				fpsLimit: 60,
				fullScreen: { enable: true },
				particles: {
					color: { value: ['#11EE92', '#F90B2B'] },
					move: {
						direction: 'none',
						enable: true,
						speed: { min: 0.3, max: 0.9 }
					},
					number: { value: 50 },
					opacity: { value: 0.3 },
					shape: { type: 'triangle' },
					size: { value: { min: 1, max: 4 } }
				},
				detectRetina: true
			}}
		/>
	)
}

export default function Page() {
	return (
		<>
			<ParticlesBG />
			<div className='bg line' />
			<div className='bg img' />
			<Image
				className='nerd'
				width={0}
				height={0}
				sizes='100vw'
				src='/nerd-face.png'
				alt=''
			/>

			<main>
				<div className='heading'>
					<Image width={36} height={36} src='/logo.svg' alt='' />
					<h2 className='name'>InMyElement</h2>
				</div>

				<div className='login-container'>
					<h2>Log into your account</h2>
					<LoginButton
						provider='Discord'
						icon='discord'
						accent={false}
					/>
					<LoginButton
						provider='GitHub'
						icon='github'
						accent={true}
					/>
				</div>
			</main>
		</>
	)
}
