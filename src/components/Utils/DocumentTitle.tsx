/**
 * Created by ASTAKHOV A.A. on 03.06.2022
 */

import Head from 'next/head';
import {FC, memo, useMemo} from 'react';

interface DocumentTitleProps {
    title?: string | Array<string>;
    description?: string | null;
    image?: string | null;
}

const DocumentTitle: FC<DocumentTitleProps> = memo(({title, description, image}): JSX.Element | null => {
    const finalTitle = useMemo(() => {
        return [title, process.env.APP_NAME]
            .flat(1)
            .filter(v => !!v)
            .join(' | ');
    }, [title]);

    const finalDescription = useMemo(() => {
        return (
            description ||
            'Json fetch'
        );
    }, [description]);

    const ogImage = useMemo(() => {
        return image || `${process.env.APP_PUBLIC_ORIGIN}${process.env.APP_PUBLIC_BASE_PATH}/images/banner.jpeg`;
    }, [image]);

    return (
        <Head>
            <title>{finalTitle}</title>
            <meta key="description" name="description" content={finalDescription} />
            <meta key="keywords" name="keywords" content="nft, marketplace" />
            <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
            <meta key="og:title" property="og:title" content={finalTitle} />
            <meta key="og:description" property="og:description" content={finalDescription} />
            <meta key="og:image" property="og:image" content={ogImage} />
        </Head>
    );
});

export default DocumentTitle;
