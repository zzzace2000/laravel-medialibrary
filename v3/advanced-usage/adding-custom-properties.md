---
title: Using custom properties
---

When adding a file to the medialibrary you can pass an array with custom properties:

```php
$mediaItem = $newsItem
    ->addMedia($pathToFile)
    ->withCustomProperties(['mime-type' => 'image/jpeg'])
    ->toMediaLibrary();
```

Version 3.3.0 and higher provide some convenience methods to work with custom properties:

```php
$mediaItem->hasCustomProperty('mime-type') // return true;
$mediaItem->getCustomProperty('mime-type') // returns 'image/jpeg';

$mediaItem->hasCustomProperty('does not exists') // return false;
$mediaItem->getCustomProperty('does not exists') // returns null;
```
