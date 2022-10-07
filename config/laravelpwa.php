<?php

return [
    'name' => 'LaravelPWA',
    'manifest' => [
        'name' => env('APP_NAME', 'My PWA App'),
        'short_name' => 'PWA',
        'start_url' => '/',
        'background_color' => '#ffffff',
        'theme_color' => '#000000',
        'display' => 'standalone',
        'orientation'=> 'any',
        'status_bar'=> 'black',
        'icons' => [
            '72x72' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '96x96' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '128x128' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '144x144' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '152x152' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '192x192' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '384x384' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
            '512x512' => [
                'path' => 'favicon.png',
                'purpose' => 'any'
            ],
        ],
        'splash' => [
            '640x1136' => '/favicon.png',
            '750x1334' => '/favicon.png',
            '828x1792' => '/favicon.png',
            '1125x2436' => '/favicon.png',
            '1242x2208' => '/favicon.png',
            '1242x2688' => '/favicon.png',
            '1536x2048' => '/favicon.png',
            '1668x2224' => '/favicon.png',
            '1668x2388' => '/favicon.png',
            '2048x2732' => '/favicon.png',
        ],
        'shortcuts' => [
            [
                'name' => 'Shortcut Link 1',
                'description' => 'Shortcut Link 1 Description',
                'url' => '/shortcutlink1',
                'icons' => [
                    "src" => "/images/icons/icon-72x72.png",
                    "purpose" => "any"
                ]
            ],
            [
                'name' => 'Shortcut Link 2',
                'description' => 'Shortcut Link 2 Description',
                'url' => '/shortcutlink2'
            ]
        ],
        'app' => [
            'host' => '127.0.0.1',
            'api' => '',
            'locale' => ''
        ],
        'custom' => []
    ]
];
