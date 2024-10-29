import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import Section from './Section';

function App(props) {
  const pages = _.get(props.data, 'pages', []);
  const header = () => {
    const headerData = _.get(props.data, 'header');
    if (!headerData) return;

    return <Header {...headerData} />;
  };
  return pages.map((page, idx) => {
    const mainColumnSections = _.get(page, 'mainColumn.sections', []);
    const sidebarSections = _.get(page, 'sidebar.sections', []);
    return (
      <section key={idx} className="sheet">
        {page.showHeader && header()}
        <Container fluid>
          <Row>
            <Col xs={_.get(page, 'hasSidebar') ? 8 : 12}>
              {mainColumnSections.map((section, idx) => {
                return <Section {...section} key={idx} />;
              })}
            </Col>
            {_.get(page, 'hasSidebar') && (
              <Col xs={4}>
                {sidebarSections.map((section, idx) => {
                  return <Section {...section} key={idx} />;
                })}
              </Col>
            )}
          </Row>
        </Container>
      </section>
    );
  });
}

export default App;
