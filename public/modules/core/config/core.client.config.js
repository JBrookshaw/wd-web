angular.module('core').run(['Menus',
    function(Menus) { //Adds all menu items using Menu service

        Menus.addMenuItem('topbar', 'Videos', 'videos','/videos');
        Menus.addMenuItem('topbar', 'Project Overview', 'poster','/poster');
        Menus.addMenuItem('topbar', 'Docs', 'docs','/docs');
    }
]);
