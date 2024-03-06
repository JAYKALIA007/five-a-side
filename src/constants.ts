export const FORMATIONS = [ '1211', '2111', '1121' ]

export enum PositionsEnum {
    ATTACKER_POSITION = "ATT",
    MIDFIELDER_POSITION = "MID",
    DEFENDER_POSITION = "DEF",
    GOALKEEPER_POSITION = "GK"
}

export const FALLBACK_IMAGE_URL = 'https://cdn-icons-png.freepik.com/512/5281/5281619.png'
export const SEE_MORE_GOOLGLE_SEARCH_URL = `https://www.google.com/search?q=`

export const PLAYERS = [
    //attackers
    { name: 'Pelé', position: 'ATT', rating:93 ,country: 'BR', imgUrl: 'https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-mediumSquareAt3X.jpg',description: 'Edson Arantes do Nascimento, better known by his nickname Pelé, was a Brazilian professional footballer who played as a forward. Widely regarded as one of the greatest players of all-time, he was among the most successful and popular sports figures of the 20th century.'},
    { name: 'Diego Maradona', position: 'ATT', rating:92 ,country: 'AR', imgUrl: 'https://i.guim.co.uk/img/media/78034441fa5334ca076a1c720ec1bced7fb68a17/0_0_3428_5168/master/3428.jpg?width=700&quality=85&auto=format&fit=max&s=3c711a1050117bb49e352843cce01f2a',description: 'Diego Armando Maradona was an Argentine professional football player and manager. Widely regarded as one of the greatest players in the history of the sport, he was one of the two joint winners of the FIFA Player of the 20th Century award.'},
    { name: 'Lionel Messi', position: 'ATT', rating:94 ,country: 'AR', imgUrl: 'https://e0.365dm.com/17/10/2048x1152/skysports-lionel-messi-messi-barcelona_4125463.jpg?20171011100637', description: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team.' },
    { name: 'Cristiano Ronaldo', position: 'ATT', rating:94 ,country: 'PT', imgUrl: 'https://sport360.com/wp-content/uploads/2018/04/Cristiano-Ronaldo-Real-Madrid.jpg', description: 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.' },
    { name: 'Johan Cruyff', position: 'ATT', rating:85 ,country: 'NL', imgUrl: 'https://www.sense14.com/images/14122016_worldcup1974_pdp_en_2.jpg', description: `Hendrik Johannes Cruijff, commonly known as Johan Cruyff, was a Dutch professional football player and manager. Regarded as one of the greatest players in history and as the greatest Dutch footballer ever, he won the Ballon d'Or three times, in 1971, 1973, and 1974.` },
    { name: 'Ronaldo Nazário', position: 'ATT', rating:90 ,country: 'BR', imgUrl: 'https://www.si.com/.image/t_share/MTY4MTg2NzgzNzk1MTI3NTY5/1998-0712-ronaldojpg.jpg', description: `Ronaldo Luís Nazário de Lima, known as Ronaldo or Ronaldo Nazário, is a Brazilian former professional footballer who played as a striker. He is the owner of Brasileiro Série A club Cruzeiro and owner and president of Segunda Division club Real Valladolid.` },
    { name: 'Thierry Henry', position: 'ATT', rating:85 ,country: 'FR', imgUrl: 'https://i.pinimg.com/736x/7b/d7/9b/7bd79b6a16d7e9e71df75d1b7d2da18a.jpg', description: `Thierry Daniel Henry is a French professional football coach, pundit, sports broadcaster and former player. He is currently the manager of the France national under-21 team. He is considered one of the greatest strikers of all time, and one of the greatest players in Premier League history.` },
    { name: 'Zlatan Ibrahimović', position: 'ATT', rating:84 ,country: 'SE', imgUrl: 'https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200/footballcritic/q51rvv6nemgheheg0fsy.webp', description:`Zlatan Ibrahimović is a Swedish former professional footballer who played as a striker. Ibrahimović is known for his acrobatic strikes and volleys, technique and ball control, as well as his physical dominance.` },
    { name: 'Robert Lewandowski', position: 'ATT', rating:87 ,country: 'PL', imgUrl: 'https://img.bundesliga.com/tachyon/sites/2/2019/08/GettyImages-1171334464.jpg?crop=358px,0px,3410px,2728px', description: `Robert Lewandowski is a Polish professional footballer who plays as a striker for La Liga club Barcelona and captains the Poland national team.` },
    { name: 'Harry Kane', position: 'ATT', rating:86 ,country: 'GB', imgUrl: 'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/10F68/production/_129108496_gettyimages-1475634507.jpg', description: `Harry Edward Kane MBE is an English professional footballer who plays as a striker for Bundesliga club Bayern Munich and captains the England national team. A prolific goalscorer with strong link play, Kane is regarded as one of the best players in the world and one of the best strikers of his generation. A prolific goalscorer with strong link play, Kane is regarded as one of the best players in the world and one of the best strikers of his generation.` },
    { name: 'Wayne Rooney', position: 'ATT', rating:88 ,country: 'GB', imgUrl: 'https://lh3.googleusercontent.com/proxy/ChwQ1iLYepgHMmSNhGo0vL1-gak4Cdcf9Tiz2xUfhxqdWRZF5QQMRIq8W10scUotFCMLHMP7wRUGxeglqimbIx_TWGWYqGD66Q' },
    { name: 'Erling Haaland', position: 'ATT', rating:85 ,country: 'NO', imgUrl: 'https://static.independent.co.uk/2023/06/09/07/GettyImages-1481676096.jpg?width=1200&height=1200&fit=crop' },
    { name: 'Karim Benzema', position: 'ATT', rating:87 ,country: 'FR', imgUrl: 'https://assets-global.website-files.com/62fe3f004c3de985c9e10052/648e81d37dc14d20684bdd25_KB9-Landscape.jpg' },
    { name: 'Mohamed Salah', position: 'ATT', rating:86 ,country: 'EG', imgUrl: 'https://i2-prod.liverpool.com/incoming/article21560697.ece/ALTERNATES/s1200d/0_salahcenturion.jpg' },
    { name: 'Kylian Mbappé', position: 'ATT', rating:88 ,country: 'FR', imgUrl: 'https://phantom-marca.unidadeditorial.es/e50430816f29a9fa88b2012de3238e8d/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/20/16872395216183.jpg' },
    //midfielders
    { name: 'Andres Iniesta', position: 'MID', rating:87 ,country: 'ES', imgUrl: 'https://barcauniversal.com/wp-content/uploads/2020/04/barcelonas-midfielder-andres-iniesta-ce-1024x725.jpg' },
    { name: 'Xavi Hernandez', position: 'MID', rating:87 ,country: 'ES', imgUrl: 'https://pbs.twimg.com/media/ElbagZ2UcAEpP3Y.jpg' },
    { name: 'Zinedine Zidane', position: 'MID', rating:89 ,country: 'FR', imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_2250,h_1265,x_0,y_220/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hewmw3s7yba3vyyc3d.jpg' },
    { name: 'Andrea Pirlo', position: 'MID', rating:85 ,country: 'IT', imgUrl: 'https://i.guim.co.uk/img/media/5d2dd3e41f13c8add43088c64595874665c31e58/0_207_3600_2160/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=158b38ed66e7e3d5ca8b548243f286bb' },
    { name: 'Paul Scholes', position: 'MID', rating:85 ,country: 'GB', imgUrl: 'https://www.blamefootball.com/wp-content/uploads/2018/04/RTX4OMTT.jpg' },
    { name: 'Steven Gerrard', position: 'MID', rating:85 ,country: 'GB', imgUrl: 'https://i2-prod.dailypost.co.uk/incoming/article2993811.ece/ALTERNATES/s615/gerrard-1.jpg' },
    { name: 'Luka Modric', position: 'MID', rating:86 ,country: 'HR', imgUrl: 'https://i.dailymail.co.uk/1s/2023/09/08/10/75205965-12495533-image-a-36_1694165535376.jpg' },
    { name: 'Kevin De Bruyne', position: 'MID', rating:89 ,country: 'BE', imgUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/10/18/century-45.jpg?quality=75&width=1200&auto=webp' },
    { name: 'Kaka', position: 'MID', rating:88 ,country: 'BR', imgUrl: 'https://s3.aminoapps.com/image/7pgte7fsynspbuqr46jvej3iz5tirxws_hq.jpg' },
    { name: 'Lothar Matthaus', position: 'MID', rating:86 ,country: 'DE', imgUrl: 'https://hall-of-legends.vercel.app/playerPics/LotharMatthaus.png' },
    { name: 'Cesc Fabregas', position: 'MID', rating:84 ,country: 'ES', imgUrl: 'https://i.guim.co.uk/img/static/sys-images/Sport/Pix/pictures/2009/12/27/1261942433520/Cesc-Fabregas-001.jpg?width=465&dpr=1&s=none' },
    // center backs
    { name: 'Paolo Maldini', position: 'DEF', rating:90 ,country: 'IT', imgUrl: 'https://pbs.twimg.com/media/EAaZ0UCXsAAzLXw.jpg' },
    { name: 'Franco Baresi', position: 'DEF', rating:90 ,country: 'IT', imgUrl: 'https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2019/07/baresi.jpg?fit=2731%2C2009&ssl=1' },
    { name: 'John Terry', position: 'DEF', rating:86 ,country: 'GB', imgUrl: 'https://www.herald.ng/wp-content/uploads/2013/01/john-terry_action.jpg' },
    { name: 'Alessandro Nesta', position: 'DEF', rating:89 ,country: 'IT', imgUrl: 'https://pbs.twimg.com/media/E-MhkOAXIAMnJnS.jpg' },
    { name: 'Carles Puyol', position: 'DEF', rating:88 ,country: 'ES', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8p3k5WvCtqCnAL9zlSL_8yRg9SzhtdLbEn3W-IfA9w&s' },
    { name: 'Fabio Cannavaro', position: 'DEF', rating:87 ,country: 'IT', imgUrl: 'https://i.dailymail.co.uk/i/pix/scaled/2011/06/27/article-2008551-04F6F9280000044D-3_308x185.jpg' },
    { name: 'Giorgio Chiellini', position: 'DEF', rating:85 ,country: 'IT', imgUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9f9251655edb4121/617288c5d3250010c40f42d5/2db4bf98af2b26b8609d221ce2e4d39303ffa634.jpg?auto=webp&format=pjpg&width=3840&quality=60' },
    { name: 'Rio Ferdinand', position: 'DEF', rating:88 ,country: 'GB', imgUrl: 'https://www.planetsport.com/_next/image?url=https%3A%2F%2Fwww.planetsport.com%2Fimage-library%2Fland%2F700%2Fr%2Frio-ferdinand-man-utd-oct13.webp&w=3840&q=75' },
    { name: 'Lucio', position: 'DEF', rating:85 ,country: 'BR', imgUrl: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2008/04/06/430449-23388727-2560-1440.jpg' },
    { name: 'Fernando Hierro', position: 'DEF', rating:84 ,country: 'ES', imgUrl: 'https://pbs.twimg.com/media/ETzv0Z5XkAEVN9N.jpg' },
    { name: 'Thiago Silva', position: 'DEF', rating:83 ,country: 'BR', imgUrl: 'https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2022/11/16/thiago-silva-brazil-2014-world-cup-captain.jpg' },
    { name: 'Vincent Kompany', position: 'DEF', rating:84 ,country: 'BE', imgUrl: 'https://i2-prod.mirror.co.uk/incoming/article6450110.ece/ALTERNATES/s1200c/Manchester-City-vs-Juventus.jpg' },
    { name: 'Sergio Ramos', position: 'DEF', rating:89 ,country: 'ES', imgUrl: 'https://i.guim.co.uk/img/static/sys-images/Sport/Pix/columnists/2015/6/22/1434987797938/Sergio-Ramos--009.jpg?width=700&quality=85&auto=format&fit=max&s=61eff0db74f60a43055b8a31ebb469e5' },
    //goalkeepers
    { name: 'Lev Yashin', position: 'GK', rating:91 ,country: 'SU', imgUrl: 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd2x51gyc4ptf2q.cloudfront.net%2Fcontent%2Fuploads%2F2016%2F09%2FYashin.jpg' },
    { name: 'Gianluigi Buffon', position: 'GK', rating:88 ,country: 'IT', imgUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt06ea2221d4c70ef6/64ca25d1ebc015f819e5bb2c/buffon-news.jpg' },
    { name: 'Iker Casillas', position: 'GK', rating:87 ,country: 'ES', imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_1:1,f_auto,q_auto,g_auto/shape/cover/sport/Real-Madrid-CF-v-Juventus----UEFA-Champions-League-dddefa41dfca3b432c47fea78028cd2b.jpg' },
    { name: 'Peter Schmeichel', position: 'GK', rating:89 ,country: 'DK', imgUrl: 'https://90l.tribuna.com/images/dd/a0/c5/dda0c5d23be54891a8b85b52e36d3741500x500@2x.jpg' },
    { name: 'Oliver Kahn', position: 'GK', rating:90 ,country: 'DE', imgUrl: 'https://i.pinimg.com/564x/d2/54/f7/d254f7d0b3c903aff79eb53871302b36.jpg' },
    { name: 'Edwin van der Sar', position: 'GK', rating:89 ,country: 'NL', imgUrl: 'https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/06/vandersar.jpg?fit=1600%2C1065&ssl=1' },
    { name: 'Manuel Neuer', position: 'GK', rating:90 ,country: 'DE', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg/640px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg' },
    { name: 'Petr Čech', position: 'GK', rating:90 ,country: 'CZ', imgUrl: 'https://cdn.bleacherreport.net/images_root/slides/photos/000/865/778/88071888_original.jpg?1302967238' },
];



export const SELECTED_PLAYERS_DEFAULT_VALUE = {
    player1: null,
    player2: null,
    player3: null,
    player4: null,
    player5: null,
};


export const TEAM_MESSAGES = [
    "You've created an unstoppable 5-a-side team 🚀 Get ready for football greatness! ⚽",
    "Impressive lineup! 🌟 Your 5-a-side squad is destined for victory on the pitch. 🏆",
    "Cheers to your stellar 5-a-side team 👏 prepare for thrilling victories! 🎉",
    "Unleash the power of your 5-a-side dream team 🔥 victory awaits! ⚡",
    "Congratulations! 🎉 Your 5-a-side squad is set to dominate the football arena! 🏟️"
  ];
  
  
