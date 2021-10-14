# Static Blog

Just a template to create a really simple static blog site using React. Yes, I know, you can use Gatsby or Next.js to create static sites with React, and they are great for a totally custom set up. But this is for a REALLY simple static blog. You can literally add a few markdown files and have your blog up and running. And because it's focused on blog writting, it has a few features that work out the box:

- Scheduled posts
- Category pages
- Author pages

And coming soon...

- Popular posts
- Social sharing

It also comes with Tailwind installed as default for some beautiful css.

- React
- Tailwind
- Static

That's all. And, you don't need to know React or JSX to get started. Just markdown, add your posts, and your blog will work.

No hot reloading, no complex webpack set up. It's static. It turns React and Markdown into HTML. It keeps your CSS and JavaScript separate. 

## Set Up

Click the 'use this template' button to create a new repository for your blog. Give it a name, and then clone your new repo to your dev environment (local or in the cloud like Gitpod or Glitch).

You're going to need NodeJS installed for the dev server (but since this is static, in production no servers are required).

Now go to the `/settings` directory. In `/settings/blog.js` add the name for the blog and decide if you want your blog as the main site or in subdirectory like `/blog`. There's a bunch of notes in there to help.

First run `npm install` to install the dependencies needed to build the blog.

To preview your blog run `npm run dev-build` followed by `npm run dev` to see your blog on port 8080 (http://localhost:8080). No hot reloading currently so if you add a new post run `npm run build-static` to create a new build and `npm run dev` to start the server again. 

## Blog

(basic)

This is where you should start. If you're not building a blog, this probably isn't the right repo for you. 

In the /posts directory you will add your blog posts in markdown format. Use YAML at the top to provide information about the post (title, description etc.)

The file name format is `YYYY-MM-DD_the-blog-post-path.md` with the date being the date for publishing the post. If you want to schedule a post for a future date, use the future date and the post won't go live until you build the site on that date or after.

If you want schedule and update a post, don't alter the orginal file. Use the same blog post path as the original post, and change the date to the date for the scheduled update (you will have two files, one with the orginal post that stays live and one with the updated post which will go live once the date is reached and replace the orginal post).

I've included some example blog posts to get started.

You can customise categories (`/settings/categories.js`) and authors (`/settings/authors.js`) or remove them if you don't need/want them.

## Deploy

To deploy `npm run build` will create the production build, which will be in the `/dist` directory.

---

**Optional Extras**

## Pages

(more advanced)

You might want some extra pages. Some blogs might include an About page for example. I've done a custom 404 Error page already.

I used React for templating, so you can re-use components across pages etc. Don't include any Javascript in the React though, it won't work. See the Javascript section for that.

To add a Page go to /components/Pages and add a React component for the page. Then you will need to add it to the build in `build/pages.js`.

## CSS

The blog is styled out the box, but you might want to add your own CSS. I use Tailwind CSS, so you can add any tailwind styles to your components and they will automatically be included in the build.

If you want to add any custom css, do it in `/css/styles.css` for global styles, or you could add another stylesheet for specific pages e.g `contact.css`, it will automatically get included in the build and you can include a script on any pages it's needed like `<link href="/css/contact.min.css" rel="stylesheet" />`. 

If you make changes to the css run `npm run dev-css` and `npm run dev` to see the updates.

## JavaScript

You can add any custom Javascript for your site in `/js/index.js`. Then in `/components/Main.js` uncomment the `<script src="/js/index.min.js" async></script>` tag in the body.

If you make changes to the css run `npm run build-js` and `npm run dev` to see the updates.