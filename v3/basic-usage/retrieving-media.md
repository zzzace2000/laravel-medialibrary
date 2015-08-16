---
title: Retrieving media
layout: default
---
#Retrieving media

To retrieve files you can use the ```getMedia```-method:
{% highlight php %}
$mediaItems = $newsItem->getMedia();
{% endhighlight %}

The method returns an collection with `Media`-objects.

You can retrieve the url to the file associated with `Media`-object with:

{% highlight php %}
$publicUrl = $mediaItems[0]->getUrl();
{% endhighlight %}

A media-object also has a name. By default it is the name of the file.
{% highlight php %}
echo $mediaItems[0]->name // display the name
$mediaItems[0]->name = 'new name'
$mediaItems[0]->save(); // the new name gets saved. Activerecord ftw!
{% endhighlight %}

The name of the media object can also be changed when it gets added to the medialibrary:
{% highlight php %}
$newsItem->addMedia($pathToFile)->usingName('new name')->toMediaLibrary();
{% endhighlight %}

Using the media-object the name of uploaded file can be changed.
{% highlight php %}
$mediaItems[0]->file_name = 'newFileName.jpg'
$mediaItems[0]->save(); // Saving will also rename the file on the filesystem.
{% endhighlight %}

The name of the uploaded file can also be changed when it gets added to the medialibrary:
{% highlight php %}
$newsItem->addMedia($pathToFile)->usingFileName('otherFileName.txt')->toMediaLibrary();
{% endhighlight %}

You can also get the size of the file:
{% highlight php %}
$mediaItems[0]->size // returns the size in bytes
$mediaItems[0]->humanReadableSize // returns the size in a human readable form (eg. 1,5 MB)
{% endhighlight %}

You can remove something from the library simply calling `delete` on the media-object:
{% highlight php %}
$mediaItems[0]->delete();
{% endhighlight %}

When a media item gets deleted all related files will be removed from the filesystem.

Deleting a model with associated media will also delete all associated files.
{% highlight php %}
$newsItem->delete(); // all associated files will be deleted as well
{% endhighlight %}

If you want to remove all associated media in a specific collection you can use this method:
{% highlight php %}
$newsItem->clearMediaCollection(); // all media will be deleted
{% endhighlight %}