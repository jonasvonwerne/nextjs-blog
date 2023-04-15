import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Error from 'next/error'


export default function Custom404() {
    return (
        <Layout errror>
            <section className={utilStyles.headingMd}>
                <h1>404 - Page Not Found</h1>
                <p>Please go back to main page</p>
            </section>
        </Layout>
    );
}

