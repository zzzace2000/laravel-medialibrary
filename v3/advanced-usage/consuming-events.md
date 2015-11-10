---
title: <span class="version">v3.10+</span>&nbsp;Consuming events
---

The medialibrary will fire the following events that your handlers can listen for:

### MediaAddedEvent
This event is fired after the a file has been saved to disk.

The event has a property `media` that holds the `\Spatie\MediaLibrary\Media`-object of which the file 
has been stored.  

### ConversionCompleteEvent
This event is fired when a conversion has been completed

The event has two public properties:
- `media`: the `\Spatie\MediaLibrary\Media`-object of which a conversion has been completed
- `conversion`: the conversion (an instance of `\Spatie\MediaLibrary\Conversion\Conversion` that has just been completed

###CollectionClearedEvent
This event will be fired after a collection has been cleared.

The event has two public properties:
- `model`:  the object that conforms `\Spatie\MediaLibrary\HasMedia\Interfaces\HasMedia` of which a collection has just been cleared.
- `collectionName`: the name of the collection that has just been cleared

## Sample usage

First you must created a listener class. Here's one that will log the paths
of added media.

```php
namespace App\Listeners;

use Spatie\MediaLibrary\Events\MediaAddedEvent;

class MediaLogger
{
    /**
     * @param \Spatie\MediaLibrary\Events\MediaAddedEvent $event
     */
    public function handle(MediaAddedEvent $event)
    {
        $media = $event->getMedia();
        $path = $media->getPath();
        \Log::info("file {$path} has been saved for media {$media->id};
    }
}
```

Hook it up in `app/Providers/EventServiceProvider.php` to let Laravel know that your handler should
be called when the event is fired:

```php
protected $listen = [
    'Spatie\MediaLibrary\Events\MediaAddedEvent' => [
        'App\Listeners\MediaLogger'
    ],
];
```


