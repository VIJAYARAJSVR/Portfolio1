import {BrowserRouter} from "react-router-dom";


// Below script used in Brave or Chrome Browser Js Script extensions

var From_WhatsApp = false;


console.log("processing xxxxxxxxxx: All");

var arr_unBlock_Websites = ["whatsapp", "youtube"];

var arr_Permanent_unBlock_Websites = ["https://github.com", "https://youtube.com", "https://web.whatsapp.com/"];

function is_Unblock_WebPage_Found() {
    try {

        var currentURLL = window.location.href.toLowerCase().trim();
        console.log(currentURLL);

        for (const element1 of arr_unBlock_Websites) {
            var arrkeyword = element1.toLowerCase().trim();
            if (currentURLL.indexOf(arrkeyword) != -1) {
                return true;
            }
        }

        return false;

    } catch (e) {
        console.log(e);
        return false;
    }
}

function Add_Dummy_Button() {

    //the purpose of adding a Dummy Button is if a user is typing a text in textbox and at the sametime , he/she want to execute a keyword shortcut like ;;salary, the newly typing word will be typed in the textbox, to avoid this i want to focus on another html non-texbox element.
    console.log("Add_Dummy_Button");
    try {
        const btnNode = document.createElement('button');
        btnNode.innerText = "H";
        btnNode.id = "btn_hide";
        // btnNode.style.display = "none";
        document.body.appendChild(btnNode);
    } catch (e) {
        console.log(e);
    }
}

Add_Dummy_Button();

function is_Permanent_Unblock_WebPage_Found() {
    try {

        var currentURLL = window.location.href.toLowerCase().trim();
        console.log(currentURLL);

        for (const element1 of arr_Permanent_unBlock_Websites) {
            var arrkeyword = element1.toLowerCase().trim();
            if (currentURLL.indexOf(arrkeyword) != -1) {

                return true;
            }
        }

        return false;

    } catch (e) {
        console.log(e);
        return false;
    }
}

function Add_keydown_Event(functionname, keyword, arrParam) {
    try {

        console.log("Calling Add_keydown_Event");

        if (is_Permanent_Unblock_WebPage_Found()) {
            return;
        }


        let buff = "";
        document.addEventListener("keydown", e => {


            var kky = e.key;
            var cmd_held = e.metaKey;
            console.log("The key pressed is " + kky);


            if (e.key.toLowerCase() === 'i' && e.ctrlKey) {
                // console.log("i key pressed with ctrl");
                Click_Element("#btn_hide", "xxxxxxxxxxx");
                return;
            }

            console.log("Testing");

            //-----------------FOR whatsapp---------------------------------
            if (is_Unblock_WebPage_Found()) {
                var ComposeBoxisActive = false;
                document.querySelectorAll("div").forEach((elem) => {

                    if (elem === document.activeElement) {

                        ComposeBoxisActive = true;
                    }
                });

                if (ComposeBoxisActive) {
                    ComposeBoxisActive = false;
                    return;
                }
            }
            //-----------------FOR whatsapp---------------------------------

            console.log("Testing");

            var textAreaisActive = false;

            document.querySelectorAll("textarea").forEach((elem) => {

                if (elem === document.activeElement) {

                    textAreaisActive = true;
                }
            });

            if (textAreaisActive) {
                textAreaisActive = false;
                return;
            }


            console.log("Testing");

            var inputisActive = false;

            document.querySelectorAll("input").forEach((elem) => {

                if (elem === document.activeElement) {

                    inputisActive = true;
                }
            });

            if (inputisActive) {
                inputisActive = false;
                return;
            }

            console.log("Testing");

            var selectisActive = false;

            document.querySelectorAll("select").forEach((elem) => {

                if (elem === document.activeElement) {

                    selectisActive = true;
                }
            });

            if (selectisActive) {
                selectisActive = false;
                return;
            }


            if (cmd_held) {
                console.log("metaKey pressed returning");
                return;
            }

            console.log("The key pressed is " + kky);

            if ((kky.toLowerCase() == "f12") || (kky.toLowerCase() == "enter")) {
                return;
            }


            e.preventDefault();


            buff += e.key;

            console.log("before lenght check");

            if (buff.length >= 6) {
                const lastFive = buff.substr(buff.length - 8);
                if (lastFive.toLowerCase() == keyword.trim()) {


                    if (arrParam.length != 0) {

                        console.log("going to process a functionname");

                        functionname(arrParam);
                    } else {
                        console.log("going to process a functionname");
                        functionname();
                    }


                }
            }

        });

    } catch (e) {
        console.log(e);
    }
}


// function toCamelCase(str) {
//     return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
// }

function toCamelCase(str) {

    str = str.trim().toLowerCase();

    const arrSplitBySpace = str.split(" ");
    var newStr = "";
    arrSplitBySpace.forEach((word, indx) => {
        if (indx > 0) {
            newStr += " " + word[0].toUpperCase() + word.slice(1);
        } else {
            newStr += word[0].toUpperCase() + word.slice(1);
        }
    });

    return newStr;
}

console.log("Executing From All JOB Script");

var currDate = "";
var currTime = "";
var currentURLforAppliedJOB = window.location.href;
var globalJobPortal = "Others";
var SkillsDict = {};
var PageTitlekeyword = "";
var strMatchedkeyword = "";
var tempPhoneArr = [];
var tempKeywordArr = [];
var tempLanguageArr = [];


let strExp, strEmail, strWeb, strIkey, strPhoneNo, strLanguage, strAllSkill;

// strExp=strEmail=strWeb=strIkey=strPhoneNo=strLanguage="Not Found";

strExp = "Not Found";
strEmail = "Not Found";
strWeb = "Not Found";
strIkey = "Not Found";
strPhoneNo = "Not Found";
strLanguage = "Not Found";
strAllSkill = "Not Found";


function Delay_Run(functionname, timeout) {
    try {
        setTimeout(() => {
            functionname();
        }, timeout);
    } catch (e) {
        console.log(e);
    }
}

function Click_Element(selector, functionName) {
    try {
        console.log("processing " + functionName);
        var element1 = document.querySelector(selector);
        element1.click();
        element1.focus();
    } catch (e) {
        console.log(e);
    }
}

var arr_SoftSkill = ["speaking", "Communication"];

var arr_Language = ["Tamil", "English", "Arabic", "German", "French", "Hindi", "Malayalam", "Spanish"];

var arr_Keywords = ["whatsapp", "cover letter", "Please contact", "Phone number", "cover", "letter", "Phone", "benefit", "benefits", "Required", "Salary", "Note", "important", "Question"];

var arr_Phone = ["\\+971", "971", "056", "050", "052", "56", "52", "50"];

var arr_JOB_Keywords = ["ios", "android", "stack", "software", "project", "mobile", "lead", "web", "cloud", "python", "aws", "back", "react", "node", "django", "flutter", "front", "analyst", "scientist", "angular", "data", "freelance"];

