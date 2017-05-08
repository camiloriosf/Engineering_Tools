import React from 'react';
import Head from 'next/head';
import Header from './Header';
import UserHeader from './UserHeader';
import Footer from './Footer';

export default ({ children, title = 'E-SaaS', pathname, type = 'main' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.4.0/grommet.min.css" rel="stylesheet" type="text/css" />
      <style>{`
                body { 
                    font-family: 'Roboto', sans-serif;
                }
                `}
      </style>
    </Head>

    {
      type === 'main'
    ? (
      <div>
        <Header pathname={pathname} />
        <div style={{ marginTop: 100 }}>
          {children}
        </div>
        <Footer pathname={pathname} />
      </div>
    ) : (
      <div>
        <UserHeader pathname={pathname} />
        <div style={{ marginTop: 20 }}>
          {children}
        </div>
        <Footer pathname={pathname} />
      </div>
    )
    }
  </div>
);
