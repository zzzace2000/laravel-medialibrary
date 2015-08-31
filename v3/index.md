---
title: Introduction
permalink: /
---

{% include badges.html %}

Medialibrary is a Laravel 5.1 package that can associate all sorts of files with Eloquent models. It provides a simple, fluent API to work with. Here's a quick example:

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

The storage of the files is handled by [Laravel's Filesystem](http://laravel.com/docs/5.1/filesystem),  so you can plug in any compatible filesystem. 

The package can also generate derived images such as thumbnails for images and pdf's. Once you've [set up your model](http://medialibrary.spatie.be/v3/converting-images/defining-conversions/), they're easily accessible:

```php
$newsItem->getCollection('images')->first()->getUrl('thumb');
```
