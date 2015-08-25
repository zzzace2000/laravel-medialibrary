---
title: Using custom properties
---

When adding a file to the medialibrary you can pass an array with custom properties:

```php
$newsItem
    ->addMedia($pathToFile)
    ->withCustomProperties(['mime-type' => 'image/jpeg'])
    ->toMediaLibrary();
```
