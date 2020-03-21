import React, { Component } from "react";
import Layout from "../components/Layout";
import { Input, Form, Button, Table } from "semantic-ui-react";
import factory from "../ethereum/factory";

class TestP extends Component {
  render() {
    return (
      <Layout>
        <Table basic="very">
          <Table.Body>
            <Table.Row>
              <Table.Cell>이름</Table.Cell>
              <Table.Cell>
                <input
                  class="common-ip-type-1"
                  type="text"
                  id="sendrCustNm"
                  name="sendrCustNm"
                  maxlength="30"
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>비밀번호</Table.Cell>
              <Table.Cell>
                <input
                  class="common-ip-type-1"
                  type="password"
                  id="certiNo"
                  name="certiNo"
                  maxlength="30"
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default TestP;
