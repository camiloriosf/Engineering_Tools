import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default ({ children, title = 'This is the default title', pathname }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        
        <Header pathname={pathname} />
        <div style={{marginTop: 100}}>
            {children}
        </div>
        <Footer pathname={pathname} />
    </div>
)