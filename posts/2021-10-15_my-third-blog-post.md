---
title: This is my third blog post and it is the most epic yet!
description: This is a description about the blog post. It will be the introductory paragraph used in search results, on blog list pages, and at the top of the blog post. It's pretty important.
image: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1744&q=80
categoryId: news
authorId: codemzy
published: 2021-10-07
updated: 2021-10-15
---

I'm writing a third blog post so I can add pagination to the main blog list and the categories. This is essential for any blog that needs more than a few posts. Everything after this sentence is just a repeat of my second blog post. Not good for SEO, but this isnt public, so it will do the job for now. 

## This is the first header

I've been working on this blog builder for a couple of days now, and it's time to add another blog post so that I can build the main blog page.

I also want to see how a few things look, like

- Lists
- With 
- Bullets

and...

1. Lists 
2. With
3. Numbers

### What about a h3?

Yeah it will be cool to see how that looks too.

> I'm also wondering how a blockquote will look. Turns out pretty good.
>
> -- Test - The Best

> And without a caption? Not bad either!

And what about adding an image?

![someone writing](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1744&q=80)

Yes, images work too! Don't host images in your git repo though, your repository will become massive. Host them somewhere else. The one above is hosted by [unsplash](https://unsplash.com/photos/npxXWgQ33ZQ) but you shouldn't do that in production either! I tend to put my images in a seperate place like AWS S3, DigitalOcean Spaces, or a seperate Netlify site (manually uploaded) and then proxy the URL I want them on. 

And a video?

<figure class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

And what about code?

```js
let this = "some code";
```

The end.