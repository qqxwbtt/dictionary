#!/usr/bin/env node

const cheerio = require('cheerio')
const request = require("request");
const http = require("http");
const fs = require("fs");

const word = process.argv.slice(2).join(" ");
const url =  "http://www.hanhande.com/manhua/narutocn/1156594_2.shtml";

request(url, function(err, res, body) {
    // console.log(body);
    const $ = cheerio.load(body);
    let result = $('div.mhBoxShow > div#pictureContent > p > img')[0].attribs.src
    console.log(result);
    // result = $(' div#phrsListTab > h2.wordbook-js > div.baav > p').text() + result;
    // if(result == '') {
    //     result = $('div#fanyiToggle > div.trans-container > p:nth-child(2)').text();
    // }
    // console.log(result.replace(/\s+/g, " "))
})

