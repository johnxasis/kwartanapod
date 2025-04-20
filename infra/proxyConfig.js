
module.exports = {
  proxyList: [
    "http://user:pass@smartproxy.com:10000",
    "http://user:pass@brightdata.com:22225"
  ],
  rotateProxy() {
    const idx = Math.floor(Math.random() * this.proxyList.length);
    return this.proxyList[idx];
  }
};
