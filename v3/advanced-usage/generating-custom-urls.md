---
title: Generating custom URLs
---

When `getUrl()` is called the task of generating that URL is passed to an implementation of `Spatie\MediaLibraryUrlGenerator`.

The package contains a `LocalUrlGenerator` that can generate URLs for a medialibrary that is stored above the public path. Also included is an `S3UrlGenerator` for when you're using S3 to store your files. 

If you are storing your media files in a private directory or use a different filesystem, you can write your own `UrlGenerator`. Your generator must adhere to the `Spatie\MediaLibraryUrlGenerator`.
When you also extend `Spatie\MediaLibraryUrlGenerator\BaseGenerator` you must only implement one method: `getUrl()` that should return the URL. You can call `getPathRelativeToRoot()` to get the relative path to the root of your disk.

The code of the included `S3UrlGenerator` should help make things more clear:

```php
 namespace Spatie\MediaLibrary\UrlGenerator;
 
 use Spatie\MediaLibrary\Exceptions\UrlCouldNotBeDeterminedException;
 
 class S3UrlGenerator extends BaseUrlGenerator implements UrlGenerator
 {
     /**
      * Get the URL for the profile of a media item.
      *
      * @return string
      *
      * @throws UrlCouldNotBeDeterminedException
      */
     public function getUrl()
     {
         return config('laravel-medialibrary.s3.domain').'/'.$this->getPathRelativeToRoot();
     }
 }
```
