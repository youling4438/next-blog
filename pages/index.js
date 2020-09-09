import Head from 'next/head'
import {Row, Col} from "antd"
import Header from '../components/Header'
import styles from '../styles/pages/common.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Row className={styles['common-main']} type="flex" justify="center">
				<Col className={styles['common-left']} xs={24} sm={24} md={16} lg={18} xl={14} >
					左侧布局
				</Col>
				<Col className={styles['common-right']} xs={0} sm={0} md={7} lg={5} xl={4} >
					右侧布局
				</Col>
			</Row>
		</div>
	)
}
