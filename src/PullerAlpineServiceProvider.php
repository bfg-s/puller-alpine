<?php

namespace Bfg\PullerAlpine;

use Illuminate\Support\ServiceProvider;

class PullerAlpineServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        \Puller::registerChannelInterface(AlpineTaskChannel::class);

        \Blade::directive('alpineStore', [BladeDirectiveAlpineStore::class, 'directive']);

        $this->publishes([
            __DIR__ . '/../assets' => public_path('vendor/puller-alpine')
        ], 'puller-alpine-assets');

        $this->publishes([
            __DIR__ . '/../assets' => public_path('vendor/puller-alpine')
        ], 'laravel-assets');
    }
}
