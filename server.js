const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

let cheremimaka = 0;
let evecondom = 0;
let evecup = 0;
let evejel = 0;

let cheremimaka_home = 0;
let evecondom_home = 0;
let evecup_home = 0;
let evejel_home = 0;

let cup_navershop = 0;
let evejel_navershop = 0;

app.use(express.static('views'));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');


/** 체레미 마카 */
const cheremiFirst = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4');
    }catch(err){
        console.error(err);
    }
};

cheremiFirst().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]체레미 마카, ' + countStr + '\n');
    cheremimaka = count;
});

/**이브 콘돔 */
const evecondomFirst = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%BD%98%EB%8F%94&oquery=%EC%9D%B4%EB%B8%8C%EC%A0%A4&tqi=h3KItdp0JywssOxYgSVsssssteV-068165');
    }catch(err){
        console.error(err);
    }
};

evecondomFirst().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브콘돔, ' + countStr + '\n');
    evecondom = count;
});

/**이브컵 */
const evecupFirst = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&oquery=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4&tqi=h3LnJsprvhGssesUZR8ssssst%2FK-400671');
    }catch(err){
        console.error(err);
    }
};


evecupFirst().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브컵, ' + countStr + '\n');
    evecup = count;
});

/**이브젤 */
const evejelFirst = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%B4%EB%B8%8C%EC%A0%A4&oquery=%EC%9D%B4%EB%B8%8C%EC%BB%B5&tqi=h3Ldswprvh8ssgopFZZssssstbC-466325');
    }catch(err){
        console.error(err);
    }
};

evejelFirst().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-상단]이브젤, ' + countStr + '\n');
    evejel = count;
});










/** 체레미 마카 - 전체*/
const cheremimakaHome = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%B2%B4%EB%A0%88%EB%AF%B8+%EB%A7%88%EC%B9%B4&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

cheremimakaHome().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]체레미 마카, ' + countStr + '\n');
    cheremimaka_home = count;
});


/** 이브 콘돔 - 전체*/
const evecondomHome = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C+%EC%BD%98%EB%8F%94&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evecondomHome().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브 콘돔, ' + countStr + '\n');
    evecondom_home = count;
});


/** 이브컵 - 전체*/
const evecupHome = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evecupHome().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브컵, ' + countStr + '\n');
    evecup_home = count;
});


/** 이브젤 - 전체*/
const evejelHome = async () => {
    try{
        return await axios.get('https://search.naver.com/search.naver?display=15&f=&filetype=0&page=2&query=%EC%9D%B4%EB%B8%8C%EC%BB%B5&research_url=&sm=tab_pge&start=1&where=web');
    }catch(err){
        console.error(err);
    }
};

evejelHome().then((html) => {
    let searchChar = 'cheremimaka.com';
    const $ = cheerio.load(html.data);
    const $bodyList = $(".total_source .source_box").children('a:nth-child(2)');
    let pos = $bodyList.text().indexOf(searchChar);
    let count = 0;

    while(pos != -1){
        count++;
        pos = $bodyList.text().indexOf(searchChar, pos + 1);
    }
    const countStr = String(count);
    fs.appendFileSync('./data.csv', '[네이버-1페이지]이브젤, ' + countStr + '\n');
    evejel_home = count;
});









const cupNaverShopInfinite = async () => {
    try{
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        await page.goto("https://search.shopping.naver.com/search/all?frm=NVSHATC&origQuery=%EC%A0%A4&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%A0%A4&sort=rel&timestamp=&viewType=list");

        let result = await page.evaluate(() => {
            let name = [];
            const nameElem = document.querySelectorAll(".basicList_link__JLQJf");
            nameElem.forEach( v => {
                if(v){
                    name.push(v);
                }
                v.parentElement.removeChild(v);
            });
            return name;
        });

        console.log(result);

        await page.close();
        await browser.close();
    }catch (err){
        console.log(err);
    }finally{

    }
}

cupNaverShopInfinite();



















/*const cupNaverShop = async () => {
    try{
        return await axios.get('https://search.shopping.naver.com/search/all?frm=NVSHATC&origQuery=%EC%A0%A4&pagingIndex=1&pagingSize=40&productSet=total&query=%EC%A0%A4&sort=rel&timestamp=&viewType=list');
    }catch(err){
        console.error(err);
    }
}
cupNaverShop().then((html) => {
    const $ = cheerio.load(html.data);
    console.log(html.data);
    const data = {
        mainTitle : $(".basicList_mall__BC5Xu").map((idx, el) => {
            return $(el).text();
        }).toArray(),
    };
    return data;
}).then((res) => {
    let searchChar = '체레미마카';
    let pos = res.mainTitle.indexOf(searchChar);
    let count = 0;
    while(pos != -1){
        count++;
        pos = res.mainTitle.indexOf(searchChar, pos + 1);
    }
    cup_navershop = count;
    console.log(res.mainTitle);
    console.log(cup_navershop);
});*/








app.get('/', (req,res) => {
    res.render('index.ejs', {cheremimaka:cheremimaka,
        evecondom:evecondom,
        evecup:evecup,
        evejel:evejel,
        cheremimaka_home: cheremimaka_home,
        evecondom_home: evecondom_home,
        evecup_home: evecup_home,
        evejel_home: evejel_home
    });
});

app.listen(port, (req,res) => {
    console.log(`server start on localhost:${port}`);
});