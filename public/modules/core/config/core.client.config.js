angular.module('core').run(['Menus',
    function(Menus) { //Adds all menu items using Menu service

        Menus.addMenuItem('topbar', 'Poster', 'poster','/poster');
        Menus.addMenuItem('topbar', 'Docs', 'docs','/docs');
    }
]);
