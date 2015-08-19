---
title: Retrieving converted images
layout: default
---

Here's an example that shows you how to get the URLs to the converted images:

```php
$mediaItems = $newsItem->getMedia('images');
$mediaItems[0]->getUrl('thumb');
```

Because getting an URL to the first mediaItem in a collection is such a common scenario
the `getFirstMediaUrl` convenience-method is provided. The first parameter is the name
of the collection, the second the name of a conversion.

```php
$urlToFirstListImage = $newsItem->getFirstMediaUrl('images', 'thumb');
```
