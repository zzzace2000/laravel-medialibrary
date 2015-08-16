---
title: Regenerating images
layout: default
---

#Regenerating images
When you change a conversion on your model, all images that were previously generated will not
updated automatically. To regenerate all images related to the News model you can 
issue this artisan command:

{% highlight bash %}
$ php artisan medialibrary:regenerate news
{% endhighlight %}

Leaving off `news` will regenerate all images.