#!/usr/bin/env node

const cheerio = require('cheerio')
const request = require("request");
const http = require("http");
const https = require("https");
const iconv = require('iconv-lite');
const isCh = require("is-chinese");
const fs = require("fs");
const Spinner = require('cli-spinner').Spinner;

const word = process.argv.slice(2).join(" ");
const url =  encodeURI(`http://dict.youdao.com/w/eng/${word}/#keyfrom=dict2.index`);

const  spinner = new Spinner('正在查询中.. %s');
spinner.setSpinnerString('|/-\\');
spinner.start();

request(url, function(err, res, body) {
    // console.log(body);
    spinner.stop(true);
    const $ = cheerio.load(body);
    let result = $('#phrsListTab > .trans-container > ul').text()
    result = $(' div#phrsListTab > h2.wordbook-js > div.baav > span').text() + result;
    if(result == '') {
        result = $('div#fanyiToggle > div.trans-container > p:nth-child(2)').text();
    }
    console.log(result.replace(/\s+/g, " "))
})