function Set_Skills() {

    try {

        var languageArr = ["C", "JAVA", "C#", "GRAPHQL", "CSHARP", "VB", "VB.NET", "OBJECTIVE C", "SWIFT", "KOTLIN", "PYTHON", "DART", "RUBY", "XML", "JSON", "R", "GO"];

        var frontendArr = ["HTML", "CSS", "LESS", "SASS", "JAVASCRIPT", "JAVA SCRIPT", "TYPESCRIPT", "ANGULAR", "AJAX", "GRUNT", "GULP", "YARN", "BOWER", "WEBPACK", "ES6", "REACT.JS", "REACT NATIVE", "JASMINE", "PHP", "WORDPRESS", "TYPE SCRIPT", "NEXT.JS", "NODEJS", "BOOTSTRAP", "REACT", "ANGULARJS", "ASP", "CSS3", "MAGNETO", "VUE", "VueJS", "REACT_NATIVE"];

        var backendArr = ["NODE.JS", "NODEJS", "ASP.NET CORE", "ASP.NET", "EXPRESS", "RUBY ON RAILS", "LARAVEL", "DJANGO", "FLASK", "API", "REST"];

        var databaseArr = ["SQL", "MYSQL", "MY SQL", "SQLSERVER", "SQL SERVER", "RDBMS", "MONGODB", "MONGO DB", "MEMCACHE", "ORACLE", "SQLITE", "ENTITYFRAMEWORK", "ENTITY FRAMEWORK", "MSSQL", "MS SQL", "REDIS", "POSTGRESQL", "POSTGRE SQL", "FIREBASE", "SQL SERVER", "SQLSERVER", "MICROSOFT SQL SERVER", "DB2", "FILEMAKER", "NEO4J", "HADOOP", "MARIADB", "PHPMYADMIN", "NoSQL", "POSTGRES"];

        var mobileArr = ["IOS", "ANDROID", "FLUTTER", "REACTNATIVE", "REACT NATIVE", "IONIC", "NATIVESCRIPT", "XAMARIN", "CORONA", "CORDOVA"];

        var cloudArr = ["AMAZON WEB SERVICES", "AWS", "GOOGLE CLOUD", "MICROSOFT AZURE", "AZURE", "KUBERNETES"];

        var applicationArr = [".NET"];

        var testArr = ["JASMINE", "KARMA", "MOCHA", "JEST"];

        var editorArr = ["ANDROID STUDIO", "XCODE", "VISUAL STUDIO CODE", "VISUAL STUDIO", "PYCHARM", "ADOBE XD"];

        var otherArr = ["VAGRANT", "MACHINE", "AI", "AGILE", "MACHINE", "GITHUB", "SEO", "IOT", "PAYMENT", "SECURITY", "GATEWAY", "ECOMMERCE", "FINTECH", "BLOCKCHAIN"];

        var datascienceArr = ["R", "STATISTICS", "MACHINE", "ARTIFICIAL", "INTELLIGENCE"];

        var devopsArr = ["DOCKER", "ANSIBLE", "JENKINS", "KUBERNETES"];

        var projectmgmtArr = ["AGIL", "SCRUM", "GIT", "JIRA", "TRELLO", "BASECAMP", "ASANA", "BITBUCKET"];


        SkillsDict = {
            "Other Skills": otherArr,
            "Data Science": datascienceArr,
            "Cloud Technologies": cloudArr,
            "Back-End Development": backendArr,
            "Database": databaseArr,
            "Languages": languageArr,
            "Mobile Development": mobileArr,
            "Front-End Development": frontendArr,
            "Application Development": applicationArr,
            "Code Editor": editorArr,
            "DevOps": devopsArr,
            "Testing": testArr,
            "Project Management": projectmgmtArr
        }


    } catch (e) {
        console.log(e);
    }
}

