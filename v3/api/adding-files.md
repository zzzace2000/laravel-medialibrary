---
title: Adding files
---

## Start methods

### addMedia

```php
/**
 * Add a file to the medialibrary.
 *
 * @param string|\Symfony\Component\HttpFoundation\File\UploadedFile $file
 *
 * @return \Spatie\MediaLibrary\FileAdder\FileAdder
 */
public function addMedia($file)
```

## Chaining

### preserveOriginal

```php
/**
 * When adding the file the medialibrary, the original file
 * will be preserved.
 *
 * @return $this
 */
public function preservingOriginal()
```
