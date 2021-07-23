import Head from 'next/head'

function Meta({title, keywords, description}) {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'TsuyuPhotoGallery',
    keywords: 'Tsuyu, Photo, Gallery, travel, トラベル, 旅行, 写真',
    description: 'フォトギャラリー'
}

export default Meta