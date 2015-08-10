---
title: Simple example
layout: default
---
#Installation

Here's an example:

{% highlight php %}
$newsItem = News::find(1);
$newsItem->addMedia($pathToFile)->toCollection('images');
{% endhighlight %}

It can handle your uploads directly:

{% highlight php %}
$newsItem->addMedia($request->file('image'))->toCollection('images');
{% endhighlight %}

Want to store some large files on another filesystem? No problem:

{% highlight php %}
$newsItem->addMedia($smallFile)->toCollectionOnDisk('downloads', 'local');
$newsItem->addMedia($bigFile)->toCollectionOnDisk('downloads', 's3');
{% endhighlight %}
