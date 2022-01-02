# puller-alpine

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Total Downloads](https://img.shields.io/packagist/dt/bfg/puller-alpine.svg?style=flat-square)](https://packagist.org/packages/bfg-s/puller-alpine)

## Install
`composer require bfg/puller-alpine`

Navigate the [link](https://github.com/bfg-s/puller) to read the documentation
in the [https://github.com/bfg-s/puller](https://github.com/bfg-s/puller).

## Usage
Make sure that in your `public/vendor` folder published `puller-alpine/puller-alpine.js`.
He had to appear immediately after installing the package,
as it broads publications in the `laravel-assets` group.
If this did not happen and you did not appear there, publish it manually:
```bash
php artisan vendor:publish --tag=puller-alpine-assets
```
Connect the script in your document after Alpine initialization:
```html
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
<script src="{{ asset('vendor/puller-alpine/puller-alpine.js') }}"></script>
```

## Explain logic
All events and their values are stored in the `Alpine` store. 
If the store is passivated, then the first call will create a new 
one if you want to use default states, use assistants for `blade` 
or create shops manually.

## Blade shorts
```javascript
<script>
    document.addEventListener('alpine:init', () => {
        Alpine.store('dark_mode', {
            status: true,

            toggle() { // <-- details
                this.status = !this.status;
            }
        })
    })
</script>
```
> Details come to the function, or if this property will be assigned to it.

With Alpine blade directive:
```blade
@alpineStore('test', ['state' => true])
@alpineStore([
    'chat' => ['list' => []],
    'online' => ['count' => 0],
])
```
Generated:
```html
<script type='text/javascript'>document.addEventListener('alpine:init', function () {Alpine.store("test", {"state":true});})</script>
<script type='text/javascript'>document.addEventListener('alpine:init', function () {Alpine.store("chat", {"list":[]});Alpine.store("online", {"count":0});})</script>
```

## Built-in magic
For send Messages
```html
$message('event-name', {my: 'data'})
```

## Built-in stores

#### $errors
Store with last error list
#### $error_message
Store with last error message
#### $status
Store with last puller status code ( 0 - is normal)

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Credits

- [Xsaven](https://github.com/bfg-s)
- [All Contributors](https://github.com/bfg-s/puller-alpine/contributors)

## Security
If you discover any security-related issues, please email xsaven@gmail.com instead of using the issue tracker.

## License
The MIT License (MIT). Please see [License File](/LICENSE.md) for more information.
