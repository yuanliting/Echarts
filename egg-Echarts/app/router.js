'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/', controller.home.index);

// };

// app/router.js
module.exports = app => {
    require('./router/index')(app);
};

