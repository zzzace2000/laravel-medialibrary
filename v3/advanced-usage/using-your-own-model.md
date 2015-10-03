---
title: Using your own model
---



If you want to use your own model you can do so in version 3.4.0 and higher.
This allow you do add your own fields, add relationships and so on.

The easiest way to use a your own custom model is to extend the 
default `Spatie\MediaLibrary\Media`-class. Here's an example:

```php
namespace YourApp\Models;
use Spatie\MediaLibrary\Media as BaseMedia;

class Media extends BaseMedia 
{
...
```

In the config file of the package you must specify the name of your custom class:

```php
// config/laravel-medialibrary.php
...
   'media_model' => YourApp\Models\Media::class
...
```
