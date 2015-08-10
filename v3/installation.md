---
title: Installation
layout: default
---
#Installation

You can install this package via composer using this command:

{% highlight bash %}
composer require spatie/laravel-medialibrary
{% endhighlight %}

Next, you must install the service provider:

{% highlight php %}
// config/app.php
'providers' => [
    ...
    Spatie\MediaLibrary\MediaLibraryServiceProvider::class,
];
{% endhighlight %}

You can publish the migration with:
{% highlight bash %}
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="migrations"
{% endhighlight %}

After the migration has been published you can create the media-table by running the migrations:

{% highlight bash %}
php artisan migrate
{% endhighlight %}

You can publish the config-file with:
{% highlight bash %}
php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="config"
{% endhighlight %}

This is the contents of the published config file:

{% highlight php %}
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
{% endhighlight %}

And finally you should add a disk to `app/config/filesystems.php`. This would be a typical configuration:

{% highlight php %}
    ...
	'disks' => [
        'media' => [
            'driver' => 'local',
            'root'   => public_path().'/media',
        ],
    ...    
{% endhighlight %}

All files of the medialibrary will be stored on that disk. If you are planning on
working with the image manipulations you should configure a queue on your service 
with the name specified in the config file.