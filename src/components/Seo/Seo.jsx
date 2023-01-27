import { Helmet, HelmetProvider } from "react-helmet-async"

export default function Seo({ title, description }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{`${title} | In Touch`}</title>
                <meta  name="description" content={description}/>
            </Helmet>
        </HelmetProvider>
    )
}