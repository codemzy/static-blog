// this is the root domain or subdomain that the live blog will be hosted on
// this info is needed for the LD-JSON post data and the RSS feed
// e.g. "https://www.yourdomain.com" or "https://blog.yourdomain.com"
export const blogDomain = "https://www.yourdomain.com";

// blog location - use "" for no subdirectory or "/blog" for blog subdirectory
// personally I prefer to use the "/blog" subdirectory so that I can have other stuff on the site
// and then blog posts are like www.yoursite.com/blog/post-name rather than www.yoursite.com/post-name
// but if your whole site is a blog primarily you might want to leave this as "" and have the index page as the blog landing page
// post urls will be www.theblogsite.com/post-name or if you are hosting on subdomain like blog.yoursite.com/post-name
// if you do use "/blog" make sure you create a custom index page and wire it up in build/pages
export const blogPath = "";

// this could be the business, website or the person
export const blogBy = "Static Blog Inc";

// The name of the blog
export const blogName = "The Static Blog";

// url for a logo (this is used in the article ld json)
export const blogLogoURL = false;

// Description for visitors to the blog (you can use markup)
export const blogDescription = "Something about the blog that you are creating, and what you will be writing about. Oh and maybe a [link to your newsletter](/) or something!"

// Description that will display in search engines (use plain text only)
// This is optional, but if you used markup in your description, include a plain text description here for SEO
export const metaDescription = `Learn about ~the topics you cover~ from step-by-step guides, case studies, and examples. See the latest articles from ${blogName}.`;

// The number of posts per page (e.g. on the blog and category pages)
export const blogPagesLength = 20;

// The main twitter handle for the blog site (used for attribution in social sharing) e.g. @yourtwitter
export const blogTwitter = "";

// This image will be used on social shares if you didn't give a post an image
// e.g. https://images.domain.com/blog/default.jpg
export const defaultSocialImage = "";