import React from 'react';
import formatISO from 'date-fns/formatISO';
// settings
import { blogDomain, blogPath, blogBy, blogName, blogLogoURL, defaultSocialImage } from '../../settings/blog';;
import authors from '../../settings/authors';

// for ld json post data script
function PostData({title, image, description, path, authorId, published, updated}) {

    function makePostSchema() {
        return {
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `${blogDomain}${path}`
            },
            "headline": title,
            "image": [ image || defaultSocialImage || blogLogoURL || "" ],
            "datePublished": formatISO(new Date(published)),
            "dateModified": formatISO(new Date(updated || published)),
            "author": {
                "@type": authorId ? "Person" : "Organization",
                "name": authorId ? authors[authorId].name : blogName,
                "url": authorId ? `${blogDomain}${blogPath}/author/${authorId}` : `${blogDomain}${blogPath}`,
            },
            "publisher": {
                "@type": "Organization",
                "name": blogBy,
                ...blogLogoURL && { "logo": { "@type": "ImageObject", "url": blogLogoURL }}
            },
            "description": description
        }
    };

    return (
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(makePostSchema()) }} />
    );
};

export default PostData;