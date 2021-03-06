/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
   
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFimls: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                  b = prompt("На сколько оцение его?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                i--;   //возвращает на одну итерацию назад
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 50) {
            console.log("Вы киноман!");
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные значения или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start(); // кол-во просмотренных фильмов 

personalMovieDB.rememberMyFimls(); // спрашивает у пользователя 2 последних просмотренных фильма и оценку этим фильмам

personalMovieDB.detectPersonalLevel(); // выводит уровень просмотра фильмов

personalMovieDB.writeYourGenres(); // спрашивает у пользователя его любимые жанры

//personalMovieDB.toggleVisibleMyDB(); // переключает приватность объекта

personalMovieDB.showMyDB(); // проверяет Базу данных на приватность, и если она открыта, выводит её