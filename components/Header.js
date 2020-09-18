import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, MessageOutlined, SmileOutlined } from '@ant-design/icons'
import styles from '../styles/components/header.module.css'
import servicePath from '../config/apiUrl'
const Header = () => {
	const [navList, setNavList] = useState([])
	useEffect(() => {
		const getNavData = async () => {
			await axios(servicePath.getTypeInfo).then((res) => {
				setNavList(res.data.data)
			})
		};
		getNavData()
	}, [])
	const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

	return (
		<div className={styles.header}>
			<Row type="flex" justify="center">
				<Col xs={24} sm={24} md={10} lg={15} xl={12} >
					<span className={styles['header-logo']}>幽灵自醒</span>
					<span className={styles['header-text']}>前端开发---专注PC重构</span>
				</Col>
				<Col xs={0} sm={0} md={14} lg={8} xl={6} >
					<Menu mode="horizontal"  onClick={handleClick} >
						<Menu.Item key='0'>
							<HomeOutlined />
							首页
						</Menu.Item>
						{ navList.map(item=>{
							return (
								<Menu.Item key={item.id}>
									{ item.icon === 'youtube' && <YoutubeOutlined /> }
									{ item.icon === 'message' && <MessageOutlined /> }
									{ item.icon === 'smile' && <SmileOutlined /> }
									{item.typeName}
								</Menu.Item>
							)
						}) }
					</Menu>
				</Col>
			</Row>
		</div>
	)
}

export default Header;
