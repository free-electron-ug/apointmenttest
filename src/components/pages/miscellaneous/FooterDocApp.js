import React from 'react';
import PropTypes from 'prop-types';
import createMarkup from 'helpers/createMarkup';
import Section from 'components/common/Section';
import IconGroup from 'components/common/icon/IconGroup';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuList1, menuList2 } from 'data/footer';
import { bgWhiteIcons } from 'data/socialIcons';

import { I18n } from '@aws-amplify/core';

const FooterTitle = ({ children }) => (
  <h5 className="text-uppercase text-white opacity-85 mb-3">{children}</h5>
);

FooterTitle.propTypes = { children: PropTypes.node.isRequired };

const FooterList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map(({ title, to }, index) => (
      <li className="mb-1" key={index}>
        <Link className="text-600" to={to}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

FooterList.propTypes = { list: PropTypes.array.isRequired };

const FooterBlogList = ({ list }) => (
  <ul className="list-unstyled">
    {list.map((blog, index) => (
      <li key={index}>
        <h5 className="fs-0 mb-0">
          <Link className="text-600" to={blog.to}>
            {blog.title}
          </Link>
        </h5>
        <p className="text-600 opacity-50">
          {blog.date} &bull; {blog.read} read{' '}
          {blog.star && (
            <span dangerouslySetInnerHTML={createMarkup('&starf;')} />
          )}
        </p>
      </li>
    ))}
  </ul>
);

FooterBlogList.propTypes = { list: PropTypes.array.isRequired };

const FooterDocApp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Section className="pt-8 pb-4 light">
        <div
          className="position-absolute btn-back-to-top cursor-pointer "
          onClick={scrollToTop}
        >
          <FontAwesomeIcon
            icon="chevron-up"
            transform="rotate-45"
            className="text-600"
          />
        </div>
        <Row>
          <Col lg={4}>
            <FooterTitle>Free Electron</FooterTitle>
            <p className="text-600 text-justify">{I18n.get('lead')}</p>
            <IconGroup className="mt-4" icons={bgWhiteIcons} />
          </Col>
          <Col className="ps-lg-6 ps-xl-8">
            <Row className="mt-5 mt-lg-0">
              <Col xs={6} md={6}>
                <FooterTitle>{I18n.get('Company')}</FooterTitle>
                <FooterList list={menuList1} />
              </Col>
              <Col xs={6} md={6}>
                <FooterTitle>Product</FooterTitle>
                <FooterList list={menuList2} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default FooterDocApp;