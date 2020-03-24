import React, { Component } from "react";
import Layout from "../components/Layout";
import { Input, Form, Button, Table, Dropdown, Label, Icon } from "semantic-ui-react";
import factory from "../ethereum/factory";

class SignUp extends Component {
  render() {
    return (
      <Layout>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">회원가입</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>아이디</label>
                    <Input
                      icon='user' iconPosition='left'
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input
                      icon='lock'
                      iconPosition='left'
                      type='password'
                      style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input style={{ minWidth: "30em" }} />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input style={{ maxWidth: "5em" }} />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input
                      icon='at'
                      iconPosition='left'
                      placeholder='Email'
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Button attached='bottom'>접수 완료</Button>
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>

          </Table.Body>

        </Table>

      </Layout>
    );
  }
}

export default SignUp;
