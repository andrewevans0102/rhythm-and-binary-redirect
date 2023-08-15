import { useLocation, useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import '../styles/styles.scss';
import Message from '../components/Message';

export default function ErrorPage() {
    const error: any = useRouteError();
    const location = useLocation();
    console.error(error);

    const pageBase = 'https://andrewevans.dev';

    const [sendPage, setSendPage] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/post/')) {
            setSendPage(
                `${pageBase}${location.pathname.replace('/post/', '/blog/')}`
            );
        } else {
            setSendPage(pageBase);
        }
    }, [location.pathname]);

    return (
        <>
            <Header />
            <Message />
            <section className="redirect">
                <div className="redirect__body">
                    <p>
                        {`It looks like you wanted to view the post at "${location.pathname}", `}{' '}
                        <a href={sendPage}>
                            [click to view it on AndrewEvans.dev]
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
