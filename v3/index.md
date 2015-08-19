---
title: Introduction
permalink: /
layout: default
---
#Introduction

This Laravel 5.1 package can associate all sorts of files with Eloquent models. 

It provides a simple API to work with. Here's an example:

```php
$newsItem = News::find(1);
$newsItem->addMedia($pathToFile)->toCollection('images');
```

It can handle your uploads directly:

```php
$newsItem->addMedia($request->file('image'))->toCollection('images');
```

Want to store some large files on another filesystem? No problem:

```php
$newsItem->addMedia($smallFile)->toCollectionOnDisk('downloads', 'local');
$newsItem->addMedia($bigFile)->toCollectionOnDisk('downloads', 's3');
```
The storage of the files is handled by [Laravel's Filesystem](http://laravel.com/docs/5.1/filesystem), 
so you can use any filesystem you like. Additionally the package can create image manipulations 
on images and pdfs that have been added in the medialibrary.

Spatie is a webdesign agency in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

