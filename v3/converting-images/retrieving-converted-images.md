---
title: Retrieving converted images
layout: default
---

#Retrieving converted images

Here's example that shows you how to get the url's to the converted images:

```php
$mediaItems = $newsItem->getMedia('images');
$mediaItems[0]->getUrl('thumb');
```

Because getting an url to the first mediaItem in a collection is such a common scenario
the `getFirstMediaUrl`- convenience-method is provided. The first parameter is the name
of the collection, the second the name of a conversion.

```php
$urlToFirstListImage = $newsItem->getFirstMediaUrl('images', 'thumb');
```