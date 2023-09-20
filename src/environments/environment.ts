// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDXn5P7DI1KFmpP9hJU9EsDZ4s6mhYhtZs',
    authDomain: 'movie-ngrx.firebaseapp.com',
    projectId: 'movie-ngrx',
    storageBucket: 'movie-ngrx.appspot.com',
    messagingSenderId: '57625658488',
    appId: '1:57625658488:web:3ac13a17c773bf8fdd598d',
  },
  movieApiKey: '5b7f91e1ba15c45e5ffb71864f48d30d',
  movieURL: 'https://api.themoviedb.org/3/search/movie',
  movieDetailsURL: 'https://api.themoviedb.org/3/movie',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
