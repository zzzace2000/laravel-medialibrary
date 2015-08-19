---
title: Working with collections
layout: default
---

If you have different types of files that you want to associate,
you can put them in their own collection.

```php
$newsItem = News::find(1);
$newsItem->addMedia($pathToImage)->toCollection('images');
$newsItem->addMedia($pathToAnotherImage)->toCollection('images');
$newsItem->addMedia($pathToPdfFile)->toCollection('downloads');
$newsItem->addMedia($pathToAnExcelFile)->toCollection('downloads');
```

All media in a specific collection can be retrieved like this:

```php
$newsItem->getMedia('images');
// => returns media objects for all files in the images collection

$newsItem->getMedia('downloads');
// => returns media objects for all files in the downloads collection
```

A collection can have any name you want. If you don't specify a name, the file will get added to a `default`-collection.

You can clear out a specific collection just be passing the name to `clearMediaCollection`:

```php
$newsItem->clearMediaCollection('images');
```
