---
title: Retrieving converted images
---

Here's an example that shows you how to get an URL and a path to the converted image:

```php
$mediaItems = $newsItem->getMedia('images');
$mediaItems[0]->getUrl('thumb');
$mediaItems[0]->getPath('thumb'); //full path on disk
```

Because getting an URL to the first mediaItem in a collection is such a common scenario
the `getFirstMediaUrl` convenience-method is provided. The first parameter is the name
of the collection, the second the name of a conversion. There also a `getFirstMediaPath`-
variant that returns the full path on disk.

```php
$urlToFirstListImage = $newsItem->getFirstMediaUrl('images', 'thumb');
$fullPathToFirstListImage = $newsItem->getFirstMediaPath('images', 'thumb');
```
