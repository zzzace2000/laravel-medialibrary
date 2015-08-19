---
title: Associating files
layout: default
---
<h1>Associating files</h1>

You can add associate a file with a model like this:

```php
$newsItem = News::find(1);
$newsItem->addMedia($pathToFile)->toMediaLibrary();
```

The file will now be associated with the newsItem. Adding a file will move your file to a configured disk.

If you want to preserve the file at the original location, you can call preservingOriginal:
```php
$newsItem->addMedia($pathToFile)->preservingOriginal()->toMediaLibrary();
```
