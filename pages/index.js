import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
		</div>
	)
}