function PageTitles(keyword, JobPortalName) {
    try {

        switch (keyword) {
            case 'ios':
                document.title = JobPortalName + "IOS Dev";
                break;
            case 'android':
                document.title = JobPortalName + "Android";
                break;
            case 'stack':
                document.title = JobPortalName + "FULL STACK";
                break;
            case 'software':
                document.title = JobPortalName + "SOFTWARE Dev";
                break;
            case 'project':
                document.title = JobPortalName + "PROJECT";
                break;
            case 'mobile':
                document.title = JobPortalName + "Mobile";
                break;
            case 'lead':
                document.title = JobPortalName + "LEAD";
                break;
            case 'web':
                document.title = JobPortalName + "WEB Dev";
                break;
            case 'cloud':
                document.title = JobPortalName + "CLOUD";
                break;
            case 'python':
                document.title = JobPortalName + "PYTHON";
                break;
            case 'aws':
                document.title = JobPortalName + "AMAZON";
                break;
            case 'back':
                document.title = JobPortalName + "BACK END";
                break;
            case 'front':
                document.title = JobPortalName + "FRONT END";
                break;
            case 'react':
                document.title = JobPortalName + "REACT";
                break;
            case 'node':
                document.title = JobPortalName + "NODE JS";
                break;
            case 'django':
                document.title = JobPortalName + "DJANGO";
                break;
            case 'flutter':
                document.title = JobPortalName + "FLUTTER";
                break;
            case 'analyst':
                document.title = JobPortalName + "ANALYST";
                break;
            case 'scientist':
                document.title = JobPortalName + "DATA SCIENTIST";
                break;
            case 'angular':
                document.title = JobPortalName + "ANGULAR";
                break;
            case 'data':
                document.title = JobPortalName + "DATA";
                break;
            case 'freelance':
                document.title = JobPortalName + "FREELANCE";
                break;
            default:
                var kk = "";
                break;
        }


    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function SetPageTitle(JobPortalName) {
    try {

        var currentURLL = window.location.href.toLowerCase().trim();
        console.log(currentURLL);

        for (const element1 of arr_JOB_Keywords) {
            var arrkeyword = element1.toLowerCase().trim();
            if (currentURLL.indexOf(arrkeyword) != -1) {
                console.log("THE KEYWORD IS " + arrkeyword);
                PageTitlekeyword = arrkeyword;


                PageTitles(arrkeyword, JobPortalName);

                console.log("JOB keyword Found");
                return;
            }
        }


    } catch (e) {
        console.log(e);
        //  return "";
    }
}

//------------------------------------------------------------------------
function isKeywordFound(DescriptionContainerContent, strKeywordName) {
    try {

        const strKeyword = strKeywordName.toLowerCase().trim();

        var strPattern = `(^` + strKeyword + `$)|(^` + strKeyword + `[^\\w]+)|([^\\w]+` + strKeyword + `[^\\w]+)|([ ]{0,1}[^\\w]+` + strKeyword + `[ ]{0,1}[^\\w]+)`;
        console.log(strPattern);

        // (^6$)|(^6[^w]+)|([^w]+6[^w]+)|([ ]{0,1}[^w]+6[ ]{0,1}[^w]+)

        var keywordPattern = new RegExp(strPattern, "gim");

        //  console.log(keywordPattern);

        if (keywordPattern.test(DescriptionContainerContent)) {
            return true;
        }

        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

//------------------------------------------------------------------------

function CapturePhoneNumber(DescriptionContainerContent, strKeywordName) {
    try {

        let mvalue = [];

        const strPhone = strKeywordName.toLowerCase().trim();

        var strPattern = '(' + strPhone + ')\\d{7,9}|(' + strPhone + ')\\s\\d{7,9}|(' + strPhone + '-)\\d{7,9}';

        console.log(strPattern);


        var PhonePattern = new RegExp(strPattern, "gim");

        //  console.log(keywordPattern);

        if (PhonePattern.test(DescriptionContainerContent)) {
            let matchArr = DescriptionContainerContent.match(PhonePattern);
            matchArr.forEach(function (PhoneVal) {
                    console.log(PhoneVal);
                    tempPhoneArr.push(PhoneVal);
                }
            );
        }


    } catch (e) {
        console.log(e);
        return false;
    }
}

//------------------------------------------------------------------------

function Get_Matched_Keywords(DescriptionContainerContent) {
    try {

        if (DescriptionContainerContent == "") {
            return;
        }

        arr_Keywords.forEach((kkkeyword) => {
            if (isKeywordFound(DescriptionContainerContent, kkkeyword)) {
                //  console.log("The keyword matched is "+kkkeyword);
                tempKeywordArr.push(kkkeyword)
            }
        });


        var KeywordUniqueArr = [];
        tempKeywordArr.forEach((c) => {
            if (!KeywordUniqueArr.includes(c)) {
                KeywordUniqueArr.push(c);
            }
        });


        if (KeywordUniqueArr.length != 0) {
            strIkey = KeywordUniqueArr.join(" , ");
            tempKeywordArr = [];
        }


    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function Get_Matched_Languages(DescriptionContainerContent) {
    try {

        if (DescriptionContainerContent == "") {
            return;
        }

        arr_Language.forEach((kkkeyword) => {
            if (isKeywordFound(DescriptionContainerContent, kkkeyword)) {
                //  console.log("The keyword matched is "+kkkeyword);
                tempLanguageArr.push(kkkeyword)
            }
        });


        var LanguageUniqueArr = [];
        tempLanguageArr.forEach((c) => {
            if (!LanguageUniqueArr.includes(c)) {
                LanguageUniqueArr.push(c);
            }
        });


        if (LanguageUniqueArr.length != 0) {
            strLanguage = LanguageUniqueArr.join(" , ");
            tempLanguageArr = [];
        }


    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function Get_Matched_PhoneNumber(DescriptionContainerContent) {
    try {


        if (DescriptionContainerContent == "") {
            return;
        }

        arr_Phone.forEach((kkkeyword) => {
            CapturePhoneNumber(DescriptionContainerContent, kkkeyword);
        });


        var PhoneUniqueArr = [];
        tempPhoneArr.forEach((c) => {
            if (!PhoneUniqueArr.includes(c)) {
                PhoneUniqueArr.push(c);
            }
        });


        if (PhoneUniqueArr.length != 0) {
            strPhoneNo = PhoneUniqueArr.join(" , ");
            tempPhoneArr = [];
        }


    } catch (e) {
        console.log(e);
    }
}

/*--------------------------------------------------------*/

function isSkillFound(DescriptionContainerContent, strSkillName) {
    try {

        const strSkill = strSkillName.toLowerCase().trim();

        var strPattern = `(^` + strSkill + `$)|(^` + strSkill + `[^\\w]+)|([^\\w]+` + strSkill + `[^\\w]+)|([ ]{0,1}[^\\w]+` + strSkill + `[ ]{0,1}[^\\w]+)`;
        // console.log(strPattern);

        // (^6$)|(^6[^w]+)|([^w]+6[^w]+)|([ ]{0,1}[^w]+6[ ]{0,1}[^w]+)

        var techPattern = new RegExp(strPattern, "gi");

        //  console.log(techPattern);

        if (techPattern.test(DescriptionContainerContent)) {
            return true;
        }

        return false;
    } catch (e) {
        console.log(e);
        return false;
    }
}

//------------------------------------------------------------------------

function Get_Matched_Skills(DescriptionContainerContent) {
    try {

        if (DescriptionContainerContent == "") {
            return;
        }

        Set_Skills();

        var Total_MatchedArr111111 = [];
        var technologyFound111111 = false;
        var strEmpty = "    ";


        for (const [dkey, skillArr] of Object.entries(SkillsDict)) {
            skillArr.forEach((skill) => {
                if (isSkillFound(DescriptionContainerContent, skill)) {
                    technologyFound111111 = true;
                    Total_MatchedArr111111.push(strEmpty + toCamelCase(skill) + strEmpty);
                }
            });

        } // for loop ending here


        if (technologyFound111111) {
            strAllSkill = "" + Total_MatchedArr111111.join(" , ");
        }


    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function Generate_HTMLTable_ForExpWebPhoneKeyword() {
    try {

        return htmlTable = `
            <div class ="expemailweb">
    
                    <table style="width: 100%">
                    <tr>
                    <td style="font-size: 20px">Experience</td>
                    <td style="font-size: 25px;">:</td>
                    <td style="font-size: 18px;font-weight:bold">${strExp}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Emails</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold">${strEmail}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Websites</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold">${strWeb}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Contact</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold">${strPhoneNo}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Skills</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold;padding: 4px;line-height: 30px;">${strAllSkill}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Language</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold">${strLanguage}</td>
                    </tr>
                    <tr>
                    <td style="font-size: 20px">Keywords</td>
                    <td style="font-size: 25px">:</td>
                    <td style="font-size: 18px;font-weight:bold;line-height: 30px;">${strIkey}</td>
                    </tr>
                    </table>
            </div>
                `;

    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function isDate_WithinRange(_input, _start, _end) {

    try {

        function parseDate(x) {
            if (typeof x === 'string') {
                var parts = x.split(/[-: ]/g).map(Number);
                x = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
            }
            return x;
        }

        _input = parseDate(_input);
        _start = parseDate(_start);
        _end = parseDate(_end);

        return _input > _start && _input < _end;


    } catch (e) {
        console.log(e);
        return false;
    }
}

//------------------------------------------------------------------------
function isDateTime_WithinWorkingHours() {

    try {
        var status = false;
        let currentDateTime = new Date();
        let hrs = currentDateTime.getHours();
        let mnts = currentDateTime.getMinutes();
        // let mmnts = currentDateTime.getMilliseconds();


        let mt = (currentDateTime.getMonth() + 1).toString();
        mt = mt.length < 2 ? `0` + mt : mt;


        let dt = currentDateTime.getDate().toString();
        dt = dt.length < 2 ? `0` + dt : dt;

        let CCurrentDateOnly = currentDateTime.getFullYear().toString() + "-" + mt + "-" + dt;


        let CCurrentTimeOnly = hrs + ":" + mnts + ":00";

        // console.log("The Date is "+CCurrentDateOnly);

        // console.log("The Time is "+CCurrentTimeOnly);


        let CCurrentDateTime = CCurrentDateOnly + " " + CCurrentTimeOnly;

        var timingsArr = [];


        let startDate1 = CCurrentDateOnly + " 09:00:00";

        let endDate1 = CCurrentDateOnly + " 13:00:00";

        timingsArr.push([startDate1, endDate1]);


        let startDate2 = CCurrentDateOnly + " 15:00:00";

        let endDate2 = CCurrentDateOnly + " 19:00:00";

        timingsArr.push([startDate2, endDate2]);


        let startDate3 = CCurrentDateOnly + " 22:30:00";

        let endDate3 = CCurrentDateOnly + " 24:00:00";

        timingsArr.push([startDate3, endDate3]);


        for (let item of timingsArr) {

            let startDate = item[0];
            let endDate = item[1];

            console.log(startDate);
            console.log(endDate);

            status = isDate_WithinRange(CCurrentDateTime, startDate, endDate);

            console.log("Status for isDateTime_WithinWorkingHours is " + status);

            if (status) {
                break;
            }

        }

        return status;

    } catch (e) {
        console.log(e);
        return false;
    }
}

//------------------------------------------------------------------------

function PopupMessage(heading, message, xpos, ypos, msgHeading, closeAfter, width = 500, height = 300) {
    try {
        let winHtml = `<html><body><h1>&emsp;&emsp;&emsp;&emsp;&emsp;${heading}</h1> <br><${msgHeading}> ${message} </${msgHeading}></body></html > `;

        let winUrl = URL.createObjectURL(new Blob([winHtml], {
                type: 'text/html'
            }
        ));
        let win = window.open(winUrl, 'win', `width=${width},height=${height},screenX=${xpos},screenY=${ypos}`);
        window.setTimeout(function () {
            win.close();
        }, closeAfter);
    } catch (err) {
        console.log(err);
    }
}

//------------------------------------------------------------------------

function ttest() {
    try {
        console.log("Testing Testing");
    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function GetYearsAsNumberOnly(strExpp) {

    let mvalue = [];
    const YearsPattern = /\d+|\d/gi;
    let myset = new Set();

    try {

        if (YearsPattern.test(strExpp)) {
            var matchArr = strExpp.match(YearsPattern);
            matchArr.forEach(function (element) {
                    // mvalue.push(parseInt(element));
                    myset.add(parseInt(element));
                }
            );
        }

        if (myset.size > 0) {
            mvalue = Array.from(myset);
        }

        return mvalue;

    } catch (e) {
        console.log(e);
        return mvalue;
    }
}

//------------------------------------------------------------------------
function GetRelatedExperience(mvalue) {

    if (mvalue.length == 0) {
        return "not Found"
    }


    let avoidmorethanExp = 13
    let exp = ""
    let arrFinal = [];
    let mmmmmmvalue = [];
    mvalue.forEach((vval) => {
        if (vval < avoidmorethanExp) {
            mmmmmmvalue.push(vval);
        }
    });

    if (mmmmmmvalue.length > 3) {
        let lowestValue = Math.min(...mmmmmmvalue);
        let highesttValue = Math.max(...mmmmmmvalue);
        const averageValue = mmmmmmvalue.reduce((a, b) => a + b, 0) / mmmmmmvalue.length;
        mmmmmmvalue.length = 0;
        mmmmmmvalue.push(lowestValue);
        mmmmmmvalue.push(Math.round(averageValue));
        mmmmmmvalue.push(highesttValue);
    }

    mmmmmmvalue.forEach((vval) => {
        arrFinal.push(vval + " " + "years");
    });

    exp = arrFinal.join(" , ");
    console.log("the old Experience list is " + mvalue);
    console.log("the final Experience string is " + exp);
    return exp
}

//------------------------------------------------------------------------
function Extract_Experience(strExpp) {
    try {

        if (strExpp == "") {
            return "not Found";
        }

        let mvalue = [];

        mvalue = GetYearsAsNumberOnly(strExpp);

        if (mvalue.length == 0) {
            console.log("Experience are not in integer format");
            console.log(strExpp);
            return strExpp;
        }

        return GetRelatedExperience(mvalue)

    } catch (e) {
        console.log(e);
        return "not Found"
    }
}

// let strExpp = "5 years, 7+ years, 4 years, 2 years, 13 years, 16 year";
// let strExpp = "not found"
// Extract_Experience(strExpp);


//------------------------------------------------------------------------

function DisplayCurrentDateTimeInConsole(message) {
    try {
        let currentDateTime = new Date();
        let hrs = currentDateTime.getHours();
        let mnts = currentDateTime.getMinutes();
        let dt = currentDateTime.getDate().toString();
        dt = dt.length < 2 ? `0` + dt : dt;
        let mt = (currentDateTime.getMonth() + 1).toString();
        mt = mt.length < 2 ? `0` + mt : mt;
        let TodayDate = dt + `-` + mt + `-` + currentDateTime.getFullYear();
        let mTodayDate = dt + ` day - ` + mt + ` month - ` + currentDateTime.getFullYear() + ` year`;
        let AMPM = hrs >= 12 ? `PM` : `AM`;
        hrs = (hrs - 12 * parseInt(hrs / 12));
        hrs = hrs ? hrs : 12;
        mnts = mnts < 10 ? `0` + mnts : mnts;
        let result1 = hrs + `:` + mnts + ` ` + AMPM + `  ` + currentDateTime.getSeconds() + ` sec  ${TodayDate}`;
        let tttime = hrs + `:` + mnts
        let dddate = TodayDate
        let AMPM2 = (AMPM == `AM`) ? `Morning` : `Evening`;
        if ((hrs == 12) && (AMPM == `AM`)) {
            AMPM2 = `Afternoon`;
        }
        let clock = `'0 Clock`;
        let result2 = AMPM2 + ` ` + hrs + clock + ` : ` + mnts + ` minutes ` + currentDateTime.getSeconds() + ` seconds   ` + mTodayDate;
        console.log(``);
        console.log(` `);
        console.log(message + `   ` + result1);
        console.log(message + `   ` + result2);
        console.log(``);
        console.log(` `);
        // Display_overlay(tttime, AMPM, dddate);
    } catch (err) {
        console.log(err);
    }
}

function Current_Date_Time_Sec() {

    try {
        let currentDateTime = new Date();
        let hrs = currentDateTime.getHours();
        let mnts = currentDateTime.getMinutes();
        let dt = currentDateTime.getDate().toString();

        dt = dt.length < 2 ? `0` + dt : dt;

        let mt = (currentDateTime.getMonth() + 1).toString();
        mt = mt.length < 2 ? `0` + mt : mt;

        let TodayDate = dt + `_` + mt + `_` + currentDateTime.getFullYear();

        currDate = dt + `/` + mt + `/` + currentDateTime.getFullYear();

        currTime = hrs + ':' + mnts + ':' + currentDateTime.getSeconds();

        let AMPM = hrs >= 12 ? `PM` : `AM`;
        hrs = (hrs - 12 * parseInt(hrs / 12));
        hrs = hrs ? hrs : 12;
        mnts = mnts < 10 ? `0` + mnts : mnts;

        let result = "";
        result = TodayDate + `  ` + hrs + `_` + mnts + ` ` + AMPM + `  ` + currentDateTime.getSeconds() + ` sec `;

        let AMPM2 = (AMPM == `AM`) ? `Morning` : `Evening`;


        // currDate = TodayDate;

        return result;
    } catch (err) {
        console.log(err);
    }
}

class cls_JOB_Posted {
    constructor(company, designation, source, posted_datetime, recordcreated) {
        this.company = company;
        this.designation = designation;
        this.source = source;
        this.posted_datetime = posted_datetime;
        this.recordcreated = recordcreated;
    }

    toJSON() {
        return {
            Company: this.company,
            Designation: this.designation,
            Source: this.source,
            Posted_DateTime: this.posted_datetime,
            Record_Created: this.recordcreated
        }
    }
}

let arr_statusobj = [];

class cls_JOB_Status {
    constructor(company, designation, status, statusid, source, recordcreated) {
        this.company = company;
        this.designation = designation;
        this.status = status;
        this.statusid = statusid;
        this.source = source;
        this.recordcreated = recordcreated;
    }

    toJSON() {
        return {
            Company: this.company,
            Designation: this.designation,
            Status: this.status,
            StatusID: this.statusid,
            Source: this.source,
            Record_Created: this.recordcreated
        }
    }
}

class cls_Contact {
    constructor(company, designation, name, email, website, phone, recordcreated) {
        this.company = company;
        this.designation = designation;
        this.name = name;
        this.email = email;
        this.website = website;
        this.phone = phone;
        this.recordcreated = recordcreated;
    }

    toJSON() {
        return {
            Company: this.company,
            Designation: this.designation,
            Name: this.name,
            Email: this.email,
            Website: this.website,
            Phone: this.phone,
            Record_Created: this.recordcreated
        }
    }
}

class cls_QA_Later {
    constructor(category, question, answer) {
        this.category = category;
        this.question = question;
        this.answer = answer;
    }

    toJSON() {
        return {
            Category: this.category,
            Question: this.question,
            Answer: this.answer
        }
    }
}

class cls_JOB_Later {
    constructor(companyname, designation) {
        this.companyname = companyname;
        this.designation = designation;
    }

    toJSON() {
        return {
            Company: this.companyname,
            Designation: this.designation,
            WebPage: currentURLforAppliedJOB,
            CaptureDate: currDate,
            CaptureTime: currTime
        }
    }
}

class cls_Applied_JOB {
    constructor(companyname, designation, experience, jobportal, applystyle, webpage, jobstatus, description, description_html, modifieddate, recordcreated) {
        this.companyname = companyname;
        this.designation = designation;
        this.experience = experience;
        this.jobportal = jobportal;
        this.applystyle = applystyle;
        this.webpage = webpage;
        this.jobstatus = jobstatus;
        this.description = description;
        this.description_html = description_html;
        this.modifieddate = modifieddate;
        this.recordcreated = recordcreated;
    }

    DisplayInfo() {
        console.log(this.companyname);
    }


    // toJSON() {
    //     return {
    //         CompanyName:this.companyname,
    //         Designation:this.designation,
    //         WebPage:this.experience,
    //         JobPortal:this.jobportal,
    //         Experience:this.applystyle,
    //         ApplyStyle:this.webpage,
    //         JobStatus:this.jobstatus,
    //         ModifiedDate:this.modifieddate,
    //         RecordCreated:this.recordcreated
    //     }
    // }

    toJSON() {
        return {

            Company: this.companyname,
            Designation: this.designation,
            Url: this.webpage,
            PostedDate: "not found",
            AppliedDate: currDate,
            AppliedTime: currTime,
            JOBSource: this.jobportal,
            Salary: "not found",
            JobType: "not found",
            Experience: this.experience,
            Email: "not found",
            Website: "not found",
            Skills: "not found",
            Description: this.description,
            Description_HTML: this.description_html,
            Status: 1

        }
    }


}

function Remove_AppliedJOB_CaptureForm() {
    try {
        document.querySelectorAll("#jb_AppliedJOB").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }
}

function Remove_JOB_Later_Apply_CaptureForm() {
    try {
        document.querySelectorAll("#jb_JOB_Later_Apply").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }
}

function Remove_QA_Later_CaptureForm() {
    try {
        document.querySelectorAll("#jb_QA_Later").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }
}

function Remove_Contacts_CaptureForm() {
    try {
        document.querySelectorAll("#jb_Contacts").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }
}


// NOT USING ANYWHERE
function Export_Applied_JOB_JSON_From_JOBPortal(jobInfo) {

    document.querySelector("#jb_status").innerText = "Not yet Saved";

    try {

        let filename = Current_Date_Time_Sec();
        filename = "Applied_JOB_info " + filename + '.json';

        if (typeof jobInfo === "object") {
            jobInfo = JSON.stringify(jobInfo, undefined, 4)
        }

        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([jobInfo], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);

        document.querySelector("#jb_status").innerText = "Saved Successfully";

        setTimeout(() => {
            Remove_AppliedJOB_CaptureForm();
        }, 3000);

    } catch (e) {
        console.log(e);
        document.querySelector("#jb_status").innerText = "Error While Saving";
    }

}

function GetDescription_HTML_From_Anywhere() {
    try {

        var descriptionnn_html = document.querySelector("#JB_Description_html").value;
        if (descriptionnn_html == "") {
            return "not found";
        }

        descriptionnn_html = descriptionnn_html.trim().replace(/\n+/g, "");
        descriptionnn_html = descriptionnn_html.trim().replace(/\n/g, "");

        return descriptionnn_html


        return "not Found";
    } catch (e) {
        console.log(e);
        return "not Found";
    }
}

function GetDescription_From_Anywhere() {
    try {

        let descriptionnn = document.querySelector("#JB_Description").value;

        if (descriptionnn == "") {
            return "not found";
        }

        descriptionnn = descriptionnn.trim().replace(/\n+/g, "\n\n");

        descriptionnn = descriptionnn.trim().replace(/\n/g, "<div></div>&nbsp;&nbsp;&nbsp;");

        return descriptionnn


        return "not Found";
    } catch (e) {
        console.log(e);
        return "not Found";
    }
}

function Export_JOB_Status() {
    try {

        let filename = "";
        filename = Current_Date_Time_Sec();


        filename = "JOB_Status " + filename + '.json';
        jobstatusInfo = JSON.stringify(arr_statusobj, undefined, 4)


        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([jobstatusInfo], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);
        arr_statusobj = [];

    } catch (e) {
        console.log(e);
    }
}

function Export_JOB_Later_JSON_From_Anywhere() {


    let filename = "";
    try {
        filename = Current_Date_Time_Sec();
    } catch (e) {
        console.log(e);
        document.querySelector("#jb_status_Later").innerText = "Error While Saving";
    }


    document.querySelector("#jb_status_Later").innerText = "Not yet Saved";

    let companyname = document.querySelector("#JB_Company_Later").value;
    let designation = document.querySelector("#JB_Designation_Later").value;


    if ((companyname == "") || (designation == "")) {
        document.querySelector("#jb_status_Later").innerText = "Please Fill Company and Designation";
        return;
    }

    // const captued_date = new Date();

    companyname = companyname.toUpperCase();

    var jobInfo = new cls_JOB_Later(
        companyname,
        designation,
    );


    try {

        // let filename = Current_Date_Time_Sec();
        filename = "JOB_Later " + filename + '.json';

        if (typeof jobInfo === "object") {
            jobInfo = JSON.stringify(jobInfo, undefined, 4)
        }

        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([jobInfo], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);

        document.querySelector("#jb_status_Later").innerText = "Saved Successfully";

        setTimeout(() => {
            Remove_JOB_Later_Apply_CaptureForm();
        }, 3000);

    } catch (e) {
        console.log(e);
        document.querySelector("#jb_status_Later").innerText = "Error While Saving";
    }


}

function Export_Applied_JOB_JSON_From_Anywhere() {


    let filename = "";
    try {
        filename = Current_Date_Time_Sec();
    } catch (e) {
        console.log(e);
        document.querySelector("#jb_status").innerText = "Error While Saving";
    }


    document.querySelector("#jb_status").innerText = "Not yet Saved";

    let companyname = document.querySelector("#JB_Company").value;
    let designation = document.querySelector("#JB_Designation").value;
    let webpage = document.querySelector("#JB_WebPage").value;
    let jobportal = globalJobPortal;
    let experience = Extract_Experience(document.querySelector("#JB_Experience").value);
    let description_html = GetDescription_HTML_From_Anywhere();
    let description = GetDescription_From_Anywhere();


    if ((companyname == "") || (designation == "")) {
        document.querySelector("#jb_status").innerText = "Please Fill Company and Designation";
        return;
    }


    let applystyle = "Company Page";
    let jobstatus = "Applied";
    let modifieddate = new Date();
    ;
    let recordcreated = new Date();
    ;


    var jobInfo = new cls_Applied_JOB(
        companyname,
        designation,
        experience,
        jobportal,
        applystyle,
        webpage,
        jobstatus,
        description,
        description_html,
        modifieddate,
        recordcreated
    );

    // Company: Company,
    // Designation: Designation,
    // Url: Url,
    // PostedDate: PostedDate,
    // AppliedDate: AppliedDate,
    // AppliedTime: AppliedTime,
    // JOBSource: JOBSource,
    // Salary: Salary,
    // JobType: JobType,
    // Experience: Experience,
    // Email: Email,
    // Website: Website,
    // Skills: skillall,
    // Description: Description,
    // Status: Status


    try {

        // let filename = Current_Date_Time_Sec();
        filename = "Applied_JOB_info " + filename + '.json';

        if (typeof jobInfo === "object") {
            jobInfo = JSON.stringify(jobInfo, undefined, 4)
        }

        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([jobInfo], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);

        document.querySelector("#jb_status").innerText = "Saved Successfully";

        setTimeout(() => {
            Remove_AppliedJOB_CaptureForm();
        }, 3000);

    } catch (e) {
        console.log(e);
        document.querySelector("#jb_status").innerText = "Error While Saving";
    }


}

function Export_QA_Later_JSON_From_Anywhere() {


    let filename = "";
    try {
        filename = Current_Date_Time_Sec();
    } catch (e) {
        console.log(e);
        document.querySelector("#jb_QA_status_Later").innerText = "Error While Saving";
    }


    document.querySelector("#jb_QA_status_Later").innerText = "Not yet Saved";

    let category = document.querySelector("#QA_Category").value;
    let question = document.querySelector("#QA_Question").value;
    let answer = document.querySelector("#QA_Answer").value;


    if ((category == "") || (question == "") || (answer == "")) {
        document.querySelector("#jb_QA_status_Later").innerText = "Please Fill All the fields";
        return;
    }

    // const captued_date = new Date();

    var QA_Info = new cls_QA_Later(
        category.trim(),
        question.trim(),
        answer.trim()
    );


    try {

        // let filename = Current_Date_Time_Sec();
        filename = "QA_Later " + filename + '.json';

        if (typeof QA_Info === "object") {
            QA_Info = JSON.stringify(QA_Info, undefined, 4)
        }

        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([QA_Info], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);

        document.querySelector("#jb_QA_status_Later").innerText = "Saved Successfully";


    } catch (e) {
        console.log(e);
        document.querySelector("#jb_QA_status_Later").innerText = "Error While Saving";
    }


}

function Export_Posted_DateTime_JSON(company, designation, source, posted_datetime) {

    let filename = "";
    try {
        filename = Current_Date_Time_Sec();
    } catch (e) {
        console.log(e);
    }

    let recordcreated = new Date();
    var JOB_Posted_Info = new cls_JOB_Posted(
        company.trim(),
        designation.trim(),
        source.trim(),
        posted_datetime.trim(),
        recordcreated
    );

    try {
        filename = "Posted " + filename + '.json';
        if (typeof JOB_Posted_Info === "object") {
            JOB_Posted_Info = JSON.stringify(JOB_Posted_Info, undefined, 4)
        }
        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([JOB_Posted_Info], {type: 'text/json'});
        tempLink.setAttribute('href', URL.createObjectURL(taBlob));
        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();
        URL.revokeObjectURL(tempLink.href);
    } catch (e) {
        console.log(e);
    }
}

function Export_Contacts_JSON_From_Anywhere() {


    let filename = "";
    try {
        filename = Current_Date_Time_Sec();
    } catch (e) {
        console.log(e);
        document.querySelector("#Contacts_status").innerText = "Error While Saving";
    }


    document.querySelector("#Contacts_status").innerText = "Not yet Saved";


    let notFound = "not Found";

    let company = designation = name = email = website = phone = notFound;


    company = document.querySelector("#C_Company").value;
    designation = document.querySelector("#C_Designation").value;
    name = document.querySelector("#C_Name").value;
    email = document.querySelector("#C_Email").value;
    website = document.querySelector("#C_Website").value;
    phone = document.querySelector("#C_Phone").value;


    if ((email == "") && (website == "") && (phone == "")) {
        document.querySelector("#Contacts_status").innerText = "Please Fill Email/Website/Phone fields";
        return;
    }

    if ((name == "") || (company == "")) {
        document.querySelector("#Contacts_status").innerText = "Please Fill Company/Name fields";
        return;
    }

    document.querySelectorAll("#jb_Contacts input").forEach((element1) => {

        if (element1.value == "") {
            element1.value = notFound;
        }
    });

    company = document.querySelector("#C_Company").value;
    designation = document.querySelector("#C_Designation").value;
    name = document.querySelector("#C_Name").value;
    email = document.querySelector("#C_Email").value;
    website = document.querySelector("#C_Website").value;
    phone = document.querySelector("#C_Phone").value;

    let recordcreated = new Date();

    // const captued_date = new Date();

    var Contacts_Info = new cls_Contact(
        company.trim(),
        designation.trim(),
        name.trim(),
        email.trim(),
        website.trim(),
        phone.trim(),
        recordcreated
    );


    try {

        // let filename = Current_Date_Time_Sec();
        filename = "Contacts " + filename + '.json';

        if (typeof Contacts_Info === "object") {
            Contacts_Info = JSON.stringify(Contacts_Info, undefined, 4)
        }

        var tempLink = document.createElement("a");
        let textArea = document.querySelector("textarea");
        var taBlob = new Blob([Contacts_Info], {type: 'text/json'});

        tempLink.setAttribute('href', URL.createObjectURL(taBlob));

        tempLink.setAttribute('download', `${filename}`);
        tempLink.click();

        URL.revokeObjectURL(tempLink.href);

        document.querySelector("#Contacts_status").innerText = "Saved Successfully";

        document.querySelectorAll("#jb_Contacts input[type='text']").forEach((element1) => {

            element1.value = "";
        });

    } catch (e) {
        console.log(e);
        document.querySelector("#Contacts_status").innerText = "Error While Saving";
    }


}

function Generate_HTMLTable_ForJOB_Later_Apply() {
    try {

        return htmlTable = `
    
    <div id="jb_JOB_Later_Apply">
    
        <form class="Later">
        
          <fieldset>
              <div class="field">
                <label for="Company">Company</label>
                <input type="text" id="JB_Company_Later" name="Company" placeholder=" " required>
              </div>
    
              <div class="field">
              <label for="Designation">Designation</label>
                <input type="text" name="Designation" id="JB_Designation_Later" placeholder=" " required>
              </div>
    
             <div id="jb_status_Later">Not Yet Saved</div>
    
            <input  type="button" value="Save" id="JB_Save_Later">
            <input  type="button" value="Close" id="JB_Close_Later">
          
          </fieldset>
        </form>
    </div>  
                `;

    } catch (e) {
        console.log(e);
    }
}

function Generate_HTMLTable_For_Contacts() {
    try {

        return htmlTable = `
    
    <div id="jb_Contacts">
    
        <form class="frm_Contacts">
    
          <fieldset>
              <div class="field">
                <label for="company">Company</label>
                <input type="text" id="C_Company" name="company" placeholder=" " 
                required>
              </div>
    
              <div class="field">
                    <label for="designation">Designation</label>
                <input type="text" name="designation" id="C_Designation" placeholder=" " required>           
               
              </div>
              
             <div class="field">
                    <label for="name">Name</label>
                  <input type="text" name="name" id="C_Name" placeholder=" " required>            
              </div>
                       <div class="field">
                    <label for="email">Email</label>
                  <input type="text" name="email" id="C_Email" placeholder=" " required>            
              </div>
              
                       <div class="field">
                    <label for="website">Website</label>
                  <input type="text" name="website" id="C_Website" placeholder=" " required>            
              </div>
              
                       <div class="field">
                    <label for="phone">Phone</label>
                  <input type="text" name="phone" id="C_Phone" placeholder=" " required>            
              </div>
              
    
             <div id="Contacts_status">Not Yet Saved</div>
    
            <input  type="button" value="Save" id="JB_Contacts_Save">
            <input  type="button" value="Close" id="JB_Contacts_Close">
          
          </fieldset>
        </form>
    </div>  
                `;

    } catch (e) {
        console.log(e);
    }
}

function Generate_HTMLTable_For_QA_Later_Apply() {
    try {

        return htmlTable = `
    
    <div id="jb_QA_Later">
    
        <form class="Later">
    
          <fieldset>
              <div class="field">
                <label for="category">Category</label>
                <input type="text" id="QA_Category" name="category" placeholder=" " 
                required>
              </div>
    
              <div class="field">
                    <label for="question">Question</label>
                    <textarea id="QA_Question"  name="question" required="" style="
                        width: 300px;
                        height:  70px;
                    ">             
                 </textarea>
              </div>
              
             <div class="field">
                    <label for="answer">Answer</label>
                    <textarea id="QA_Answer"  name="answwer" required="" style="
                        width: 300px;
                        height:  70px;
                    ">             
                 </textarea>
              </div>
              
    
             <div id="jb_QA_status_Later">Not Yet Saved</div>
    
            <input  type="button" value="Save" id="JB_QA_Save_Later">
            <input  type="button" value="Close" id="JB_QA_Close_Later">
          
          </fieldset>
        </form>
    </div>  
                `;

    } catch (e) {
        console.log(e);
    }
}

function Generate_HTMLTable_ForJOBApply() {
    try {

        return htmlTable = `
    
    <div id="jb_AppliedJOB">
    
    <div id="jb_source">
    
     <input class="btnJOBSource" type="button"  value="Others" >
     <input class="btnJOBSource" type="button"  value="Linkedin" >
     <input class="btnJOBSource" type="button"  value="Bayt" >
     <input class="btnJOBSource" type="button"  value="Glassdoor" >
     <input class="btnJOBSource" type="button"  value="Indeed" >
     <input class="btnJOBSource" type="button"  value="Naukri" >
     <input class="btnJOBSource" type="button"  value="Monster">
     
     </div>
     
        <form class="contact">
        
          <fieldset>
    
              <div class="field">
                <label for="Company">Company</label>
                <input type="text" id="JB_Company" name="Company" placeholder=" " required>
                
              </div>
    
              <div class="field">
              <label for="Designation">Designation</label>
                <input type="text" name="Designation" id="JB_Designation" placeholder=" " required>
                
              </div>
    
              <div class="field">
                <label for="Experience">Experience</label>
                <input type="text" name="Experience" id="JB_Experience" placeholder=" ">
               
              </div>
              
            <div class="field">
                <label for="WebPage">WebPage</label>
                <input type="text" name="WebPage" id="JB_WebPage" placeholder=" " value="${currentURLforAppliedJOB}">
               
              </div>
              
            <div class="field">
                <label for="Description_HTML">Desc_HTML</label>
                <input type="text" name="Description_HTML" id="JB_Description_html" placeholder=" ">
            </div>
                    <div class="field">
                <label for="Description">Description</label>
                <input type="text" name="Description" id="JB_Description" placeholder=" ">
            </div>
             <div id="jb_status">Not Yet Saved</div>
    
            <input  type="button" value="Save" id="JB_Save">
            <input  type="button" value="Close" id="JB_Close">
          
          </fieldset>
        </form>
    </div>  
                `;

    } catch (e) {
        console.log(e);
    }
}

//------------------------------------------------------------------------

function Insert_JOB_Later_Apply_HTML() {

    try {
        document.querySelectorAll("#jb_JOB_Later_Apply").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }


    try {

        const html_JobApply = Generate_HTMLTable_ForJOB_Later_Apply();
        //  document.body.prepend(htmlTable)


        try {

            var elem = document.body.children[0];

            //   console.log("The firstChild is "+elem);

            elem.insertAdjacentHTML('beforebegin', html_JobApply);
            window.scrollTo(0, 0);

        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        console.log(e);
    }


    btnSave_Later_Setup();

    btnClose_Later_Setup();


}

function Insert_Contacts_HTML() {

    try {
        document.querySelectorAll("#jb_Contacts").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }


    try {

        const html_JobApply = Generate_HTMLTable_For_Contacts();
        //  document.body.prepend(htmlTable)


        try {

            var elem = document.body.children[0];

            //   console.log("The firstChild is "+elem);

            elem.insertAdjacentHTML('beforebegin', html_JobApply);
            window.scrollTo(0, 0);


        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        console.log(e);
    }


    btnSave_Contacts_Setup();

    btnClose_Contacts_Setup();


}

function Insert_Question_Answer_Later_Apply_HTML() {

    try {
        document.querySelectorAll("#jb_QA_Later").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }


    try {

        const html_JobApply = Generate_HTMLTable_For_QA_Later_Apply();
        //  document.body.prepend(htmlTable)


        try {

            var elem = document.body.children[0];

            //   console.log("The firstChild is "+elem);

            elem.insertAdjacentHTML('beforebegin', html_JobApply);
            window.scrollTo(0, 0);

        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        console.log(e);
    }


    btnSave_QALater_Setup();

    btnClose_QA_Later_Setup();


}

function Insert_JOBApply_HTML() {

    try {
        document.querySelectorAll("#jb_AppliedJOB").forEach((element1) => {
            element1.remove();
        });
    } catch (err) {
        console.log(err);
    }


    try {

        const html_JobApply = Generate_HTMLTable_ForJOBApply();
        //  document.body.prepend(htmlTable)


        try {

            var elem = document.body.children[0];

            //   console.log("The firstChild is "+elem);

            elem.insertAdjacentHTML('beforebegin', html_JobApply);

        } catch (e) {
            console.log(e);
        }

    } catch (e) {
        console.log(e);
    }


    btnSourceSetup();

    btnSaveSetup();

    btnCloseSetup();


}

function btnPress(ev) {

    var buttons = document.getElementsByClassName("btnJOBSource");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "white";
        buttons[i].style.color = "black";
    }

    console.log(ev.target.value);
    ev.target.style.backgroundColor = "limegreen";
    ev.target.style.color = "black";
    globalJobPortal = ev.target.value;
    console.log("The job portal is " + globalJobPortal);

}

function btnSourceSetup() {
    try {
        var buttons = document.getElementsByClassName("btnJOBSource");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", btnPress);
        }
    } catch (e) {
        console.log(e);
    }
}

function btnSaveSetup() {
    try {
        var saveBtn = document.querySelector("#JB_Save");
        saveBtn.addEventListener("click", Export_Applied_JOB_JSON_From_Anywhere);
    } catch (e) {
        console.log(e);
    }
}

function btnCloseSetup() {
    try {
        var closeBtn = document.querySelector("#JB_Close");
        closeBtn.addEventListener("click", Remove_AppliedJOB_CaptureForm);
    } catch (e) {
        console.log(e);
    }
}

function btnSave_Later_Setup() {
    try {
        var saveBtn = document.querySelector("#JB_Save_Later");
        saveBtn.addEventListener("click", Export_JOB_Later_JSON_From_Anywhere);
    } catch (e) {
        console.log(e);
    }
}

function btnClose_Later_Setup() {
    try {
        var closeBtn = document.querySelector("#JB_Close_Later");
        closeBtn.addEventListener("click", Remove_JOB_Later_Apply_CaptureForm);
    } catch (e) {
        console.log(e);
    }
}


function btnSave_QALater_Setup() {
    try {
        var saveBtn = document.querySelector("#JB_QA_Save_Later");
        saveBtn.addEventListener("click", Export_QA_Later_JSON_From_Anywhere);
    } catch (e) {
        console.log(e);
    }
}

function btnClose_QA_Later_Setup() {
    try {
        var closeBtn = document.querySelector("#JB_QA_Close_Later");
        closeBtn.addEventListener("click", Remove_QA_Later_CaptureForm);
    } catch (e) {
        console.log(e);
    }
}


function btnSave_Contacts_Setup() {
    try {
        var saveBtn = document.querySelector("#JB_Contacts_Save");
        saveBtn.addEventListener("click", Export_Contacts_JSON_From_Anywhere);
    } catch (e) {
        console.log(e);
    }
}

function btnClose_Contacts_Setup() {
    try {
        var closeBtn = document.querySelector("#JB_Contacts_Close");
        closeBtn.addEventListener("click", Remove_Contacts_CaptureForm);
    } catch (e) {
        console.log(e);
    }
}


// try {
//     Add_keydown_Event(Insert_JOBApply_HTML, ";;apform",[]);
// }
// catch (e) {
//     console.log(e);
// }


// try {
//     //for JOB LATER APPLY
//     Add_keydown_Event(Insert_JOB_Later_Apply_HTML, ";;laform",[]);
// }
// catch (e) {
//     console.log(e);
// }


// try {
//     //for JOB Question Answer APPLY
//     Add_keydown_Event(Insert_Question_Answer_Later_Apply_HTML, ";;qaform",[]);
// }
// catch (e) {
//     console.log(e);
// }


// try {
//     //for JOB Question Answer APPLY
//     Add_keydown_Event(Insert_Contacts_HTML, ";;coform",[]);
// }
// catch (e) {
//     console.log(e);
// }


// —————————————NEW IMPLEMENTATION———————————————————————————————-

class cls_function {
    constructor(functionName, arrParam) {
        this.function = functionName;
        this.arrParam = arrParam;
    }
}


const dict = {
    ";;coform": new cls_function(Insert_Contacts_HTML, []),
    ";;qaform": new cls_function(Insert_Question_Answer_Later_Apply_HTML, []),
    ";;laform": new cls_function(Insert_JOB_Later_Apply_HTML, []),
    ";;apform": new cls_function(Insert_JOBApply_HTML, [])

};

function Add_keydown_Event(dict) {

    console.log("processing Add_keydown_Event");

    if (is_Permanent_Unblock_WebPage_Found()) {
        return;
    }


    try {
        let buff0000 = "";
        document.addEventListener("keydown", e => {


            let kky = e.key;
            let cmd_held = e.metaKey;
            // console.log("The key press is " + kky+"    at "+Date.now());
            console.log("The key press is " + kky);
            // console.log(e.type);
            // console.log(e.key);
            if (e.key.toLowerCase() === 'i' && e.ctrlKey) {
                // console.log("i key pressed with ctrl");
                Click_Element("#btn_hide", "xxxxxxxxxxx");
                return;
            }

            let textAreaisActive = false;
            document.querySelectorAll("textarea").forEach((elem) => {
                if (elem === document.activeElement) {

                    textAreaisActive = true;
                }
            });

            if (textAreaisActive) {
                textAreaisActive = false;
                return;
            }


            let inputisActive = false;

            document.querySelectorAll("input").forEach((elem) => {

                if (elem === document.activeElement) {

                    inputisActive = true;
                }
            });

            if (inputisActive) {
                inputisActive = false;
                return;
            }


            let selectisActive = false;

            document.querySelectorAll("select").forEach((elem) => {

                if (elem === document.activeElement) {

                    selectisActive = true;
                }
            });

            if (selectisActive) {
                selectisActive = false;
                return;
            }

            if (cmd_held) {
                console.log("metaKey pressed returning");
                return;
            }

            if ((kky.toLowerCase() === "f12") || (kky.toLowerCase() === "enter")) {
                return;
            }

            e.preventDefault();
            buff0000 += e.key;

            if (buff0000.length >= 6) {
                const lastFive = buff0000.substr(buff0000.length - 8);
                const dictionary = dict[lastFive.toLowerCase()];
                if (dictionary) {
                    const cls_function = dictionary.function;
                    if (dictionary.arrParam.length !== 0) {
                        cls_function(dictionary.arrParam);
                    } else {
                        cls_function();
                    }
                }
            }

        });

    } catch (e) {
        console.log(e);
    }
}

Add_keydown_Event(dict);


// REMOVE THE BELOW CODE , BELOW CODE IS FOR  Linkedin People Search
// ————————————————————————————————————————————


function speak(message) {
    try {
        var msg = new SpeechSynthesisUtterance(message)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[0]
        window.speechSynthesis.speak(msg)
    } catch (err) {
        console.log(err);
    }
}


var arr_search_result_link = [];

function Open_All_Results_NewTab() {

    try {

        document.querySelectorAll(".entity-result__title-text a").forEach((element1) => {

            if (!element1.innerText.toLowerCase().trim().includes("linkedin member")) {
                arr_search_result_link.push(element1.href);

                console.log(element1.href);
            }
        });


        var delay = 0;

        arr_search_result_link.forEach((href) => {


            setTimeout(() => {

                try {
                    console.log("going to open");
                    console.log(href);
                    window.open(href, "_blank");
                } catch (e) {
                    console.log(e);
                }

            }, delay);

            //2 minutes 40 seconds
            delay = delay + 160000;

        });


        setTimeout(() => {
            speak("completed");
            speak("completed");
        }, delay);


        setTimeout(() => {
            speak("All the links are opened");
            speak("All the links are opened");
        }, delay + 2000);


    } catch (e) {
        console.log(e);
    }


}


function Click_Pagination_Next() {
    console.log("processing Click_Pagination_Next");
    try {

        document.querySelector(".artdeco-pagination__button--next").click();

    } catch (e) {
        console.log(e);
    }
}


//Windows Load starting here
window.addEventListener('load', function () {

    console.log("processing Linkedin People Search");


    const dict_people = {
        ";;pgnext": new cls_function(Click_Pagination_Next, []),
        ";;openal": new cls_function(Open_All_Results_NewTab, [])
    };


    Add_keydown_Event(dict_people);


});
//Windows Load ending here