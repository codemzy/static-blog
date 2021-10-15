import React from 'react';
import formatRFC7231 from 'date-fns/formatRFC7231';
// settings
import { blogDomain, blogPath, blogName, blogDescription, metaDescription } from '../../settings/blog';;

// for RSS feed
function Feed({posts = []}) {
    return (
        <rss version="2.0">
            <channel>
                <title>{blogName} RSS Feed</title>
                <link>{`${blogDomain}${blogPath}`}</link>
                <description>{blogName} rss feed. {metaDescription || blogDescription}</description>
                { posts.map(function(post) {
                    return (
                        <item>
                            <title>{post.title}</title>
                            <link>{`${blogDomain}${post.path}`}</link>
                            <guid>{`${blogDomain}${post.path}`}</guid>
                            <pubDate>{formatRFC7231(new Date(post.date))}</pubDate>
                            <description>{post.description}</description>
                        </item>
                    )
                }) }
            </channel>
        </rss>
    );
};

export default Feed;