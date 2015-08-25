---
title: Installation & setup
---

Medialibrary can be installed via composer:

```bash
$ composer require spatie/laravel-medialibrary
```

Next, you need to the service provider:

```php
// config/app.php
'providers' => [
    ...
    Spatie\MediaLibrary\MediaLibraryServiceProvider::class,
];
```

And publish and run the migration:

```bash
$ php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
$ php artisan migrate
```

Publishing the config file is optional:

```bash
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="config"
```

The config file contains a number of default values:

```php
return [
    /*
     * The filesystems on which to store added files and derived images. Choose
     * one or more of the filesystems you configured in `app/config/filesystems.php`.
     */
    'defaultFilesystem' => 'media',

    /*
     * The maximum file size of an item in bytes. Adding a file that is larger will
     * result in an exception.
     */
    'max_file_size' => 1024 * 1024 * 10,

    /*
     * This queue will used to generate derived images. Leave empty to use the default
     * queue.
     */
    'queue_name' => '',
    
    's3' => [
        /*
         * The domain that should be prepended when generating URLs.
         */
        'domain' => 'https://xxxxxxx.s3.amazonaws.com',
    ],
];
```

Finally you should add a disk to `app/config/filesystems.php`. All files added the media library will be stored on that disk, this would be a typical configuration:

```php
return [
    ...
    'disks' => [
        'media' => [
            'driver' => 'local',
            'root'   => public_path().'/media',
        ],
    ... 
];   
```

If you are planning on working with image manipulations it's recommended to configure a queue on your service and specify it in the config file.
