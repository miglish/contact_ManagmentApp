'use strict';

angular.module('contactApp')
        .service('contactFactory', function() {

          var contacts=[
          {
            firstName:'Mikias',
            image: 'images/uthapizza.png',
            lastName: 'Haile'
         },
         {
           firstName:'John',
           image: 'images/uthapizza.png',
           lastName: 'Maxy'
        },
        {
          firstName:'Abes',
          image: 'images/uthapizza.png',
          lastName: 'Strootman'
        }
        ];

        this.getContacts = function() {
          return contacts;
        };
        this.getContact = function(index) {
          return contacts[index];
        };


        });
