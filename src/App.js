import React from "react";

// people component
import People from "./components/People";

import { Layout } from "antd";

import copyright from "./Assets/copyright.svg";

const { Header, Footer, Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Header style={{ color: "white" }}>React Redux With Hooks</Header>
      <Content>
        <People />
      </Content>
      <Footer>
        <div style={{ bottom: "40", marginLeft: "40%" }}>
          <a
            href="http://www.muguku.co.ke/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3>
              www.muguku.co.ke{"\u00A0"}
              <img src={copyright} alt="copyright" height={13} width={13} />
              {new Date().getFullYear()},{"\u00A0"}All rights reserved{" "}
            </h3>
          </a>
        </div>
      </Footer>
    </Layout>
  );
}
