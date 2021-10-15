---
title: This is my first blog post and it will be epic!
description: This is a description about the blog post. It will be the introductory paragraph used in search results, on blog list pages, and at the top of the blog post. It's pretty important.
categoryId: 'product-x'
authorId: 'codemzy'
published: '2021-10-01'
---

## This is the blog content

It's written in markdown, but has a few extra features you should know about.

### Letter Lists

I've tweaked the markdown slightly to add letter lists, as this is something I use in blog posts from time to time.

- a)
- Lists 
- With
- Letters

```
- a)
- Lists 
- With
- Letters
```

### Quotes with captions

You can add a quote as normal, but if you want to include a caption with an author and cite, you can do that too. Use `--` to the last line to add a caption, and use `-` within the caption to add a cite. The blockquote will come out wrap in a `<figure>` with a `<figcaption>`.

> Quotes with captions. Yep, you can cite.
>
> -- Codemzy in - This is my first blog post and it will be epic!

```
> Quotes with captions. Yep, you can cite.
>
> -- Codemzy in - This is my first blog post and it will be epic!
```

### Highlighted code

Using Prismjs behing the scenes to highlight some javascript!

```javascript
let string = "Testing";
console.log(string); // Testing
```

I've configured this to only happen if you pass a language.

````
```javascript
let string = "Testing";
console.log(string); // Testing
```
````

I may add more extra features in the future, but like with any markdown, if you need something that's not available, you can embed your own HTML anyway. So don't worry about it!