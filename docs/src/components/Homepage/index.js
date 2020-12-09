import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import './style.css';
// import Header from '../Header';
import Heading from './Heading';
import Demo from './Demo';
// import Platforms from './Platforms';
import MainLinks from './MainLinks';
// import Featured from './Featured';
import UsedBy from './UsedBy';
import Footer from '../Footer';

const Homepage = ({ users }) => (
  <div>
    <Helmet title="Wingsuit - Designsystem you'll love to use" />
    {/* <Header currentSection="home" /> */}
    <Heading />
    <div style={{ width: '100%' }} className="overflow-hidden">
      <div className="container-fluid p-0">
        <div
          className="row no-gutters relative"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div className="col-12 col-sm-6 col-xl-9 text-center">
            <h1 className="sb-tagline">

                Build bulletproof <br />
                Twig Components in Storybook <br />
              You will ♥ using️ it!
            </h1>
            <div>
              <div className="bg-green-100 pt-5 pb-5">
                <h2 className="font-weight-bold">Get started</h2>
                <div role="group" aria-label="Basic example">
                  <a
                    href="https://master--5fd0183aaf074f00213f79cc.chromatic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold"
                    style={{ maxWidth: 300, margin: 'auto' }}
                  >
                    Online Demo
                  </a>
                  <a
                    href="/basics/introduction"
                    className="mr-2 mb-2 btn btn-lg bg-green-500 font-weight-bold"
                    style={{ maxWidth: 300, margin: 'auto' }}
                  >
                    Quickstart guide
                  </a>
                  <a
                    href="/drupal/ui_patterns"
                    className="mb-2 btn btn-lg bg-green-500 font-weight-bold"
                    style={{ maxWidth: 300, margin: 'auto' }}
                  >
                    Drupal Kickstarter
                  </a>
                </div>
              </div>
              <div className="bg-blue-100 d-block d-sm-none">
                <div className="circle--mobile bg-red-100" />
              </div>
            </div>
            <UsedBy users={users} />
          </div>
          <div className="column col-6 col-xl-3 d-none d-sm-block bg-blue-100">
            <div className="circle bg-red-100" />
          </div>
        </div>
      </div>

      {/* <Platforms /> */}
      <Demo />
      <MainLinks />

      {/* <Featured featuredStorybooks={featuredStorybooks} /> */}
      <Footer />
    </div>
  </div>
);

Homepage.propTypes = {
  featuredStorybooks: PropTypes.array, // eslint-disable-line
  users: PropTypes.array, // eslint-disable-line
};

export default Homepage;
