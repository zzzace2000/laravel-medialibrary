---
title: Introduction
permalink: /
layout: default
---

Medialibrary is a Laravel 5.1 package that can associate all sorts of files with Eloquent models. 

It provides a simple, fluent API to work with. Here's an example:

```php
$newsItem = News::find(1);
$newsItem->addMedia($pathToFile)->toCollection('images');
```

It can also directly handle your uploads:

```php
$newsItem->addMedia($request->file('image'))->toCollection('images');
```

Want to store some large files on another filesystem? No problem:

```php
$newsItem->addMedia($smallFile)->toCollectionOnDisk('downloads', 'local');
$newsItem->addMedia($bigFile)->toCollectionOnDisk('downloads', 's3');
```

The storage of the files is handled by [Laravel's Filesystem](http://laravel.com/docs/5.1/filesystem), so you can plug in any compatible filesystem. Additionally the package can manipulate images and pdfs that have been added in the medialibrary.

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

