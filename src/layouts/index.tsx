import React from 'react';
import { Layout, Button, Avatar, Icon } from 'antd';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;

const BasicLayout: React.FC = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <div className={styles.logo}>Ninghao</div>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Button type="link">
            <Icon type="left" />
            Go back
          </Button>
        </Header>
        <Content>{props.children}</Content>
        <Footer>
          <Avatar className={styles.avatar}>N</Avatar>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
