import React from 'react';
// settings
import { blogPath, blogName } from '../../settings/blog';;
import authors from '../../settings/authors';

// for ld json post data script
function PostData({title, description, path, authorId, published, updated}) {
    return (
        <script type="application/ld+json">
        {{
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": path
            },
            "headline": title,
            "image": [],
            "datePublished": published,
            "dateModified": updated || published,
            "author": {
                "@type": authorId ? "Person" : "Organization",
                "name": authorId ? authors[authorId].name : blogName,
                "url": authorId ? `${blogPath}/author/${authorId}` : blogPath,
            },
            "publisher": {
                "@type": "Organization",
                "name": blogName, // change this to the site name we need to add this in settings and site base url
                "logo": {
                    "@type": "ImageObject",
                    "url": "[THE SITE URL]/img/apple-touch-icon.png"
                }
            },
            "description": description
        }}
        </script>
    );
};

export default PostData;