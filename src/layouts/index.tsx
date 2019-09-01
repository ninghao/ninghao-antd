import React from 'react';
import { Layout, Button, Avatar, Icon, Menu } from 'antd';
import styles from './index.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light">
        <div className={styles.logo}>Ninghao</div>
        <Menu mode="inline">
          <Menu.Item>
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <SubMenu
            title={
              <span>
                <Icon type="appstore" />
                <span>Discover</span>
              </span>
            }
          >
            <Menu.Item>Popular</Menu.Item>
            <Menu.Item>Fresh</Menu.Item>
          </SubMenu>
        </Menu>
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
