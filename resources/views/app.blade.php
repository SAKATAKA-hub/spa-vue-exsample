<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">


    <title>{{  config('app.name'), 'hoge' }}</title>


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    {{-- <link rel="stylesheet" href="{{ mix('/css/app.css') }}"> --}}
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">



</head>
<body>


    <div id="app">
        <index-component></index-component>
    </div>


    <!-- Scripts -->
    {{-- <script src="{{ mix('/js/app.js') }}"></script> --}}
    <script src="{{ asset('/js/app.js') }}" defer></script>

</body>
</html>
