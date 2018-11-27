import React from 'react';

import Layout from '../layouts/Main';
import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';

/**
 * Contact Page Component
 */
const ContactPage = () => {
  return (
    <Layout>
      <PageTitle title="Contact" />
      <Contact>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque ratione
        inventore repudiandae aperiam enim fugit ad, asperiores molestias eum
        magni in doloribus magnam, voluptatibus at consectetur natus
        reprehenderit? Tempore, cumque!
      </Contact>
    </Layout>
  );
};

export default ContactPage;
