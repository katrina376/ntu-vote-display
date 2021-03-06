# NTU Election Candidate Information Display Site (ntu-vote-display)
Developed for [Election &amp; Recalling Execution Community, NTU Students Association](https://vote.ntustudents.org/)  
Designed by [Hao-Yung Chan (katrina376)](https://github.com/katrina376/), 2016 Spring Semester  
Based on [Google Apps Script](https://developers.google.com/apps-script/)  
Released under [MIT License](https://github.com/katrina376/ntu-vote-display/blob/master/LICENSE)

由[國立臺灣大學學生會選舉罷免執行委員會](https://vote.ntustudents.org/)104-2委員[Hao-Yung (Katrina) Chan](https://github.com/katrina376/)開發，於104學年度第二學期第一次使用。使用[Google Apps Script](https://developers.google.com/apps-script/)建置。本專案採用[MIT授權](https://github.com/katrina376/ntu-vote-display/blob/master/LICENSE)。

## Install
必須在Google Drive上使用GAS專案檔運行。暫時沒時間寫匯出程GAS專案的工具。目前的解法是自己開GAS專案，然後把`src/`中的檔案（不分資料夾）一個一個複製貼上。請注意不要寫錯副檔名。

## Source Code Description
#### `scripts/code.gs`
主程式，可以改參數來連結不同的資料庫與檔案夾，以下為需要自行設定的參數名稱：
+ `SITESRC` : 網站網址
+ `SPREADSHEETID` : 資料庫id
+ `TOCNAME` : 資料庫目錄標題
+ `ELECTION` : 選舉名稱  

#### `views/display_[typename].html`
 不同的介面，後面字串對應資料庫中不同選舉的分類。會呼叫以下檔案，匯入其他標籤：
+ `views/page_header.html` : `<!DOCTYPE><head></head><body>` + header content  
+ `views/page_footer.html` : footer content + `</body>`
+ `styles/pure.html` : [pure.css](http://purecss.io) (called in `page_header.html`)  
+ `scripts/script.html` : javascript file (called in `page_header.html`)  
+ `styles/style.html` : css file (called in `page_header.html`)  
