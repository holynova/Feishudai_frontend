// import React from 'react';
import React, { Component } from 'react';
import { Form, Tabs, Input, Icon, Button } from 'antd';
import { connect } from 'dva';
import styles from './Login.css';
// import './Login.css';

const TabPane = Tabs.TabPane;
const FieldItem = Form.Item;


class Login extends Component {
  render() {
    const getFieldDecorator = this.props.form.getFieldDecorator;
    return (
      <div className={styles.login}>
        <Form>
          <FieldItem >
            {
              getFieldDecorator('username', {})(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名"></Input>)
            }
          </FieldItem>
          <FieldItem >
            {
              getFieldDecorator('password', {})(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder="密码"></Input>)
            }
          </FieldItem>
          <Button
            className={styles.btn}
            htmlType='submit'
            type='primary'>登陆</Button>
          <a href="/#/signin">注册</a>

        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Form.create()(Login));

// function Login() {
//   return (
//     <div className={styles.normal}>
//     <Form>
//       this
//     </Form>

//     </div>
//   );
// }

function mapStateToProps() {
  return {};
}



// export default connect(mapStateToProps)(Login);
