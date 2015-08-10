---
title: Installation
layout: default
---
#Installation

You can install this package via composer using this command:

```bash
composer require spatie/laravel-medialibrary
```

Next, you must install the service provider:

```php
// config/app.php
'providers' => [
    ...
    Spatie\MediaLibrary\MediaLibraryServiceProvider::class,
];
```

You can publish the migration with:
```bash
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
```

After the migration has been published you can create the media-table by running the migrations:

```bash
php artisan migrate
```

You can publish the config-file with:
```bash
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="config"
```

This is the contents of the published config file:

```php
return [

    /*
     * The filesystems on which to store added files and derived images. Choose one or more
     * of the filesystems you configured in app/config/filesystems.php
     */
    'defaultFilesystem' => 'media',

    /*
     * The maximum file size of an item in bytes. Adding a file
     * that is larger will result in an exception.
     */
    'max_file_size' => 1024 * 1024 * 10,

    /*
    * This queue will used to generate derived images.
    * Leave empty to use the default queue.
    */
    'queue_name' => '',
    
    's3' => [
        /*
         * The domain that should be prepended when generating urls.
         */
        'domain' => 'https://xxxxxxx.s3.amazonaws.com',
    ],
];
```

And finally you should add a disk to `app/config/filesystems.php`. This would be a typical configuration:

```php
    ...
	'disks' => [
        'media' => [
            'driver' => 'local',
            'root'   => public_path().'/media',
        ],
    ...    
```

All files of the medialibrary will be stored on that disk. If you are planning on
working with the image manipulations you should configure a queue on your service 
with the name specified in the config file.