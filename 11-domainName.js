function domainName(url) {
    const domain = url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\..*/, '')
    return domain
}

console.log(domainName('www.xakep.ru'))
console.log(domainName('https://youtube.com'))// https://youtube.com
