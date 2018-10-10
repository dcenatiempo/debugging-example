let content = "This will only take a second, my name is Beth from ABC Realty and I just wanted to thank you for visiting my real estate website buybetterwithbeth.com and wanted to see if you had any questions right off the bat? <br><br>ABC Realty<br>555-123-4567<br>bethrealtor@fake.com<br>buybetterwithbeth.com";

function parseNote(content) {
    let contentCopy = content;
    let strippedCopy = content.replace(/<\/?[^>]+(>|$)|/gmi, '').replace(/\r\n|\n|\r/gmi, ' ').split(/ +/);
    strippedCopy = [...new Set(strippedCopy)]

    for (let i = 0; i < strippedCopy.length; i++) {
        let href;
        let linkText;
        let match;
        let re = /^(https?:\/\/)?[\da-z\.-]+\.[a-z\.]{2,6}[\w \.-]*\/?.*/gmi;
        match = re.exec(strippedCopy[i]);

        if (match) {
            linkText = match[0];

            if (linkText.indexOf('http') !== 0) {
                href = `http://${linkText}`;
            } else {
                href = linkText;
            }
            let anchor = `<a href="${href}">${linkText}</a>`;
            contentCopy = contentCopy.replace(new RegExp(strippedCopy[i], 'gi'), anchor);
        }
    }
    return contentCopy;
}

let textMessage = parseNote(content);

document.querySelector('div.text-message').innerHTML = textMessage;

/**
Results:

This will only take a second, my name is Beth from ABC Realty and I just wanted to thank you for visiting my real estate website <a href='http://buybetterwithbeth.com'>buybetterwithbeth.com</a> and wanted to see if you had any questions right off the bat? 

ABC Realty
555-123-4567
bethrealtor@fake.com
<a href='http://buybetterwithbeth.com'>buybetterwithbeth.com</a>
**/