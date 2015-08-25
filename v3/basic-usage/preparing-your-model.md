---
title: Preparing your model
---

To relate media to a model, the model must implement this interface and trait:

```php
namespace App\Models;

use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\HasMedia\Interfaces\HasMedia;

class News extends Model implements HasMedia
{
    use HasMediaTrait;
   ...
}
```
