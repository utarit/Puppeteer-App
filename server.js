const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const fs = require('fs');

const app = express();

//PARSING
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/api/puppeteer', (req, res) => {
const {link, option, name} = req.body;


  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, {waitUntil: 'networkidle2'});

    if(option == 'pdf')
    {
      await page.pdf({path: `./pdfs/${name}.pdf`, format: 'A4'});
      await browser.close();
      res.download(`./pdfs/${name}.pdf`, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }    
      });
    } else if(option == 'ss')
    {
      await page.screenshot({path: `./images/${name}.png`, fullPage: true});
      await browser.close();
      res.download(`./images/${name}.png`, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }    
      });
    } else if(option == 'dom')
    {
      let bodyHTML = await page.evaluate(() => document.body.innerHTML);
      fs.writeFile(`./texts/${name}.txt`, bodyHTML, function(err) {
        if(err) {
            return console.log(err);
        }
        res.download(`./texts/${name}.txt`, function (err) {
          if (err) {
              console.log("Error");
              console.log(err);
          } else {
              console.log("Success");
          }    
        });
    }); 
    }
    

  })();




  
})




const port = 5000;
app.listen(port, () => `Server running on port ${port}`);