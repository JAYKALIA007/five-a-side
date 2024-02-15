export const FORMATIONS = [ '1211', '2111', '1121' ]

export enum PositionsEnum {
    STRIKER_POSITION = "ST",
    MIDFIELDER_POSITION = "CM",
    DEFENDER_POSITION = "CB",
    GOALKEEPER_POSITION = "GK"
}

export const FALLBACK_IMAGE_URL = 'https://cdn-icons-png.freepik.com/512/5281/5281619.png'

export const PLAYERS = [
    //attackers
    { name: 'Pelé', position: 'ST', imgUrl: 'https://static01.nyt.com/images/2022/12/22/multimedia/00pele-photos-1-32de/00pele-photos-1-32de-mediumSquareAt3X.jpg' },
    { name: 'Diego Maradona', position: 'ST', imgUrl: 'https://i.guim.co.uk/img/media/78034441fa5334ca076a1c720ec1bced7fb68a17/0_0_3428_5168/master/3428.jpg?width=700&quality=85&auto=format&fit=max&s=3c711a1050117bb49e352843cce01f2a' },
    { name: 'Lionel Messi', position: 'ST', imgUrl: 'https://e0.365dm.com/17/10/2048x1152/skysports-lionel-messi-messi-barcelona_4125463.jpg?20171011100637' },
    { name: 'Cristiano Ronaldo', position: 'ST', imgUrl: 'https://sport360.com/wp-content/uploads/2018/04/Cristiano-Ronaldo-Real-Madrid.jpg' },
    { name: 'Johan Cruyff', position: 'ST', imgUrl:'https://www.sense14.com/images/14122016_worldcup1974_pdp_en_2.jpg' },
    { name: 'Ronaldo Nazário', position: 'ST', imgUrl: 'https://www.si.com/.image/t_share/MTY4MTg2NzgzNzk1MTI3NTY5/1998-0712-ronaldojpg.jpg' },
    { name: 'Thierry Henry', position: 'ST', imgUrl:'https://i.pinimg.com/736x/7b/d7/9b/7bd79b6a16d7e9e71df75d1b7d2da18a.jpg' },
    { name: 'Zlatan Ibrahimović', position: 'ST', imgUrl: 'https://static.footballtransfers.com/images/cn/image/upload/q_75,w_1200/footballcritic/q51rvv6nemgheheg0fsy.webp' },
    { name: 'Robert Lewandowski', position: 'ST', imgUrl: 'https://img.bundesliga.com/tachyon/sites/2/2019/08/GettyImages-1171334464.jpg?crop=358px,0px,3410px,2728px' },
    { name: 'Harry Kane', position: 'ST', imgUrl: 'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/10F68/production/_129108496_gettyimages-1475634507.jpg' },
    { name: 'Erling Haaland', position: 'ST', imgUrl: 'https://static.independent.co.uk/2023/06/09/07/GettyImages-1481676096.jpg?width=1200&height=1200&fit=crop' },
    { name: 'Karim Benzema', position: 'ST', imgUrl: 'https://assets-global.website-files.com/62fe3f004c3de985c9e10052/648e81d37dc14d20684bdd25_KB9-Landscape.jpg' },
    { name: 'Mohamed Salah', position: 'ST', imgUrl: 'https://i2-prod.liverpool.com/incoming/article21560697.ece/ALTERNATES/s1200d/0_salahcenturion.jpg' },
    { name: 'Kylian Mbappé', position: 'ST', imgUrl: 'https://phantom-marca.unidadeditorial.es/e50430816f29a9fa88b2012de3238e8d/resize/828/f/jpg/assets/multimedia/imagenes/2023/06/20/16872395216183.jpg' },
    //midfielders
    { name: 'Andres Iniesta', position: 'CM', imgUrl: 'https://barcauniversal.com/wp-content/uploads/2020/04/barcelonas-midfielder-andres-iniesta-ce-1024x725.jpg' },
    { name: 'Xavi Hernandez', position: 'CM', imgUrl: 'https://pbs.twimg.com/media/ElbagZ2UcAEpP3Y.jpg' },
    { name: 'Zinedine Zidane', position: 'CM', imgUrl: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_2250,h_1265,x_0,y_220/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01hewmw3s7yba3vyyc3d.jpg' },
    { name: 'Andrea Pirlo', position: 'CM', imgUrl: 'https://i.guim.co.uk/img/media/5d2dd3e41f13c8add43088c64595874665c31e58/0_207_3600_2160/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=158b38ed66e7e3d5ca8b548243f286bb' },
    { name: 'Paul Scholes', position: 'CM', imgUrl: 'https://www.blamefootball.com/wp-content/uploads/2018/04/RTX4OMTT.jpg' },
    { name: 'Steven Gerrard', position: 'CM', imgUrl: '' },
    { name: 'Luka Modric', position: 'CM', imgUrl: '' },
    { name: 'Kevin De Bruyne', position: 'CM', imgUrl: '' },
    { name: 'Kaka', position: 'CM', imgUrl: '' },
    { name: 'Lothar Matthaus', position: 'CM', imgUrl: '' },
    { name: 'Zico', position: 'CM', imgUrl: '' },
    { name: 'Cesc Fabregas', position: 'CM', imgUrl: '' },
    { name: 'Gheorghe Hagi', position: 'CM', imgUrl: '' },
    //   center backs
    { name: 'Franz Beckenbauer', position: 'CB', imgUrl: '' },
    { name: 'Bobby Moore', position: 'CB', imgUrl: '' },
    { name: 'Paolo Maldini', position: 'CB', imgUrl: '' },
    { name: 'Franco Baresi', position: 'CB', imgUrl: '' },
    { name: 'Fernando Hierro', position: 'CB', imgUrl: '' },
    { name: 'John Terry', position: 'CB', imgUrl: '' },
    { name: 'Alessandro Nesta', position: 'CB', imgUrl: '' },
    { name: 'Carles Puyol', position: 'CB', imgUrl: '' },
    { name: 'Fabio Cannavaro', position: 'CB', imgUrl: '' },
    { name: 'Giorgio Chiellini', position: 'CB', imgUrl: '' },
    { name: 'Maldini', position: 'CB', imgUrl: '' },
    { name: 'Rio Ferdinand', position: 'CB', imgUrl: '' },
    { name: 'Lucio', position: 'CB', imgUrl: '' },
    { name: 'Franco Baresi', position: 'CB', imgUrl: '' },
    { name: 'Fernando Hierro', position: 'CB', imgUrl: '' },
    { name: 'Thiago Silva', position: 'CB', imgUrl: '' },
    { name: 'Vincent Kompany', position: 'CB', imgUrl: '' },
    //goalkeepers
    { name: 'Lev Yashin', position: 'GK', imgUrl: '' },
    { name: 'Gianluigi Buffon', position: 'GK', imgUrl: '' },
    { name: 'Iker Casillas', position: 'GK', imgUrl: '' },
    { name: 'Dino Zoff', position: 'GK', imgUrl: '' },
    { name: 'Peter Schmeichel', position: 'GK', imgUrl: '' },
    { name: 'Oliver Kahn', position: 'GK', imgUrl: '' },
    { name: 'Edwin van der Sar', position: 'GK', imgUrl: '' },
    { name: 'Manuel Neuer', position: 'GK', imgUrl: '' },
    { name: 'Gordon Banks', position: 'GK', imgUrl: '' },
    { name: 'Petr Čech', position: 'GK', imgUrl: '' },   
];


export const SELECTED_PLAYERS_DEFAULT_VALUE = {
    player1: null,
    player2: null,
    player3: null,
    player4: null,
    player5: null,
};