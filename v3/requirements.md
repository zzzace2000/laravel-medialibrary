---
title: Requirements
---

To create derived images [GD](http://php.net/manual/en/book.image.php) needs to be installed on your server. If you want to create PDF thumbnails [Imagick](http://php.net/manual/en/imagick.setresolution.php) is also required.

Imagick can be installed using `apt-get` on Ubuntu:

```bash
$ apt-get install imagemagick php5-imagick
```

Or with `yum` on CentOS:

```bash
$ yum install ImageMagick ImageMagick-devel
```

Note: Root access to your server might be required.
