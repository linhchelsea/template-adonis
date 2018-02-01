'use strict';

const Route = use('Route');

Route.on('/').render('backend.modules.dashboard');
Route.on('/calendar').render('backend.modules.calendar');
Route.on('/chart').render('backend.modules.chart');
Route.on('/widget').render('backend.modules.widget');
Route.on('/timeline').render('backend.modules.timeline');
Route.on('/user').render('backend.modules.user');

//table
Route.on('/table-datatables-net').render('backend.tables.datatables-net');
Route.on('/table-extended').render('backend.tables.extended');
Route.on('/table-regular').render('backend.tables.regular');

//form
Route.on('/form-extended').render('backend.forms.extended');
Route.on('/form-regular').render('backend.forms.regular');
Route.on('/form-validation').render('backend.forms.validation');
Route.on('/form-wizard').render('backend.forms.wizard');

//component
Route.on('/buttons').render('backend.components.buttons');
Route.on('/grid').render('backend.components.grid');
Route.on('/icons').render('backend.components.icons');
Route.on('/notifications').render('backend.components.notifications');
Route.on('/sweet-alert').render('backend.components.sweet-alert');
Route.on('/panels').render('backend.components.panels');
Route.on('/typography').render('backend.components.typography');

//pages
Route.on('/lock').render('backend.pages.lock');
Route.on('/login').render('backend.pages.login');
Route.on('/pricing').render('backend.pages.pricing');
Route.on('/register').render('backend.pages.register');

//maps
Route.on('/maps/google').render('backend.maps.google');
Route.on('/maps/vector').render('backend.maps.vector');
