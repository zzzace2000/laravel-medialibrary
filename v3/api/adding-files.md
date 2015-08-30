---
title: Adding files
---

Adding a file to the medialibrary is easy. Just pick one of the starting methods, optionally add some of the middle methods
and finish with a finishing method. All start and middle methods are chainable.

For example:

```php
$youModel
    ->addMedia($pathToFile) //starting method
    ->withCustomProperties(['mime-type' => 'image/jpeg']) //middle method
    ->preservingOriginal() //middle method
    ->toMediaLibrary(); //finishing method
```

## Starting methods

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

## Middle

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

##Finishing methods
