/* PARAMETERS */
var SITESRC = ''
var SPREADSHEETID = '';
var TOCNAME = '';
var ELECTION = '';

/* VARIABLES */
var DB = SpreadsheetApp.openById(SPREADSHEETID);
var TOC = openSheet(DB,TOCNAME).getDataRange()
var TID = 0;
var TITLE = '';
var TYPE = '';
var BGCOLOR = '';
var SHEET;
var ITEMS;
var PRESENTATIONS;
var SEATS;
var CANDIDATES = [];
var CAT = 0;

/* FUNCTIONS */
/////////////// GETS

function doGet(e)
{
  TID = (e.parameters.id) ? e.parameters.id : 1;
  TID = ((TID > (TOC.getValues().length - 1)) || (TID < 1)) ? 1 : TID;

  if (TID == 2)
    CAT = (e.parameters.col) ? e.parameters.col : 0;

  TITLE = TOC.getValues()[TID][1];
  TYPE = TOC.getValues()[TID][2];
  BGCOLOR = TOC.getBackgrounds()[TID][3];
  QUALIFICATIONS = TOC.getValues()[TID][4];
  SEATS = TOC.getValues()[TID][5];

  SHEET = openSheet(DB,TITLE);
  var field = SHEET.getDataRange().getValues();
  ITEMS = field[0];

  for (var i = 1; i != field.length; ++i)
  {
    var candidate = {};
    for (var j = 0; j != ITEMS.length; ++j)
    {
      var pname = (ITEMS[j].split('_').length > 1) ? (ITEMS[j].split('_')[0] + '_') : '';
      var itemname = (ITEMS[j].split('_').length > 1) ? ITEMS[j].split('_')[1] : ITEMS[j];
      if (itemname == 'Photo')
      {
        var fileid = field[i][j].split("/")[field[i][j].split("/").length - 1];
        eval( "candidate." + ITEMS[j] + " = fileid" );
      }
      else
        eval( "candidate." + ITEMS[j] + " = field[i][j];" );
    }
    CANDIDATES.push(candidate);
  }

  return HtmlService.createTemplateFromFile('display_'+TYPE).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function include(filename)
{
  return HtmlService.createTemplateFromFile(filename).evaluate().getContent();
}

function electionTitle()
{
  return ELECTION;
}

function declareTitle()
{
  return TITLE;
}

function siteSrc()
{
  return SITESRC;
}

function getTid()
{
  return TID;
}

function settingBGColor()
{
  return BGCOLOR;
}

function getSeat()
{
  return SEATS;
}

function getCandidates()
{
  return CANDIDATES;
}

function getCategory()
{
  return CAT;
}

/////////////// DOES

function openSheet(dbSS,sheetname)
{
  if (dbSS.getSheetByName(sheetname) != null) { return dbSS.getSheetByName(sheetname); }
  else { Logger.log('error: cannot find ' + sheetname); return null; };
}

function openDir(dirName)
{
  if (DriveApp.getFolderById(dirName) != null) { return DriveApp.getFolderById(dirName); }
  else { Logger.log('error: cannot find ' + dirName); return null; };
}
