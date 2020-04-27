import React from 'react'
import { Layout, Row, Col } from "antd"
import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/page-layout.css'

const PageLayout = ({ children, title, active, header, withPadding = true, fullscreen = false, background = 'white' }) => {
    return (
        <Layout>
            <Layout.Header style={{ background: 'white' }}>
                <Header active={active} />
            </Layout.Header>
            <Layout.Content>

                <div>
                    {header}
                </div>
                <Row style={{ marginTop: 40 }}>
                    <Col span={fullscreen ? 0 : null} xs={0} md={2} lg={4}></Col>
                    <Col span={fullscreen ? 24 : null} xs={fullscreen ? null : 24} md={fullscreen ? null : 20} lg={fullscreen ? null : 16}>
                        <div style={{ background: background, marginBottom: 40, minHeight: 280, paddingTop: withPadding ? 40 : 0, paddingBottom: 20, paddingLeft: withPadding ? 40 : 0, paddingRight: withPadding ? 40 : 0 }}>
                            {title && <h1 style={{marginTop: 0, paddingTop: 0}}>{title}</h1>}
                            {children}
                        </div>
                    </Col>
                </Row>
            </Layout.Content>
            <Layout.Footer style={{ background: '#101010' }}>
                <Footer />
            </Layout.Footer>
        </Layout>
    )
}

export default PageLayout