import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'
import styles from '../styles/pages/common.module.css'

const Detailed = () => (
	<>
		<Head>
			<title>Detailed page</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Header />
		<Row className={styles['common-mail']} type="flex" justify="center">
			<Col className={styles['common-left']} xs={24} sm={24} md={16} lg={18} xl={14} >
				左侧内容
			</Col>
			<Col className={styles['common-right']} xs={0} sm={0} md={7} lg={5} xl={4} >
				右侧内容
			</Col>
		</Row>
		
	</>
)

export default Detailed

