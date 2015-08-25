---
title: Storing media specific manipulations
---

A media object has a property `manipulations`. You can set it to an array of 
which the keys must be conversion names and the values manipulation arrays. 

When saving the media object, the package will regenerate all files and use the saved manipulation as the first manipulation when creating a derived image.

```php
// in your news model
...
public function registerMediaConversions()
{
    $this->addMediaConversion('thumb')
         ->setManipulations(['w' => 500, 'h'=>500])
         ->performOnCollections('myCollection');
}
```
```php
// somewhere in your project and assuming you've already added some images to myCollection.
$mediaItems = $newsItem->getMedia('images');
$mediaItems[0]->manipulations = ['thumb' => ['mode' => 'filt' => 'greyscale']]
$mediaItems[0]->save(); // this will cause the thumb conversion to be regenerated. The result will be a greyscale image.
```

Calling `save()` in this example will regenerate the thumb-image. The output will be a grayscale image that has a both width and height of 500 pixels.
