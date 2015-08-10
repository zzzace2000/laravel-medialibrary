---
title: Simple example
layout: default
---
#Installation

Here's an example:
~~~ php
$newsItem = News::find(1);
$newsItem->addMedia($pathToFile)->toCollection('images');
~~~
It can handle your uploads directly:

```php
$newsItem->addMedia($request->file('image'))->toCollection('images');
```

Want to store some large files on another filesystem? No problem:
```php
$newsItem->addMedia($smallFile)->toCollectionOnDisk('downloads', 'local');
$newsItem->addMedia($bigFile)->toCollectionOnDisk('downloads', 's3');
```
