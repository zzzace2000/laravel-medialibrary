---
title: <span class="version">v3.9+</span>&nbsp;Using a custom directory structure
---

By default the media library will store files inside a directory that uses
the `id` of it's `Media`-object as a name. Converted images will be stored inside a directory
names conversions.

```php
media
--- 1
------ file.jpg
------ conversions
--------- small.jpg
--------- medium.jpg
--------- big.jpg
--- 2
------ file.jpg
------ conversions
--------- small.jpg
--------- medium.jpg
--------- big.jpg
...
```

Putting files inside their own folders guaranties that files with the same name can be added to the medialibrary.

To override the used folder structure, a class that conforms to the `PathGenerator`-interface can be specified as the `custom_path_generator_class` in the config file.

Let's take a look at the interface:

```php
namespace Spatie\MediaLibrary\PathGenerator;

use Spatie\MediaLibrary\Media;

interface PathGenerator
{
    /**
     * Get the path for the given media, relative to the root storage path.
     *
     * @param \Spatie\MediaLibrary\Media $media
     *
     * @return string
     */
    public function getPath(Media $media);

    /**
     * Get the path for conversions of the given media, relative to the root storage path.
     *
     * @param \Spatie\MediaLibrary\Media $media
     *
     * @return string
     */
    public function getPathForConversions(Media $media);
}
```

[This example from the test](https://github.com/spatie/laravel-medialibrary/blob/3.9.0/tests/PathGenerator/CustomPathGenerator.php) uses
the md5 value of media id to created directories. The directories were conversions are stored will be named `c` instead of the default `conversions`.

There aren't any restrictions on how the directories can be named but take care that every media should have it's own directory.
When a `Media`-object get deleted the package will delete its entire associated directory.
It is your job to make sure you create unique directories when using a `PathGenerator`.
