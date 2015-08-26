---
title: Defining conversions
---

Imagine you are making a site with a list of all news items. Wouldn't it be nice to show the user a thumb of image associated with the news-item? When adding an image to a media collection, these derived images can be created automatically.

If you want to use this functionality your models should implement the `hasMediaConversions` interface instead of `hasMedia`:

```php
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class News extends Model implements HasMediaConversions
{
    use HasMediaTrait;
}
```

You can let the package know that it should create a derived by registering a media conversion on the model.

```php
// In your news model

public function registerMediaConversions()
{
    $this->addMediaConversion('thumb')
         ->setManipulations(['w' => 368, 'h' => 232])
         ->performOnCollections('images');
}
```

When associating a jpg-, png-, or pdf-file, to the model the package will, 
besides storing the original image, create a derived image for every media 
conversion that was added. By default, the output will be a jpg-file.

Internally [Glide](http://glide.thephpleague.com/) is used to manipulate images. You can use any parameter you 
find in their image API. So if you want to output another image format you 
can specify pngor gif using the fm-key in an an imageprofile.

By default, a conversion will be performed on the queue that you specified 
in the configuration. You can also avoid the usage of the queue by calling `nonQueued()` on a conversion.

You can add as many conversions on a model as you want. Conversion can also be performed on multiple collections. To do so you can just leave of the performOnCollections-call. If you pass "*" to performOnCollections the conversion will be applied to every collection as well.

```php
// In your news model

public function registerMediaConversions()
{
    $this->addMediaConversion('thumb')
         ->setManipulations(['w' => 368, 'h' => 232,'filt' => 'greyscale', 'fm' => 'png'])
         ->performOnCollections('images', 'anotherCollection')
         ->nonQueued();
    // => this conversion will be performed on multiple collections and won't be queued

    $this->addMediaConversion('adminThumb')
         ->setManipulations(['w' => 50, 'h' => 50, 'sharp'=> 15])
         ->performOnCollections('*');
    // => this conversion will be performed on every collection

    $this->addMediaConversion('big')
         ->setManipulations(['w' => 500, 'h' => 500]);
    // => this conversion will also be performed on every collection
}
```

Instead of specify the glide parameters in the `setManipulations-method` you can also you use the convenience methods.

This media conversion:

```php
$this->addMediaConversion('thumb')
     ->setManipulations(['w' => 500]);
```

is equivalent to:

```php
$this->addMediaConversion('thumb')
     ->setWidth(500);
 ```
