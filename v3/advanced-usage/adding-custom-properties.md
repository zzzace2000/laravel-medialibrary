---
title: Using custom properties
layout: default
---

#Adding custom properties
When adding a file to the medialibrary you can pass an array with custom properties:
{% highlight php %}
$newsItem
    ->addMedia($pathToFile)
    ->withCustomProperties(['mime-type' => 'image/jpeg'])
    ->toMediaLibrary();
{% endhighlight %}