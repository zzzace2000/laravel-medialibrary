---
title: Working with multiple filesystems
layout: default
---

#Working with multiple filesystems
By default all files are stored on the disk whose name is specified in `defaultFilesystem` in the
config file. 

Files can also be stored [on any filesystem that is configured in your Laravel app](http://laravel.com/docs/5.0/filesystem#configuration).
When adding a file to the medialibrary you can choose on which disk the file should be stored. 
This is useful when for example you have some small files that should be stored locally and 
some big files that you want to save on s3.

The `toCollectionOnMedia`- and `toMediaLibraryOnDisk`-functions accept a disk name as a 
second parameter. If you have a disk named s3 you can do this:

```php
$newsItem->addMedia($pathToAFile)->toCollectionOnDisk('images', 's3');
```

This file will be stored on the disk named s3.
