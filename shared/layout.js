import Head from "next/head";
import Header from "./header";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            {children}
        </>
    )
}