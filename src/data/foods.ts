export interface Food {
  id: number;
  nome: string;
  categoria: string;
  proteine: number;
  carboidrati: number;
  grassi: number;
  kcal: number;
}

export const italianFoods: Food[] =[
  {
    "id": 1,
    "nome": "Pasta di semola",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 2,
    "nome": "Riso bianco",
    "categoria": "Cereali e derivati",
    "proteine": 7.0,
    "carboidrati": 79.0,
    "grassi": 0.6,
    "kcal": 349
  },
  {
    "id": 3,
    "nome": "Pane bianco",
    "categoria": "Cereali e derivati",
    "proteine": 8.0,
    "carboidrati": 55.0,
    "grassi": 1.6,
    "kcal": 266
  },
  {
    "id": 4,
    "nome": "Pane integrale",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 48.0,
    "grassi": 2.5,
    "kcal": 250
  },
  {
    "id": 5,
    "nome": "Pizza margherita",
    "categoria": "Cereali e derivati",
    "proteine": 12.0,
    "carboidrati": 58.0,
    "grassi": 9.0,
    "kcal": 361
  },
  {
    "id": 6,
    "nome": "Focaccia",
    "categoria": "Cereali e derivati",
    "proteine": 8.0,
    "carboidrati": 50.0,
    "grassi": 10.0,
    "kcal": 322
  },
  {
    "id": 7,
    "nome": "Grissini",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 70.0,
    "grassi": 5.0,
    "kcal": 369
  },
  {
    "id": 8,
    "nome": "Polenta (cotta)",
    "categoria": "Cereali e derivati",
    "proteine": 2.0,
    "carboidrati": 15.0,
    "grassi": 0.3,
    "kcal": 71
  },
  {
    "id": 9,
    "nome": "Farro",
    "categoria": "Cereali e derivati",
    "proteine": 15.0,
    "carboidrati": 67.0,
    "grassi": 2.0,
    "kcal": 346
  },
  {
    "id": 10,
    "nome": "Orzo perlato",
    "categoria": "Cereali e derivati",
    "proteine": 10.0,
    "carboidrati": 73.0,
    "grassi": 1.2,
    "kcal": 343
  },
  {
    "id": 11,
    "nome": "Petto di pollo",
    "categoria": "Carni e affettati",
    "proteine": 31.0,
    "carboidrati": 0.0,
    "grassi": 3.6,
    "kcal": 156
  },
  {
    "id": 12,
    "nome": "Coscia di pollo",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 9.0,
    "kcal": 189
  },
  {
    "id": 13,
    "nome": "Tacchino fesa",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 125
  },
  {
    "id": 14,
    "nome": "Manzo magro",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 8.0,
    "kcal": 176
  },
  {
    "id": 15,
    "nome": "Vitello",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 6.0,
    "kcal": 162
  },
  {
    "id": 16,
    "nome": "Lonza di maiale",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 6.0,
    "kcal": 162
  },
  {
    "id": 17,
    "nome": "Pancetta",
    "categoria": "Carni e affettati",
    "proteine": 13.0,
    "carboidrati": 0.0,
    "grassi": 40.0,
    "kcal": 412
  },
  {
    "id": 18,
    "nome": "Agnello",
    "categoria": "Carni e affettati",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 20.0,
    "kcal": 280
  },
  {
    "id": 19,
    "nome": "Coniglio",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 129
  },
  {
    "id": 20,
    "nome": "Bresaola",
    "categoria": "Carni e affettati",
    "proteine": 32.0,
    "carboidrati": 2.0,
    "grassi": 2.0,
    "kcal": 154
  },
  {
    "id": 21,
    "nome": "Prosciutto crudo",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 19.0,
    "kcal": 279
  },
  {
    "id": 22,
    "nome": "Prosciutto cotto",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 9.0,
    "kcal": 165
  },
  {
    "id": 23,
    "nome": "Salame",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 34.0,
    "kcal": 398
  },
  {
    "id": 24,
    "nome": "Mortadella",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 32.0,
    "kcal": 360
  },
  {
    "id": 25,
    "nome": "Salmone",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 13.0,
    "kcal": 197
  },
  {
    "id": 26,
    "nome": "Tonno fresco",
    "categoria": "Pesce e molluschi",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 0.8,
    "kcal": 99
  },
  {
    "id": 27,
    "nome": "Merluzzo",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.7,
    "kcal": 78
  },
  {
    "id": 28,
    "nome": "Branzino",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 2.0,
    "kcal": 102
  },
  {
    "id": 29,
    "nome": "Orata",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 125
  },
  {
    "id": 30,
    "nome": "Sardine",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 11.0,
    "kcal": 199
  },
  {
    "id": 31,
    "nome": "Gamberi",
    "categoria": "Pesce e molluschi",
    "proteine": 24.0,
    "carboidrati": 0.2,
    "grassi": 0.3,
    "kcal": 100
  },
  {
    "id": 32,
    "nome": "Polpo",
    "categoria": "Pesce e molluschi",
    "proteine": 14.0,
    "carboidrati": 4.0,
    "grassi": 1.0,
    "kcal": 81
  },
  {
    "id": 33,
    "nome": "Calamari",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 3.0,
    "grassi": 1.0,
    "kcal": 85
  },
  {
    "id": 34,
    "nome": "Cozze",
    "categoria": "Pesce e molluschi",
    "proteine": 11.0,
    "carboidrati": 3.0,
    "grassi": 2.0,
    "kcal": 74
  },
  {
    "id": 35,
    "nome": "Vongole",
    "categoria": "Pesce e molluschi",
    "proteine": 10.0,
    "carboidrati": 3.0,
    "grassi": 1.0,
    "kcal": 61
  },
  {
    "id": 36,
    "nome": "Uova intere",
    "categoria": "Uova e derivati",
    "proteine": 12.5,
    "carboidrati": 0.7,
    "grassi": 10.5,
    "kcal": 147
  },
  {
    "id": 37,
    "nome": "Albume",
    "categoria": "Uova e derivati",
    "proteine": 11.0,
    "carboidrati": 0.7,
    "grassi": 0.2,
    "kcal": 49
  },
  {
    "id": 38,
    "nome": "Tuorlo",
    "categoria": "Uova e derivati",
    "proteine": 16.0,
    "carboidrati": 0.6,
    "grassi": 30.0,
    "kcal": 336
  },
  {
    "id": 39,
    "nome": "Latte intero",
    "categoria": "Latticini e formaggi",
    "proteine": 3.3,
    "carboidrati": 5.0,
    "grassi": 3.6,
    "kcal": 66
  },
  {
    "id": 40,
    "nome": "Latte scremato",
    "categoria": "Latticini e formaggi",
    "proteine": 3.3,
    "carboidrati": 5.0,
    "grassi": 0.1,
    "kcal": 34
  },
  {
    "id": 41,
    "nome": "Yogurt bianco",
    "categoria": "Latticini e formaggi",
    "proteine": 4.0,
    "carboidrati": 6.0,
    "grassi": 1.5,
    "kcal": 54
  },
  {
    "id": 42,
    "nome": "Yogurt greco",
    "categoria": "Latticini e formaggi",
    "proteine": 10.0,
    "carboidrati": 4.0,
    "grassi": 0.4,
    "kcal": 60
  },
  {
    "id": 43,
    "nome": "Mozzarella",
    "categoria": "Latticini e formaggi",
    "proteine": 18.0,
    "carboidrati": 2.0,
    "grassi": 17.0,
    "kcal": 233
  },
  {
    "id": 44,
    "nome": "Parmigiano Reggiano",
    "categoria": "Latticini e formaggi",
    "proteine": 33.0,
    "carboidrati": 0.0,
    "grassi": 28.0,
    "kcal": 384
  },
  {
    "id": 45,
    "nome": "Grana Padano",
    "categoria": "Latticini e formaggi",
    "proteine": 32.0,
    "carboidrati": 0.0,
    "grassi": 29.0,
    "kcal": 389
  },
  {
    "id": 46,
    "nome": "Ricotta vaccina",
    "categoria": "Latticini e formaggi",
    "proteine": 8.0,
    "carboidrati": 3.0,
    "grassi": 11.0,
    "kcal": 143
  },
  {
    "id": 47,
    "nome": "Gorgonzola",
    "categoria": "Latticini e formaggi",
    "proteine": 19.0,
    "carboidrati": 0.5,
    "grassi": 28.0,
    "kcal": 330
  },
  {
    "id": 48,
    "nome": "Mela",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 49,
    "nome": "Banana",
    "categoria": "Frutta",
    "proteine": 1.3,
    "carboidrati": 23.0,
    "grassi": 0.3,
    "kcal": 100
  },
  {
    "id": 50,
    "nome": "Pera",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 51,
    "nome": "Arancia",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 12.0,
    "grassi": 0.1,
    "kcal": 52
  },
  {
    "id": 52,
    "nome": "Mandarino",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 12.0,
    "grassi": 0.3,
    "kcal": 54
  },
  {
    "id": 53,
    "nome": "Kiwi",
    "categoria": "Frutta",
    "proteine": 1.1,
    "carboidrati": 15.0,
    "grassi": 0.5,
    "kcal": 69
  },
  {
    "id": 54,
    "nome": "Fragole",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 7.0,
    "grassi": 0.3,
    "kcal": 34
  },
  {
    "id": 55,
    "nome": "Uva",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 56,
    "nome": "Pesca",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 57,
    "nome": "Albicocca",
    "categoria": "Frutta",
    "proteine": 1.0,
    "carboidrati": 11.0,
    "grassi": 0.4,
    "kcal": 52
  },
  {
    "id": 58,
    "nome": "Ananas",
    "categoria": "Frutta",
    "proteine": 0.5,
    "carboidrati": 13.0,
    "grassi": 0.1,
    "kcal": 55
  },
  {
    "id": 59,
    "nome": "Cocco",
    "categoria": "Frutta",
    "proteine": 3.3,
    "carboidrati": 15.0,
    "grassi": 33.0,
    "kcal": 370
  },
  {
    "id": 60,
    "nome": "Limone",
    "categoria": "Frutta",
    "proteine": 1.1,
    "carboidrati": 3.0,
    "grassi": 0.3,
    "kcal": 19
  },
  {
    "id": 61,
    "nome": "Melone",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 8.0,
    "grassi": 0.2,
    "kcal": 37
  },
  {
    "id": 62,
    "nome": "Anguria",
    "categoria": "Frutta",
    "proteine": 0.6,
    "carboidrati": 8.0,
    "grassi": 0.2,
    "kcal": 36
  },
  {
    "id": 63,
    "nome": "Pomodoro",
    "categoria": "Verdure",
    "proteine": 1.0,
    "carboidrati": 3.0,
    "grassi": 0.2,
    "kcal": 18
  },
  {
    "id": 64,
    "nome": "Zucchina",
    "categoria": "Verdure",
    "proteine": 1.2,
    "carboidrati": 3.1,
    "grassi": 0.3,
    "kcal": 20
  },
  {
    "id": 65,
    "nome": "Melanzana",
    "categoria": "Verdure",
    "proteine": 1.2,
    "carboidrati": 6.0,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 66,
    "nome": "Peperone",
    "categoria": "Verdure",
    "proteine": 1.0,
    "carboidrati": 6.0,
    "grassi": 0.3,
    "kcal": 31
  },
  {
    "id": 67,
    "nome": "Carota",
    "categoria": "Verdure",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.2,
    "kcal": 45
  },
  {
    "id": 68,
    "nome": "Insalata lattuga",
    "categoria": "Verdure",
    "proteine": 1.5,
    "carboidrati": 3.0,
    "grassi": 0.1,
    "kcal": 19
  },
  {
    "id": 69,
    "nome": "Broccolo",
    "categoria": "Verdure",
    "proteine": 3.0,
    "carboidrati": 7.0,
    "grassi": 0.4,
    "kcal": 44
  },
  {
    "id": 70,
    "nome": "Cavolfiore",
    "categoria": "Verdure",
    "proteine": 2.0,
    "carboidrati": 5.0,
    "grassi": 0.3,
    "kcal": 31
  },
  {
    "id": 71,
    "nome": "Spinaci",
    "categoria": "Verdure",
    "proteine": 3.0,
    "carboidrati": 3.6,
    "grassi": 0.4,
    "kcal": 30
  },
  {
    "id": 72,
    "nome": "Fagiolini",
    "categoria": "Verdure",
    "proteine": 2.0,
    "carboidrati": 7.0,
    "grassi": 0.1,
    "kcal": 37
  },
  {
    "id": 73,
    "nome": "Funghi champignon",
    "categoria": "Verdure",
    "proteine": 3.0,
    "carboidrati": 3.0,
    "grassi": 0.3,
    "kcal": 27
  },
  {
    "id": 74,
    "nome": "Noci",
    "categoria": "Frutta secca e semi",
    "proteine": 15.0,
    "carboidrati": 14.0,
    "grassi": 65.0,
    "kcal": 701
  },
  {
    "id": 75,
    "nome": "Mandorle",
    "categoria": "Frutta secca e semi",
    "proteine": 21.0,
    "carboidrati": 22.0,
    "grassi": 50.0,
    "kcal": 622
  },
  {
    "id": 76,
    "nome": "Arachidi",
    "categoria": "Frutta secca e semi",
    "proteine": 25.0,
    "carboidrati": 16.0,
    "grassi": 49.0,
    "kcal": 605
  },
  {
    "id": 77,
    "nome": "Pistacchi",
    "categoria": "Frutta secca e semi",
    "proteine": 20.0,
    "carboidrati": 28.0,
    "grassi": 45.0,
    "kcal": 597
  },
  {
    "id": 78,
    "nome": "Nocciole",
    "categoria": "Frutta secca e semi",
    "proteine": 15.0,
    "carboidrati": 17.0,
    "grassi": 60.0,
    "kcal": 668
  },
  {
    "id": 79,
    "nome": "Semi di zucca",
    "categoria": "Frutta secca e semi",
    "proteine": 30.0,
    "carboidrati": 10.0,
    "grassi": 49.0,
    "kcal": 601
  },
  {
    "id": 80,
    "nome": "Semi di girasole",
    "categoria": "Frutta secca e semi",
    "proteine": 21.0,
    "carboidrati": 20.0,
    "grassi": 51.0,
    "kcal": 623
  },
  {
    "id": 81,
    "nome": "Olio extravergine di oliva",
    "categoria": "Grassi e condimenti",
    "proteine": 0.0,
    "carboidrati": 0.0,
    "grassi": 100.0,
    "kcal": 900
  },
  {
    "id": 82,
    "nome": "Burro",
    "categoria": "Grassi e condimenti",
    "proteine": 0.5,
    "carboidrati": 0.5,
    "grassi": 82.0,
    "kcal": 742
  },
  {
    "id": 83,
    "nome": "Margarina",
    "categoria": "Grassi e condimenti",
    "proteine": 0.0,
    "carboidrati": 1.0,
    "grassi": 80.0,
    "kcal": 724
  },
  {
    "id": 84,
    "nome": "Biscotti secchi",
    "categoria": "Prodotti da forno dolci",
    "proteine": 7.0,
    "carboidrati": 72.0,
    "grassi": 15.0,
    "kcal": 451
  },
  {
    "id": 85,
    "nome": "Crackers",
    "categoria": "Snack salati",
    "proteine": 10.0,
    "carboidrati": 70.0,
    "grassi": 12.0,
    "kcal": 428
  },
  {
    "id": 86,
    "nome": "Merendine",
    "categoria": "Prodotti da forno dolci",
    "proteine": 6.0,
    "carboidrati": 55.0,
    "grassi": 22.0,
    "kcal": 442
  },
  {
    "id": 87,
    "nome": "Cornflakes",
    "categoria": "Cereali per colazione",
    "proteine": 8.0,
    "carboidrati": 84.0,
    "grassi": 1.0,
    "kcal": 377
  },
  {
    "id": 88,
    "nome": "Lenticchie secche",
    "categoria": "Legumi",
    "proteine": 25.0,
    "carboidrati": 60.0,
    "grassi": 1.0,
    "kcal": 349
  },
  {
    "id": 89,
    "nome": "Lenticchie cotte",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 0.4,
    "kcal": 120
  },
  {
    "id": 90,
    "nome": "Fagioli borlotti secchi",
    "categoria": "Legumi",
    "proteine": 23.0,
    "carboidrati": 60.0,
    "grassi": 1.5,
    "kcal": 346
  },
  {
    "id": 91,
    "nome": "Fagioli cannellini secchi",
    "categoria": "Legumi",
    "proteine": 22.0,
    "carboidrati": 61.0,
    "grassi": 1.5,
    "kcal": 346
  },
  {
    "id": 92,
    "nome": "Ceci secchi",
    "categoria": "Legumi",
    "proteine": 21.0,
    "carboidrati": 61.0,
    "grassi": 6.0,
    "kcal": 382
  },
  {
    "id": 93,
    "nome": "Ceci cotti",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 27.0,
    "grassi": 2.6,
    "kcal": 167
  },
  {
    "id": 94,
    "nome": "Piselli",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 14.0,
    "grassi": 0.4,
    "kcal": 80
  },
  {
    "id": 95,
    "nome": "Zucchero",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.0,
    "carboidrati": 100.0,
    "grassi": 0.0,
    "kcal": 400
  },
  {
    "id": 96,
    "nome": "Miele",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.3,
    "carboidrati": 82.0,
    "grassi": 0.0,
    "kcal": 329
  },
  {
    "id": 97,
    "nome": "Cioccolato fondente 70%",
    "categoria": "Dolci e dessert",
    "proteine": 7.0,
    "carboidrati": 46.0,
    "grassi": 38.0,
    "kcal": 554
  },
  {
    "id": 98,
    "nome": "Gelato alla crema",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 99,
    "nome": "Gelato alla frutta",
    "categoria": "Dolci e dessert",
    "proteine": 2.0,
    "carboidrati": 30.0,
    "grassi": 3.0,
    "kcal": 155
  },
  {
    "id": 100,
    "nome": "Tiramisù",
    "categoria": "Dolci e dessert",
    "proteine": 6.0,
    "carboidrati": 30.0,
    "grassi": 18.0,
    "kcal": 306
  },
  {
    "id": 101,
    "nome": "Acqua",
    "categoria": "Bevande",
    "proteine": 0.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 0
  },
  {
    "id": 102,
    "nome": "Bibita cola",
    "categoria": "Bevande",
    "proteine": 0.0,
    "carboidrati": 10.6,
    "grassi": 0.0,
    "kcal": 42
  },
  {
    "id": 103,
    "nome": "Aranciata",
    "categoria": "Bevande",
    "proteine": 0.0,
    "carboidrati": 11.0,
    "grassi": 0.0,
    "kcal": 44
  },
  {
    "id": 104,
    "nome": "Birra",
    "categoria": "Bevande alcoliche",
    "proteine": 0.5,
    "carboidrati": 3.5,
    "grassi": 0.0,
    "kcal": 16
  },
  {
    "id": 105,
    "nome": "Vino rosso",
    "categoria": "Bevande alcoliche",
    "proteine": 0.1,
    "carboidrati": 2.6,
    "grassi": 0.0,
    "kcal": 11
  },
  {
    "id": 106,
    "nome": "Vino bianco",
    "categoria": "Bevande alcoliche",
    "proteine": 0.1,
    "carboidrati": 2.6,
    "grassi": 0.0,
    "kcal": 11
  },
  {
    "id": 107,
    "nome": "Spaghetti (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 108,
    "nome": "Penne (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 109,
    "nome": "Rigatoni (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 110,
    "nome": "Fusilli (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 111,
    "nome": "Farfalle (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 112,
    "nome": "Linguine (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 113,
    "nome": "Tagliatelle (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 114,
    "nome": "Tortiglioni (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 115,
    "nome": "Bucatini (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 116,
    "nome": "Orecchiette (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 117,
    "nome": "Pipe (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 118,
    "nome": "Conchiglie (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 119,
    "nome": "Sedani (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 120,
    "nome": "Mezze penne (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 121,
    "nome": "Paccheri (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 122,
    "nome": "Malloreddus (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 123,
    "nome": "Strozzapreti (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 124,
    "nome": "Cavatappi (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 125,
    "nome": "Mezze maniche (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 126,
    "nome": "Lasagne secche (crudi)",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 75.0,
    "grassi": 1.5,
    "kcal": 366
  },
  {
    "id": 127,
    "nome": "Pane toscano",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 128,
    "nome": "Pane pugliese",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 129,
    "nome": "Pane carasau",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 130,
    "nome": "Pane cafone",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 131,
    "nome": "Pane di Altamura",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 132,
    "nome": "Ciabatta",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 133,
    "nome": "Rosetta",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 134,
    "nome": "Filone",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 135,
    "nome": "Pane ai cereali",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 136,
    "nome": "Pane integrale a fette",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 137,
    "nome": "Piadina",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 138,
    "nome": "Tigella",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 139,
    "nome": "Gnocco fritto",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 5.0,
    "kcal": 291
  },
  {
    "id": 140,
    "nome": "Taralli",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 141,
    "nome": "Fette biscottate",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 142,
    "nome": "Panino al latte",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 143,
    "nome": "Panino integrale",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 144,
    "nome": "Grano duro sardo",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 145,
    "nome": "Pane senza sale",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 146,
    "nome": "Pane ai semi",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 53.0,
    "grassi": 2.0,
    "kcal": 264
  },
  {
    "id": 147,
    "nome": "Riso Arborio",
    "categoria": "Cereali e derivati",
    "proteine": 7.0,
    "carboidrati": 79.0,
    "grassi": 0.6,
    "kcal": 349
  },
  {
    "id": 148,
    "nome": "Riso Carnaroli",
    "categoria": "Cereali e derivati",
    "proteine": 7.0,
    "carboidrati": 79.0,
    "grassi": 0.6,
    "kcal": 349
  },
  {
    "id": 149,
    "nome": "Riso Roma",
    "categoria": "Cereali e derivati",
    "proteine": 7.0,
    "carboidrati": 79.0,
    "grassi": 0.6,
    "kcal": 349
  },
  {
    "id": 150,
    "nome": "Riso Basmati",
    "categoria": "Cereali e derivati",
    "proteine": 8.5,
    "carboidrati": 77.0,
    "grassi": 0.6,
    "kcal": 347
  },
  {
    "id": 151,
    "nome": "Riso Jasmine",
    "categoria": "Cereali e derivati",
    "proteine": 7.0,
    "carboidrati": 80.0,
    "grassi": 0.6,
    "kcal": 353
  },
  {
    "id": 152,
    "nome": "Riso Venere",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 76.0,
    "grassi": 2.5,
    "kcal": 362
  },
  {
    "id": 153,
    "nome": "Riso integrale",
    "categoria": "Cereali e derivati",
    "proteine": 7.5,
    "carboidrati": 76.0,
    "grassi": 2.2,
    "kcal": 354
  },
  {
    "id": 154,
    "nome": "Cous cous",
    "categoria": "Cereali e derivati",
    "proteine": 13.0,
    "carboidrati": 72.0,
    "grassi": 1.0,
    "kcal": 349
  },
  {
    "id": 155,
    "nome": "Bulgur",
    "categoria": "Cereali e derivati",
    "proteine": 12.3,
    "carboidrati": 75.0,
    "grassi": 1.3,
    "kcal": 361
  },
  {
    "id": 156,
    "nome": "Quinoa",
    "categoria": "Cereali e derivati",
    "proteine": 14.0,
    "carboidrati": 64.0,
    "grassi": 6.1,
    "kcal": 367
  },
  {
    "id": 157,
    "nome": "Fiorentina di manzo",
    "categoria": "Carni e affettati",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 15.0,
    "kcal": 227
  },
  {
    "id": 158,
    "nome": "Tagliata di manzo",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 10.0,
    "kcal": 194
  },
  {
    "id": 159,
    "nome": "Scottona",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 12.0,
    "kcal": 204
  },
  {
    "id": 160,
    "nome": "Spezzatino di manzo",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 8.0,
    "kcal": 168
  },
  {
    "id": 161,
    "nome": "Salsiccia di maiale",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 0.0,
    "grassi": 25.0,
    "kcal": 293
  },
  {
    "id": 162,
    "nome": "Cotechino",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 30.0,
    "kcal": 334
  },
  {
    "id": 163,
    "nome": "Zampone",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 30.0,
    "kcal": 334
  },
  {
    "id": 164,
    "nome": "Capocollo di maiale",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 28.0,
    "kcal": 332
  },
  {
    "id": 165,
    "nome": "Carne macinata magra",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 10.0,
    "kcal": 170
  },
  {
    "id": 166,
    "nome": "Carne macinata mista",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 20.0,
    "kcal": 252
  },
  {
    "id": 167,
    "nome": "Spalla di maiale",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 21.0,
    "kcal": 273
  },
  {
    "id": 168,
    "nome": "Arrosto di tacchino",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 2.0,
    "kcal": 134
  },
  {
    "id": 169,
    "nome": "Petto di tacchino",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 125
  },
  {
    "id": 170,
    "nome": "Coscia di tacchino",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 6.0,
    "kcal": 150
  },
  {
    "id": 171,
    "nome": "Polpette di manzo",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 12.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 172,
    "nome": "Speck",
    "categoria": "Carni e affettati",
    "proteine": 30.0,
    "carboidrati": 1.0,
    "grassi": 22.0,
    "kcal": 322
  },
  {
    "id": 173,
    "nome": "Coppa",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.5,
    "grassi": 35.0,
    "kcal": 401
  },
  {
    "id": 174,
    "nome": "Lonza stagionata",
    "categoria": "Carni e affettati",
    "proteine": 28.0,
    "carboidrati": 1.0,
    "grassi": 10.0,
    "kcal": 206
  },
  {
    "id": 175,
    "nome": "Porchetta",
    "categoria": "Carni e affettati",
    "proteine": 19.0,
    "carboidrati": 1.5,
    "grassi": 25.0,
    "kcal": 307
  },
  {
    "id": 176,
    "nome": "Guanciale",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 0.0,
    "grassi": 60.0,
    "kcal": 596
  },
  {
    "id": 177,
    "nome": "Lardo",
    "categoria": "Carni e affettati",
    "proteine": 2.0,
    "carboidrati": 0.0,
    "grassi": 99.0,
    "kcal": 899
  },
  {
    "id": 178,
    "nome": "Culatello",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 1.0,
    "grassi": 12.0,
    "kcal": 216
  },
  {
    "id": 179,
    "nome": "Spalla cotta",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 2.0,
    "grassi": 12.0,
    "kcal": 184
  },
  {
    "id": 180,
    "nome": "Acciughe sott'olio (sgocciolate)",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 15.0,
    "kcal": 235
  },
  {
    "id": 181,
    "nome": "Alici fresche",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 125
  },
  {
    "id": 182,
    "nome": "Sgombro",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 13.0,
    "kcal": 197
  },
  {
    "id": 183,
    "nome": "Orata allevata",
    "categoria": "Pesce e molluschi",
    "proteine": 19.0,
    "carboidrati": 0.0,
    "grassi": 8.0,
    "kcal": 148
  },
  {
    "id": 184,
    "nome": "Trota",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 6.0,
    "kcal": 134
  },
  {
    "id": 185,
    "nome": "Spigola",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 3.0,
    "kcal": 111
  },
  {
    "id": 186,
    "nome": "Cernia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 2.0,
    "kcal": 98
  },
  {
    "id": 187,
    "nome": "Nasello",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 81
  },
  {
    "id": 188,
    "nome": "Seppie",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 1.0,
    "grassi": 1.5,
    "kcal": 82
  },
  {
    "id": 189,
    "nome": "Pecorino romano",
    "categoria": "Latticini e formaggi",
    "proteine": 32.0,
    "carboidrati": 0.0,
    "grassi": 30.0,
    "kcal": 398
  },
  {
    "id": 190,
    "nome": "Pecorino sardo",
    "categoria": "Latticini e formaggi",
    "proteine": 28.0,
    "carboidrati": 0.0,
    "grassi": 34.0,
    "kcal": 418
  },
  {
    "id": 191,
    "nome": "Asiago",
    "categoria": "Latticini e formaggi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 29.0,
    "kcal": 361
  },
  {
    "id": 192,
    "nome": "Provolone",
    "categoria": "Latticini e formaggi",
    "proteine": 26.0,
    "carboidrati": 2.1,
    "grassi": 27.0,
    "kcal": 355
  },
  {
    "id": 193,
    "nome": "Scamorza",
    "categoria": "Latticini e formaggi",
    "proteine": 23.0,
    "carboidrati": 2.0,
    "grassi": 27.0,
    "kcal": 343
  },
  {
    "id": 194,
    "nome": "Caciocavallo",
    "categoria": "Latticini e formaggi",
    "proteine": 25.0,
    "carboidrati": 2.0,
    "grassi": 33.0,
    "kcal": 405
  },
  {
    "id": 195,
    "nome": "Fontina",
    "categoria": "Latticini e formaggi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 31.0,
    "kcal": 379
  },
  {
    "id": 196,
    "nome": "Taleggio",
    "categoria": "Latticini e formaggi",
    "proteine": 21.0,
    "carboidrati": 0.1,
    "grassi": 31.0,
    "kcal": 363
  },
  {
    "id": 197,
    "nome": "Ricotta di pecora",
    "categoria": "Latticini e formaggi",
    "proteine": 11.0,
    "carboidrati": 3.0,
    "grassi": 13.0,
    "kcal": 173
  },
  {
    "id": 198,
    "nome": "Mozzarella di bufala",
    "categoria": "Latticini e formaggi",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 25.0,
    "kcal": 297
  },
  {
    "id": 199,
    "nome": "Rucola",
    "categoria": "Verdure",
    "proteine": 2.6,
    "carboidrati": 2.1,
    "grassi": 0.7,
    "kcal": 25
  },
  {
    "id": 200,
    "nome": "Radicchio",
    "categoria": "Verdure",
    "proteine": 1.4,
    "carboidrati": 3.0,
    "grassi": 0.1,
    "kcal": 18
  },
  {
    "id": 201,
    "nome": "Finocchio",
    "categoria": "Verdure",
    "proteine": 1.2,
    "carboidrati": 7.3,
    "grassi": 0.2,
    "kcal": 36
  },
  {
    "id": 202,
    "nome": "Carciofo",
    "categoria": "Verdure",
    "proteine": 3.3,
    "carboidrati": 10.5,
    "grassi": 0.2,
    "kcal": 57
  },
  {
    "id": 203,
    "nome": "Bietola",
    "categoria": "Verdure",
    "proteine": 1.8,
    "carboidrati": 3.7,
    "grassi": 0.2,
    "kcal": 24
  },
  {
    "id": 204,
    "nome": "Cavolo nero",
    "categoria": "Verdure",
    "proteine": 3.0,
    "carboidrati": 8.8,
    "grassi": 0.7,
    "kcal": 54
  },
  {
    "id": 205,
    "nome": "Cavolo cappuccio",
    "categoria": "Verdure",
    "proteine": 1.3,
    "carboidrati": 6.0,
    "grassi": 0.1,
    "kcal": 30
  },
  {
    "id": 206,
    "nome": "Zucca",
    "categoria": "Verdure",
    "proteine": 1.0,
    "carboidrati": 7.7,
    "grassi": 0.1,
    "kcal": 36
  },
  {
    "id": 207,
    "nome": "Porro",
    "categoria": "Verdure",
    "proteine": 1.5,
    "carboidrati": 14.0,
    "grassi": 0.3,
    "kcal": 65
  },
  {
    "id": 208,
    "nome": "Cipolla",
    "categoria": "Verdure",
    "proteine": 1.1,
    "carboidrati": 9.3,
    "grassi": 0.1,
    "kcal": 42
  },
  {
    "id": 209,
    "nome": "Aglio",
    "categoria": "Verdure",
    "proteine": 6.4,
    "carboidrati": 33.0,
    "grassi": 0.5,
    "kcal": 162
  },
  {
    "id": 210,
    "nome": "Asparagi",
    "categoria": "Verdure",
    "proteine": 2.2,
    "carboidrati": 3.9,
    "grassi": 0.2,
    "kcal": 26
  },
  {
    "id": 211,
    "nome": "Sedano",
    "categoria": "Verdure",
    "proteine": 0.7,
    "carboidrati": 3.0,
    "grassi": 0.2,
    "kcal": 17
  },
  {
    "id": 212,
    "nome": "Rape",
    "categoria": "Verdure",
    "proteine": 1.1,
    "carboidrati": 6.0,
    "grassi": 0.1,
    "kcal": 29
  },
  {
    "id": 213,
    "nome": "Indivia",
    "categoria": "Verdure",
    "proteine": 1.4,
    "carboidrati": 3.4,
    "grassi": 0.2,
    "kcal": 21
  },
  {
    "id": 214,
    "nome": "Scarola",
    "categoria": "Verdure",
    "proteine": 1.5,
    "carboidrati": 2.9,
    "grassi": 0.2,
    "kcal": 19
  },
  {
    "id": 215,
    "nome": "Cime di rapa",
    "categoria": "Verdure",
    "proteine": 3.2,
    "carboidrati": 2.7,
    "grassi": 0.3,
    "kcal": 26
  },
  {
    "id": 216,
    "nome": "Fichi",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 19.0,
    "grassi": 0.3,
    "kcal": 82
  },
  {
    "id": 217,
    "nome": "Ciliegie",
    "categoria": "Frutta",
    "proteine": 1.0,
    "carboidrati": 16.0,
    "grassi": 0.2,
    "kcal": 70
  },
  {
    "id": 218,
    "nome": "Susine",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 11.0,
    "grassi": 0.3,
    "kcal": 50
  },
  {
    "id": 219,
    "nome": "Prugne secche",
    "categoria": "Frutta",
    "proteine": 2.2,
    "carboidrati": 64.0,
    "grassi": 0.4,
    "kcal": 268
  },
  {
    "id": 220,
    "nome": "Mandorle fresche",
    "categoria": "Frutta",
    "proteine": 8.0,
    "carboidrati": 6.0,
    "grassi": 55.0,
    "kcal": 551
  },
  {
    "id": 221,
    "nome": "Pompelmo",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 11.0,
    "grassi": 0.1,
    "kcal": 48
  },
  {
    "id": 222,
    "nome": "Pompelmo rosa",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 11.0,
    "grassi": 0.1,
    "kcal": 48
  },
  {
    "id": 223,
    "nome": "Melagrana",
    "categoria": "Frutta",
    "proteine": 1.7,
    "carboidrati": 19.0,
    "grassi": 1.2,
    "kcal": 94
  },
  {
    "id": 224,
    "nome": "Mirtilli",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 14.5,
    "grassi": 0.3,
    "kcal": 64
  },
  {
    "id": 225,
    "nome": "More",
    "categoria": "Frutta",
    "proteine": 1.4,
    "carboidrati": 10.0,
    "grassi": 0.5,
    "kcal": 50
  },
  {
    "id": 226,
    "nome": "Lamponi",
    "categoria": "Frutta",
    "proteine": 1.2,
    "carboidrati": 12.0,
    "grassi": 0.6,
    "kcal": 58
  },
  {
    "id": 227,
    "nome": "Pistacchio fresco",
    "categoria": "Frutta",
    "proteine": 10.0,
    "carboidrati": 28.0,
    "grassi": 45.0,
    "kcal": 557
  },
  {
    "id": 228,
    "nome": "Pera coscia",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 229,
    "nome": "Pera abate",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 230,
    "nome": "Mela fuji",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 231,
    "nome": "Mela granny smith",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 12.0,
    "grassi": 0.2,
    "kcal": 51
  },
  {
    "id": 232,
    "nome": "Mela golden",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 233,
    "nome": "Soia secca",
    "categoria": "Legumi",
    "proteine": 36.0,
    "carboidrati": 30.0,
    "grassi": 20.0,
    "kcal": 444
  },
  {
    "id": 234,
    "nome": "Tofu",
    "categoria": "Legumi",
    "proteine": 8.0,
    "carboidrati": 2.0,
    "grassi": 4.0,
    "kcal": 76
  },
  {
    "id": 235,
    "nome": "Tempeh",
    "categoria": "Legumi",
    "proteine": 20.0,
    "carboidrati": 9.0,
    "grassi": 11.0,
    "kcal": 215
  },
  {
    "id": 236,
    "nome": "Edamame",
    "categoria": "Legumi",
    "proteine": 11.0,
    "carboidrati": 8.0,
    "grassi": 5.0,
    "kcal": 121
  },
  {
    "id": 237,
    "nome": "Fave secche",
    "categoria": "Legumi",
    "proteine": 27.0,
    "carboidrati": 58.0,
    "grassi": 2.0,
    "kcal": 358
  },
  {
    "id": 238,
    "nome": "Fave fresche",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 19.0,
    "grassi": 0.4,
    "kcal": 100
  },
  {
    "id": 239,
    "nome": "Lupini",
    "categoria": "Legumi",
    "proteine": 16.0,
    "carboidrati": 9.0,
    "grassi": 3.0,
    "kcal": 127
  },
  {
    "id": 240,
    "nome": "Pandoro",
    "categoria": "Dolci e dessert",
    "proteine": 7.0,
    "carboidrati": 57.0,
    "grassi": 27.0,
    "kcal": 499
  },
  {
    "id": 241,
    "nome": "Panettone",
    "categoria": "Dolci e dessert",
    "proteine": 7.0,
    "carboidrati": 54.0,
    "grassi": 19.0,
    "kcal": 415
  },
  {
    "id": 242,
    "nome": "Colomba",
    "categoria": "Dolci e dessert",
    "proteine": 8.0,
    "carboidrati": 52.0,
    "grassi": 22.0,
    "kcal": 438
  },
  {
    "id": 243,
    "nome": "Cantucci",
    "categoria": "Dolci e dessert",
    "proteine": 10.0,
    "carboidrati": 70.0,
    "grassi": 12.0,
    "kcal": 428
  },
  {
    "id": 244,
    "nome": "Torroncini",
    "categoria": "Dolci e dessert",
    "proteine": 6.0,
    "carboidrati": 60.0,
    "grassi": 12.0,
    "kcal": 372
  },
  {
    "id": 245,
    "nome": "Amaretti",
    "categoria": "Dolci e dessert",
    "proteine": 8.0,
    "carboidrati": 64.0,
    "grassi": 12.0,
    "kcal": 396
  },
  {
    "id": 246,
    "nome": "Babà",
    "categoria": "Dolci e dessert",
    "proteine": 6.0,
    "carboidrati": 44.0,
    "grassi": 8.0,
    "kcal": 272
  },
  {
    "id": 247,
    "nome": "Sfogliatella",
    "categoria": "Dolci e dessert",
    "proteine": 6.0,
    "carboidrati": 45.0,
    "grassi": 22.0,
    "kcal": 402
  },
  {
    "id": 248,
    "nome": "Cannolo siciliano",
    "categoria": "Dolci e dessert",
    "proteine": 8.0,
    "carboidrati": 41.0,
    "grassi": 18.0,
    "kcal": 358
  },
  {
    "id": 249,
    "nome": "Pastiera napoletana",
    "categoria": "Dolci e dessert",
    "proteine": 8.0,
    "carboidrati": 48.0,
    "grassi": 16.0,
    "kcal": 368
  },
  {
    "id": 250,
    "nome": "Passata di pomodoro",
    "categoria": "Salse e condimenti",
    "proteine": 1.5,
    "carboidrati": 4.0,
    "grassi": 0.2,
    "kcal": 24
  },
  {
    "id": 251,
    "nome": "Sugo al basilico",
    "categoria": "Salse e condimenti",
    "proteine": 1.5,
    "carboidrati": 6.0,
    "grassi": 4.0,
    "kcal": 66
  },
  {
    "id": 252,
    "nome": "Pesto alla genovese",
    "categoria": "Salse e condimenti",
    "proteine": 3.0,
    "carboidrati": 6.0,
    "grassi": 45.0,
    "kcal": 441
  },
  {
    "id": 253,
    "nome": "Ragù alla bolognese",
    "categoria": "Salse e condimenti",
    "proteine": 10.0,
    "carboidrati": 5.0,
    "grassi": 12.0,
    "kcal": 168
  },
  {
    "id": 254,
    "nome": "Salsa di pomodoro pronta",
    "categoria": "Salse e condimenti",
    "proteine": 1.2,
    "carboidrati": 6.0,
    "grassi": 1.5,
    "kcal": 42
  },
  {
    "id": 255,
    "nome": "Maionese",
    "categoria": "Salse e condimenti",
    "proteine": 1.0,
    "carboidrati": 1.0,
    "grassi": 75.0,
    "kcal": 683
  },
  {
    "id": 256,
    "nome": "Ketchup",
    "categoria": "Salse e condimenti",
    "proteine": 1.3,
    "carboidrati": 27.0,
    "grassi": 0.1,
    "kcal": 114
  },
  {
    "id": 257,
    "nome": "Senape",
    "categoria": "Salse e condimenti",
    "proteine": 5.0,
    "carboidrati": 6.0,
    "grassi": 6.0,
    "kcal": 98
  },
  {
    "id": 258,
    "nome": "Succo di arancia 100%",
    "categoria": "Bevande",
    "proteine": 0.7,
    "carboidrati": 10.0,
    "grassi": 0.2,
    "kcal": 45
  },
  {
    "id": 259,
    "nome": "Succo di mela 100%",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 11.0,
    "grassi": 0.2,
    "kcal": 47
  },
  {
    "id": 260,
    "nome": "Tè freddo zuccherato",
    "categoria": "Bevande",
    "proteine": 0.0,
    "carboidrati": 8.5,
    "grassi": 0.0,
    "kcal": 34
  },
  {
    "id": 261,
    "nome": "Caffè espresso (senza zucchero)",
    "categoria": "Bevande",
    "proteine": 0.1,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 0
  },
  {
    "id": 262,
    "nome": "Cappuccino",
    "categoria": "Bevande",
    "proteine": 3.5,
    "carboidrati": 4.7,
    "grassi": 2.5,
    "kcal": 55
  },
  {
    "id": 263,
    "nome": "Latte di soia",
    "categoria": "Bevande",
    "proteine": 3.3,
    "carboidrati": 2.7,
    "grassi": 1.9,
    "kcal": 41
  },
  {
    "id": 264,
    "nome": "Acqua tonica",
    "categoria": "Bevande",
    "proteine": 0.0,
    "carboidrati": 8.9,
    "grassi": 0.0,
    "kcal": 36
  },
  {
    "id": 265,
    "nome": "Spremuta di limone",
    "categoria": "Bevande",
    "proteine": 0.4,
    "carboidrati": 2.5,
    "grassi": 0.2,
    "kcal": 13
  },
  {
    "id": 266,
    "nome": "Lasagne alla bolognese",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 13.0,
    "grassi": 9.0,
    "kcal": 169
  },
  {
    "id": 267,
    "nome": "Carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 10.0,
    "grassi": 15.0,
    "kcal": 223
  },
  {
    "id": 268,
    "nome": "Amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 7.0,
    "grassi": 13.0,
    "kcal": 181
  },
  {
    "id": 269,
    "nome": "Pesto e pasta (condita)",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 20.0,
    "grassi": 10.0,
    "kcal": 202
  },
  {
    "id": 270,
    "nome": "Risotto alla milanese",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 23.0,
    "grassi": 8.0,
    "kcal": 192
  },
  {
    "id": 271,
    "nome": "Parmigiana di melanzane",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 8.0,
    "grassi": 10.0,
    "kcal": 150
  },
  {
    "id": 272,
    "nome": "Minestrone",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 7.0,
    "grassi": 1.0,
    "kcal": 45
  },
  {
    "id": 273,
    "nome": "Ribollita",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 9.0,
    "grassi": 2.0,
    "kcal": 66
  },
  {
    "id": 274,
    "nome": "Panzanella",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 17.0,
    "grassi": 6.0,
    "kcal": 134
  },
  {
    "id": 275,
    "nome": "Cassoeula",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 20.0,
    "kcal": 252
  },
  {
    "id": 276,
    "nome": "Pollo alla cacciatora",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 2.0,
    "grassi": 8.0,
    "kcal": 136
  },
  {
    "id": 277,
    "nome": "Vitello tonnato",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 2.0,
    "grassi": 12.0,
    "kcal": 188
  },
  {
    "id": 278,
    "nome": "Baccalà alla vicentina",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 5.0,
    "grassi": 14.0,
    "kcal": 210
  },
  {
    "id": 279,
    "nome": "Caponata",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 10.0,
    "grassi": 7.0,
    "kcal": 111
  },
  {
    "id": 280,
    "nome": "Ossobuco",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 10.0,
    "kcal": 162
  },
  {
    "id": 281,
    "nome": "Uvetta",
    "categoria": "Frutta secca e disidratata",
    "proteine": 3.1,
    "carboidrati": 79.0,
    "grassi": 0.5,
    "kcal": 333
  },
  {
    "id": 282,
    "nome": "Datteri",
    "categoria": "Frutta secca e disidratata",
    "proteine": 2.0,
    "carboidrati": 75.0,
    "grassi": 0.4,
    "kcal": 312
  },
  {
    "id": 283,
    "nome": "Albicocche secche",
    "categoria": "Frutta secca e disidratata",
    "proteine": 3.4,
    "carboidrati": 63.0,
    "grassi": 0.5,
    "kcal": 270
  },
  {
    "id": 284,
    "nome": "Fichi secchi",
    "categoria": "Frutta secca e disidratata",
    "proteine": 3.3,
    "carboidrati": 64.0,
    "grassi": 1.0,
    "kcal": 278
  },
  {
    "id": 285,
    "nome": "Pasta integrale",
    "categoria": "Cereali e derivati",
    "proteine": 14.0,
    "carboidrati": 70.0,
    "grassi": 2.5,
    "kcal": 358
  },
  {
    "id": 286,
    "nome": "Spaghetti integrali",
    "categoria": "Cereali e derivati",
    "proteine": 14.0,
    "carboidrati": 70.0,
    "grassi": 2.5,
    "kcal": 358
  },
  {
    "id": 287,
    "nome": "Penne integrali",
    "categoria": "Cereali e derivati",
    "proteine": 14.0,
    "carboidrati": 70.0,
    "grassi": 2.5,
    "kcal": 358
  },
  {
    "id": 288,
    "nome": "Gnocchi di patate",
    "categoria": "Cereali e derivati",
    "proteine": 3.0,
    "carboidrati": 32.0,
    "grassi": 0.4,
    "kcal": 144
  },
  {
    "id": 289,
    "nome": "Lasagne fresche",
    "categoria": "Cereali e derivati",
    "proteine": 10.0,
    "carboidrati": 55.0,
    "grassi": 3.0,
    "kcal": 287
  },
  {
    "id": 290,
    "nome": "Pane senza glutine",
    "categoria": "Cereali e derivati",
    "proteine": 3.0,
    "carboidrati": 45.0,
    "grassi": 5.0,
    "kcal": 237
  },
  {
    "id": 291,
    "nome": "Pomodori ciliegini",
    "categoria": "Verdure",
    "proteine": 0.9,
    "carboidrati": 3.0,
    "grassi": 0.2,
    "kcal": 17
  },
  {
    "id": 292,
    "nome": "Pomodori datterini",
    "categoria": "Verdure",
    "proteine": 0.9,
    "carboidrati": 3.1,
    "grassi": 0.2,
    "kcal": 18
  },
  {
    "id": 293,
    "nome": "Insalata iceberg",
    "categoria": "Verdure",
    "proteine": 1.0,
    "carboidrati": 2.9,
    "grassi": 0.1,
    "kcal": 16
  },
  {
    "id": 294,
    "nome": "Insalata rucola",
    "categoria": "Verdure",
    "proteine": 2.6,
    "carboidrati": 2.1,
    "grassi": 0.7,
    "kcal": 25
  },
  {
    "id": 295,
    "nome": "Cetriolo",
    "categoria": "Verdure",
    "proteine": 0.7,
    "carboidrati": 3.6,
    "grassi": 0.1,
    "kcal": 18
  },
  {
    "id": 296,
    "nome": "Carote baby",
    "categoria": "Verdure",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.2,
    "kcal": 45
  },
  {
    "id": 297,
    "nome": "Zucca delica",
    "categoria": "Verdure",
    "proteine": 1.0,
    "carboidrati": 7.5,
    "grassi": 0.1,
    "kcal": 35
  },
  {
    "id": 298,
    "nome": "Pera williams",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 299,
    "nome": "Arancia tarocco",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 12.0,
    "grassi": 0.1,
    "kcal": 52
  },
  {
    "id": 300,
    "nome": "Arancia navel",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 11.8,
    "grassi": 0.1,
    "kcal": 52
  },
  {
    "id": 301,
    "nome": "Mandarancio",
    "categoria": "Frutta",
    "proteine": 0.8,
    "carboidrati": 12.5,
    "grassi": 0.2,
    "kcal": 55
  },
  {
    "id": 302,
    "nome": "Clementine",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 12.0,
    "grassi": 0.2,
    "kcal": 53
  },
  {
    "id": 303,
    "nome": "Pesca noce",
    "categoria": "Frutta",
    "proteine": 1.1,
    "carboidrati": 11.0,
    "grassi": 0.3,
    "kcal": 51
  },
  {
    "id": 304,
    "nome": "Hamburger bovino",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 20.0,
    "kcal": 252
  },
  {
    "id": 305,
    "nome": "Hamburger pollo",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 5.0,
    "grassi": 10.0,
    "kcal": 178
  },
  {
    "id": 306,
    "nome": "Wurstel suino",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 2.0,
    "grassi": 28.0,
    "kcal": 308
  },
  {
    "id": 307,
    "nome": "Wurstel pollo",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 3.0,
    "grassi": 22.0,
    "kcal": 258
  },
  {
    "id": 308,
    "nome": "Arista di maiale",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 0.0,
    "grassi": 13.0,
    "kcal": 205
  },
  {
    "id": 309,
    "nome": "Tonno in scatola sgocciolato",
    "categoria": "Pesce e molluschi",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 6.0,
    "kcal": 158
  },
  {
    "id": 310,
    "nome": "Sardine sott'olio (sgocciolate)",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 18.0,
    "kcal": 262
  },
  {
    "id": 311,
    "nome": "Gamberetti",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 1.0,
    "kcal": 93
  },
  {
    "id": 312,
    "nome": "Stracchino",
    "categoria": "Latticini e formaggi",
    "proteine": 17.0,
    "carboidrati": 2.0,
    "grassi": 26.0,
    "kcal": 310
  },
  {
    "id": 313,
    "nome": "Robiola",
    "categoria": "Latticini e formaggi",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 25.0,
    "kcal": 293
  },
  {
    "id": 314,
    "nome": "Mascarpone",
    "categoria": "Latticini e formaggi",
    "proteine": 6.0,
    "carboidrati": 4.0,
    "grassi": 42.0,
    "kcal": 418
  },
  {
    "id": 315,
    "nome": "Fiocchi di latte",
    "categoria": "Latticini e formaggi",
    "proteine": 11.0,
    "carboidrati": 3.0,
    "grassi": 4.0,
    "kcal": 92
  },
  {
    "id": 316,
    "nome": "Piselli surgelati",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 12.0,
    "grassi": 0.6,
    "kcal": 73
  },
  {
    "id": 317,
    "nome": "Lenticchie in scatola",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 14.0,
    "grassi": 0.6,
    "kcal": 85
  },
  {
    "id": 318,
    "nome": "Fagioli in scatola",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 12.0,
    "grassi": 0.5,
    "kcal": 76
  },
  {
    "id": 319,
    "nome": "Patatine fritte in busta",
    "categoria": "Snack salati",
    "proteine": 6.3,
    "carboidrati": 50.0,
    "grassi": 35.0,
    "kcal": 540
  },
  {
    "id": 320,
    "nome": "Popcorn salati",
    "categoria": "Snack salati",
    "proteine": 12.0,
    "carboidrati": 58.0,
    "grassi": 13.0,
    "kcal": 397
  },
  {
    "id": 321,
    "nome": "Taralli al finocchio",
    "categoria": "Snack salati",
    "proteine": 9.0,
    "carboidrati": 68.0,
    "grassi": 16.0,
    "kcal": 452
  },
  {
    "id": 322,
    "nome": "Croissant semplice",
    "categoria": "Prodotti da forno dolci",
    "proteine": 7.0,
    "carboidrati": 50.0,
    "grassi": 15.0,
    "kcal": 363
  },
  {
    "id": 323,
    "nome": "Croissant integrale",
    "categoria": "Prodotti da forno dolci",
    "proteine": 8.0,
    "carboidrati": 44.0,
    "grassi": 12.0,
    "kcal": 316
  },
  {
    "id": 324,
    "nome": "Plumcake",
    "categoria": "Prodotti da forno dolci",
    "proteine": 5.0,
    "carboidrati": 47.0,
    "grassi": 21.0,
    "kcal": 397
  },
  {
    "id": 325,
    "nome": "Petto di pollo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 31.0,
    "carboidrati": 0.0,
    "grassi": 2.6,
    "kcal": 147
  },
  {
    "id": 326,
    "nome": "Petto di pollo al forno",
    "categoria": "Carni e affettati",
    "proteine": 31.0,
    "carboidrati": 0.0,
    "grassi": 3.1,
    "kcal": 152
  },
  {
    "id": 327,
    "nome": "Petto di pollo fritto",
    "categoria": "Carni e affettati",
    "proteine": 31.0,
    "carboidrati": 6.0,
    "grassi": 8.6,
    "kcal": 225
  },
  {
    "id": 328,
    "nome": "Petto di pollo bollito",
    "categoria": "Carni e affettati",
    "proteine": 31.0,
    "carboidrati": 0.0,
    "grassi": 3.1,
    "kcal": 152
  },
  {
    "id": 329,
    "nome": "Coscia di pollo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 8.0,
    "kcal": 180
  },
  {
    "id": 330,
    "nome": "Coscia di pollo al forno",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 8.5,
    "kcal": 184
  },
  {
    "id": 331,
    "nome": "Coscia di pollo fritto",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 6.0,
    "grassi": 14.0,
    "kcal": 258
  },
  {
    "id": 332,
    "nome": "Coscia di pollo bollito",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 8.5,
    "kcal": 184
  },
  {
    "id": 333,
    "nome": "Tacchino fesa alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 116
  },
  {
    "id": 334,
    "nome": "Tacchino fesa al forno",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 120
  },
  {
    "id": 335,
    "nome": "Tacchino fesa fritto",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 6.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 336,
    "nome": "Tacchino fesa bollito",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 120
  },
  {
    "id": 337,
    "nome": "Manzo magro alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 7.0,
    "kcal": 167
  },
  {
    "id": 338,
    "nome": "Manzo magro al forno",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 172
  },
  {
    "id": 339,
    "nome": "Manzo magro fritto",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 6.0,
    "grassi": 13.0,
    "kcal": 245
  },
  {
    "id": 340,
    "nome": "Manzo magro bollito",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 172
  },
  {
    "id": 341,
    "nome": "Vitello alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 153
  },
  {
    "id": 342,
    "nome": "Vitello al forno",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 158
  },
  {
    "id": 343,
    "nome": "Vitello fritto",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 6.0,
    "grassi": 11.0,
    "kcal": 231
  },
  {
    "id": 344,
    "nome": "Vitello bollito",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 158
  },
  {
    "id": 345,
    "nome": "Lonza di maiale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 153
  },
  {
    "id": 346,
    "nome": "Lonza di maiale al forno",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 158
  },
  {
    "id": 347,
    "nome": "Lonza di maiale fritto",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 6.0,
    "grassi": 11.0,
    "kcal": 231
  },
  {
    "id": 348,
    "nome": "Lonza di maiale bollito",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 158
  },
  {
    "id": 349,
    "nome": "Pancetta alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 13.0,
    "carboidrati": 0.0,
    "grassi": 39.0,
    "kcal": 403
  },
  {
    "id": 350,
    "nome": "Pancetta al forno",
    "categoria": "Carni e affettati",
    "proteine": 13.0,
    "carboidrati": 0.0,
    "grassi": 39.5,
    "kcal": 408
  },
  {
    "id": 351,
    "nome": "Pancetta fritto",
    "categoria": "Carni e affettati",
    "proteine": 13.0,
    "carboidrati": 6.0,
    "grassi": 45.0,
    "kcal": 481
  },
  {
    "id": 352,
    "nome": "Pancetta bollito",
    "categoria": "Carni e affettati",
    "proteine": 13.0,
    "carboidrati": 0.0,
    "grassi": 39.5,
    "kcal": 408
  },
  {
    "id": 353,
    "nome": "Agnello alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 19.0,
    "kcal": 271
  },
  {
    "id": 354,
    "nome": "Agnello al forno",
    "categoria": "Carni e affettati",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 276
  },
  {
    "id": 355,
    "nome": "Agnello fritto",
    "categoria": "Carni e affettati",
    "proteine": 25.0,
    "carboidrati": 6.0,
    "grassi": 25.0,
    "kcal": 349
  },
  {
    "id": 356,
    "nome": "Agnello bollito",
    "categoria": "Carni e affettati",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 276
  },
  {
    "id": 357,
    "nome": "Coniglio alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 4.0,
    "kcal": 120
  },
  {
    "id": 358,
    "nome": "Coniglio al forno",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 124
  },
  {
    "id": 359,
    "nome": "Coniglio fritto",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 6.0,
    "grassi": 10.0,
    "kcal": 198
  },
  {
    "id": 360,
    "nome": "Coniglio bollito",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 124
  },
  {
    "id": 361,
    "nome": "Bresaola alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 32.0,
    "carboidrati": 2.0,
    "grassi": 1.0,
    "kcal": 145
  },
  {
    "id": 362,
    "nome": "Bresaola al forno",
    "categoria": "Carni e affettati",
    "proteine": 32.0,
    "carboidrati": 2.0,
    "grassi": 1.5,
    "kcal": 150
  },
  {
    "id": 363,
    "nome": "Bresaola fritto",
    "categoria": "Carni e affettati",
    "proteine": 32.0,
    "carboidrati": 8.0,
    "grassi": 7.0,
    "kcal": 223
  },
  {
    "id": 364,
    "nome": "Bresaola bollito",
    "categoria": "Carni e affettati",
    "proteine": 32.0,
    "carboidrati": 1.0,
    "grassi": 1.5,
    "kcal": 146
  },
  {
    "id": 365,
    "nome": "Prosciutto crudo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 18.0,
    "kcal": 270
  },
  {
    "id": 366,
    "nome": "Prosciutto crudo al forno",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 18.5,
    "kcal": 274
  },
  {
    "id": 367,
    "nome": "Prosciutto crudo fritto",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 6.0,
    "grassi": 24.0,
    "kcal": 348
  },
  {
    "id": 368,
    "nome": "Prosciutto crudo bollito",
    "categoria": "Carni e affettati",
    "proteine": 27.0,
    "carboidrati": 0.0,
    "grassi": 18.5,
    "kcal": 274
  },
  {
    "id": 369,
    "nome": "Prosciutto cotto alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 8.0,
    "kcal": 156
  },
  {
    "id": 370,
    "nome": "Prosciutto cotto al forno",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 8.5,
    "kcal": 160
  },
  {
    "id": 371,
    "nome": "Prosciutto cotto fritto",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 7.0,
    "grassi": 14.0,
    "kcal": 234
  },
  {
    "id": 372,
    "nome": "Prosciutto cotto bollito",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 8.5,
    "kcal": 156
  },
  {
    "id": 373,
    "nome": "Salame alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 33.0,
    "kcal": 389
  },
  {
    "id": 374,
    "nome": "Salame al forno",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 33.5,
    "kcal": 394
  },
  {
    "id": 375,
    "nome": "Salame fritto",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 7.0,
    "grassi": 39.0,
    "kcal": 467
  },
  {
    "id": 376,
    "nome": "Salame bollito",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 0.0,
    "grassi": 33.5,
    "kcal": 390
  },
  {
    "id": 377,
    "nome": "Mortadella alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 31.0,
    "kcal": 351
  },
  {
    "id": 378,
    "nome": "Mortadella al forno",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 31.5,
    "kcal": 356
  },
  {
    "id": 379,
    "nome": "Mortadella fritto",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 8.0,
    "grassi": 37.0,
    "kcal": 429
  },
  {
    "id": 380,
    "nome": "Mortadella bollito",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 1.0,
    "grassi": 31.5,
    "kcal": 352
  },
  {
    "id": 381,
    "nome": "Salmone alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.0,
    "kcal": 188
  },
  {
    "id": 382,
    "nome": "Salmone al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 192
  },
  {
    "id": 383,
    "nome": "Salmone fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 18.0,
    "kcal": 266
  },
  {
    "id": 384,
    "nome": "Salmone bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 192
  },
  {
    "id": 385,
    "nome": "Tonno fresco alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 92
  },
  {
    "id": 386,
    "nome": "Tonno fresco al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 0.3,
    "kcal": 95
  },
  {
    "id": 387,
    "nome": "Tonno fresco fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 23.0,
    "carboidrati": 6.0,
    "grassi": 5.8,
    "kcal": 168
  },
  {
    "id": 388,
    "nome": "Tonno fresco bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 0.3,
    "kcal": 95
  },
  {
    "id": 389,
    "nome": "Merluzzo alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 72
  },
  {
    "id": 390,
    "nome": "Merluzzo al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.2,
    "kcal": 74
  },
  {
    "id": 391,
    "nome": "Merluzzo fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 6.0,
    "grassi": 5.7,
    "kcal": 147
  },
  {
    "id": 392,
    "nome": "Merluzzo bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.2,
    "kcal": 74
  },
  {
    "id": 393,
    "nome": "Branzino alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 93
  },
  {
    "id": 394,
    "nome": "Branzino al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 98
  },
  {
    "id": 395,
    "nome": "Branzino fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 6.0,
    "grassi": 7.0,
    "kcal": 171
  },
  {
    "id": 396,
    "nome": "Branzino bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 98
  },
  {
    "id": 397,
    "nome": "Orata alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.0,
    "kcal": 116
  },
  {
    "id": 398,
    "nome": "Orata al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 120
  },
  {
    "id": 399,
    "nome": "Orata fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 10.0,
    "kcal": 194
  },
  {
    "id": 400,
    "nome": "Orata bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 120
  },
  {
    "id": 401,
    "nome": "Sardine alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 10.0,
    "kcal": 190
  },
  {
    "id": 402,
    "nome": "Sardine al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 10.5,
    "kcal": 194
  },
  {
    "id": 403,
    "nome": "Sardine fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 6.0,
    "grassi": 16.0,
    "kcal": 268
  },
  {
    "id": 404,
    "nome": "Sardine bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 10.5,
    "kcal": 194
  },
  {
    "id": 405,
    "nome": "Gamberi alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 24.0,
    "carboidrati": 0.2,
    "grassi": 0.0,
    "kcal": 97
  },
  {
    "id": 406,
    "nome": "Gamberi al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 24.0,
    "carboidrati": 0.2,
    "grassi": 0.0,
    "kcal": 97
  },
  {
    "id": 407,
    "nome": "Gamberi fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 24.0,
    "carboidrati": 6.2,
    "grassi": 5.3,
    "kcal": 168
  },
  {
    "id": 408,
    "nome": "Gamberi bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 96
  },
  {
    "id": 409,
    "nome": "Polpo alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 14.0,
    "carboidrati": 4.0,
    "grassi": 0.0,
    "kcal": 72
  },
  {
    "id": 410,
    "nome": "Polpo al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 14.0,
    "carboidrati": 4.0,
    "grassi": 0.5,
    "kcal": 76
  },
  {
    "id": 411,
    "nome": "Polpo fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 14.0,
    "carboidrati": 10.0,
    "grassi": 6.0,
    "kcal": 150
  },
  {
    "id": 412,
    "nome": "Polpo bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 413,
    "nome": "Calamari alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 3.0,
    "grassi": 0.0,
    "kcal": 76
  },
  {
    "id": 414,
    "nome": "Calamari al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 3.0,
    "grassi": 0.5,
    "kcal": 80
  },
  {
    "id": 415,
    "nome": "Calamari fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 9.0,
    "grassi": 6.0,
    "kcal": 154
  },
  {
    "id": 416,
    "nome": "Calamari bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 0.5,
    "kcal": 76
  },
  {
    "id": 417,
    "nome": "Cozze alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 11.0,
    "carboidrati": 3.0,
    "grassi": 1.0,
    "kcal": 65
  },
  {
    "id": 418,
    "nome": "Cozze al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 11.0,
    "carboidrati": 3.0,
    "grassi": 1.5,
    "kcal": 70
  },
  {
    "id": 419,
    "nome": "Cozze fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 11.0,
    "carboidrati": 9.0,
    "grassi": 7.0,
    "kcal": 143
  },
  {
    "id": 420,
    "nome": "Cozze bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 11.0,
    "carboidrati": 2.0,
    "grassi": 1.5,
    "kcal": 66
  },
  {
    "id": 421,
    "nome": "Vongole alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 10.0,
    "carboidrati": 3.0,
    "grassi": 0.0,
    "kcal": 52
  },
  {
    "id": 422,
    "nome": "Vongole al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 10.0,
    "carboidrati": 3.0,
    "grassi": 0.5,
    "kcal": 56
  },
  {
    "id": 423,
    "nome": "Vongole fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 10.0,
    "carboidrati": 9.0,
    "grassi": 6.0,
    "kcal": 130
  },
  {
    "id": 424,
    "nome": "Vongole bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 10.0,
    "carboidrati": 2.0,
    "grassi": 0.5,
    "kcal": 52
  },
  {
    "id": 425,
    "nome": "Lenticchie secche al forno",
    "categoria": "Legumi",
    "proteine": 25.0,
    "carboidrati": 60.0,
    "grassi": 0.5,
    "kcal": 344
  },
  {
    "id": 426,
    "nome": "Lenticchie secche bollito",
    "categoria": "Legumi",
    "proteine": 25.0,
    "carboidrati": 59.0,
    "grassi": 0.5,
    "kcal": 340
  },
  {
    "id": 427,
    "nome": "Lenticchie cotte al forno",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 0.0,
    "kcal": 116
  },
  {
    "id": 428,
    "nome": "Lenticchie cotte bollito",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 19.0,
    "grassi": 0.0,
    "kcal": 112
  },
  {
    "id": 429,
    "nome": "Fagioli borlotti secchi al forno",
    "categoria": "Legumi",
    "proteine": 23.0,
    "carboidrati": 60.0,
    "grassi": 1.0,
    "kcal": 341
  },
  {
    "id": 430,
    "nome": "Fagioli borlotti secchi bollito",
    "categoria": "Legumi",
    "proteine": 23.0,
    "carboidrati": 59.0,
    "grassi": 1.0,
    "kcal": 337
  },
  {
    "id": 431,
    "nome": "Fagioli cannellini secchi al forno",
    "categoria": "Legumi",
    "proteine": 22.0,
    "carboidrati": 61.0,
    "grassi": 1.0,
    "kcal": 341
  },
  {
    "id": 432,
    "nome": "Fagioli cannellini secchi bollito",
    "categoria": "Legumi",
    "proteine": 22.0,
    "carboidrati": 60.0,
    "grassi": 1.0,
    "kcal": 337
  },
  {
    "id": 433,
    "nome": "Ceci secchi al forno",
    "categoria": "Legumi",
    "proteine": 21.0,
    "carboidrati": 61.0,
    "grassi": 5.5,
    "kcal": 378
  },
  {
    "id": 434,
    "nome": "Ceci secchi bollito",
    "categoria": "Legumi",
    "proteine": 21.0,
    "carboidrati": 60.0,
    "grassi": 5.5,
    "kcal": 374
  },
  {
    "id": 435,
    "nome": "Ceci cotti al forno",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 27.0,
    "grassi": 2.1,
    "kcal": 163
  },
  {
    "id": 436,
    "nome": "Ceci cotti bollito",
    "categoria": "Legumi",
    "proteine": 9.0,
    "carboidrati": 26.0,
    "grassi": 2.1,
    "kcal": 159
  },
  {
    "id": 437,
    "nome": "Piselli al forno",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 14.0,
    "grassi": 0.0,
    "kcal": 76
  },
  {
    "id": 438,
    "nome": "Piselli bollito",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 13.0,
    "grassi": 0.0,
    "kcal": 72
  },
  {
    "id": 439,
    "nome": "Fiorentina di manzo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 14.0,
    "kcal": 218
  },
  {
    "id": 440,
    "nome": "Fiorentina di manzo al forno",
    "categoria": "Carni e affettati",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 14.5,
    "kcal": 222
  },
  {
    "id": 441,
    "nome": "Fiorentina di manzo fritto",
    "categoria": "Carni e affettati",
    "proteine": 23.0,
    "carboidrati": 6.0,
    "grassi": 20.0,
    "kcal": 296
  },
  {
    "id": 442,
    "nome": "Fiorentina di manzo bollito",
    "categoria": "Carni e affettati",
    "proteine": 23.0,
    "carboidrati": 0.0,
    "grassi": 14.5,
    "kcal": 222
  },
  {
    "id": 443,
    "nome": "Tagliata di manzo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 9.0,
    "kcal": 185
  },
  {
    "id": 444,
    "nome": "Tagliata di manzo al forno",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 190
  },
  {
    "id": 445,
    "nome": "Tagliata di manzo fritto",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 6.0,
    "grassi": 15.0,
    "kcal": 263
  },
  {
    "id": 446,
    "nome": "Tagliata di manzo bollito",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 190
  },
  {
    "id": 447,
    "nome": "Scottona alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 11.0,
    "kcal": 195
  },
  {
    "id": 448,
    "nome": "Scottona al forno",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 11.5,
    "kcal": 200
  },
  {
    "id": 449,
    "nome": "Scottona fritto",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 6.0,
    "grassi": 17.0,
    "kcal": 273
  },
  {
    "id": 450,
    "nome": "Scottona bollito",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 11.5,
    "kcal": 200
  },
  {
    "id": 451,
    "nome": "Spezzatino di manzo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 7.0,
    "kcal": 159
  },
  {
    "id": 452,
    "nome": "Spezzatino di manzo al forno",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 164
  },
  {
    "id": 453,
    "nome": "Spezzatino di manzo fritto",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 6.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 454,
    "nome": "Spezzatino di manzo bollito",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 164
  },
  {
    "id": 455,
    "nome": "Salsiccia di maiale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 0.0,
    "grassi": 24.0,
    "kcal": 284
  },
  {
    "id": 456,
    "nome": "Salsiccia di maiale al forno",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 0.0,
    "grassi": 24.5,
    "kcal": 288
  },
  {
    "id": 457,
    "nome": "Salsiccia di maiale fritto",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 6.0,
    "grassi": 30.0,
    "kcal": 362
  },
  {
    "id": 458,
    "nome": "Salsiccia di maiale bollito",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 0.0,
    "grassi": 24.5,
    "kcal": 288
  },
  {
    "id": 459,
    "nome": "Cotechino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.0,
    "kcal": 325
  },
  {
    "id": 460,
    "nome": "Cotechino al forno",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.5,
    "kcal": 330
  },
  {
    "id": 461,
    "nome": "Cotechino fritto",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 6.0,
    "grassi": 35.0,
    "kcal": 403
  },
  {
    "id": 462,
    "nome": "Cotechino bollito",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.5,
    "kcal": 330
  },
  {
    "id": 463,
    "nome": "Zampone alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.0,
    "kcal": 325
  },
  {
    "id": 464,
    "nome": "Zampone al forno",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.5,
    "kcal": 330
  },
  {
    "id": 465,
    "nome": "Zampone fritto",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 6.0,
    "grassi": 35.0,
    "kcal": 403
  },
  {
    "id": 466,
    "nome": "Zampone bollito",
    "categoria": "Carni e affettati",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 29.5,
    "kcal": 330
  },
  {
    "id": 467,
    "nome": "Capocollo di maiale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 27.0,
    "kcal": 323
  },
  {
    "id": 468,
    "nome": "Capocollo di maiale al forno",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 27.5,
    "kcal": 328
  },
  {
    "id": 469,
    "nome": "Capocollo di maiale fritto",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 33.0,
    "kcal": 401
  },
  {
    "id": 470,
    "nome": "Capocollo di maiale bollito",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 27.5,
    "kcal": 328
  },
  {
    "id": 471,
    "nome": "Carne macinata magra alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 9.0,
    "kcal": 161
  },
  {
    "id": 472,
    "nome": "Carne macinata magra al forno",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 166
  },
  {
    "id": 473,
    "nome": "Carne macinata magra fritto",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 15.0,
    "kcal": 239
  },
  {
    "id": 474,
    "nome": "Carne macinata magra bollito",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 166
  },
  {
    "id": 475,
    "nome": "Carne macinata mista alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.0,
    "kcal": 243
  },
  {
    "id": 476,
    "nome": "Carne macinata mista al forno",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 248
  },
  {
    "id": 477,
    "nome": "Carne macinata mista fritto",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 6.0,
    "grassi": 25.0,
    "kcal": 321
  },
  {
    "id": 478,
    "nome": "Carne macinata mista bollito",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 248
  },
  {
    "id": 479,
    "nome": "Spalla di maiale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 20.0,
    "kcal": 264
  },
  {
    "id": 480,
    "nome": "Spalla di maiale al forno",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 20.5,
    "kcal": 268
  },
  {
    "id": 481,
    "nome": "Spalla di maiale fritto",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 6.0,
    "grassi": 26.0,
    "kcal": 342
  },
  {
    "id": 482,
    "nome": "Spalla di maiale bollito",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 20.5,
    "kcal": 268
  },
  {
    "id": 483,
    "nome": "Arrosto di tacchino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 125
  },
  {
    "id": 484,
    "nome": "Arrosto di tacchino al forno",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 130
  },
  {
    "id": 485,
    "nome": "Arrosto di tacchino fritto",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 6.0,
    "grassi": 7.0,
    "kcal": 203
  },
  {
    "id": 486,
    "nome": "Arrosto di tacchino bollito",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 130
  },
  {
    "id": 487,
    "nome": "Petto di tacchino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 116
  },
  {
    "id": 488,
    "nome": "Petto di tacchino al forno",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 120
  },
  {
    "id": 489,
    "nome": "Petto di tacchino fritto",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 6.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 490,
    "nome": "Petto di tacchino bollito",
    "categoria": "Carni e affettati",
    "proteine": 29.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 120
  },
  {
    "id": 491,
    "nome": "Coscia di tacchino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 141
  },
  {
    "id": 492,
    "nome": "Coscia di tacchino al forno",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 146
  },
  {
    "id": 493,
    "nome": "Coscia di tacchino fritto",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 6.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 494,
    "nome": "Coscia di tacchino bollito",
    "categoria": "Carni e affettati",
    "proteine": 24.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 146
  },
  {
    "id": 495,
    "nome": "Polpette di manzo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 12.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 496,
    "nome": "Polpette di manzo al forno",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 12.0,
    "grassi": 13.5,
    "kcal": 242
  },
  {
    "id": 497,
    "nome": "Polpette di manzo fritto",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 18.0,
    "grassi": 19.0,
    "kcal": 315
  },
  {
    "id": 498,
    "nome": "Polpette di manzo bollito",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 11.0,
    "grassi": 13.5,
    "kcal": 238
  },
  {
    "id": 499,
    "nome": "Speck alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 30.0,
    "carboidrati": 1.0,
    "grassi": 21.0,
    "kcal": 313
  },
  {
    "id": 500,
    "nome": "Speck al forno",
    "categoria": "Carni e affettati",
    "proteine": 30.0,
    "carboidrati": 1.0,
    "grassi": 21.5,
    "kcal": 318
  },
  {
    "id": 501,
    "nome": "Speck fritto",
    "categoria": "Carni e affettati",
    "proteine": 30.0,
    "carboidrati": 7.0,
    "grassi": 27.0,
    "kcal": 391
  },
  {
    "id": 502,
    "nome": "Speck bollito",
    "categoria": "Carni e affettati",
    "proteine": 30.0,
    "carboidrati": 0.0,
    "grassi": 21.5,
    "kcal": 314
  },
  {
    "id": 503,
    "nome": "Coppa alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.5,
    "grassi": 34.0,
    "kcal": 392
  },
  {
    "id": 504,
    "nome": "Coppa al forno",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.5,
    "grassi": 34.5,
    "kcal": 396
  },
  {
    "id": 505,
    "nome": "Coppa fritto",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 6.5,
    "grassi": 40.0,
    "kcal": 470
  },
  {
    "id": 506,
    "nome": "Coppa bollito",
    "categoria": "Carni e affettati",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 34.5,
    "kcal": 394
  },
  {
    "id": 507,
    "nome": "Lonza stagionata alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 28.0,
    "carboidrati": 1.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 508,
    "nome": "Lonza stagionata al forno",
    "categoria": "Carni e affettati",
    "proteine": 28.0,
    "carboidrati": 1.0,
    "grassi": 9.5,
    "kcal": 202
  },
  {
    "id": 509,
    "nome": "Lonza stagionata fritto",
    "categoria": "Carni e affettati",
    "proteine": 28.0,
    "carboidrati": 7.0,
    "grassi": 15.0,
    "kcal": 275
  },
  {
    "id": 510,
    "nome": "Lonza stagionata bollito",
    "categoria": "Carni e affettati",
    "proteine": 28.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 198
  },
  {
    "id": 511,
    "nome": "Porchetta alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 19.0,
    "carboidrati": 1.5,
    "grassi": 24.0,
    "kcal": 298
  },
  {
    "id": 512,
    "nome": "Porchetta al forno",
    "categoria": "Carni e affettati",
    "proteine": 19.0,
    "carboidrati": 1.5,
    "grassi": 24.5,
    "kcal": 302
  },
  {
    "id": 513,
    "nome": "Porchetta fritto",
    "categoria": "Carni e affettati",
    "proteine": 19.0,
    "carboidrati": 7.5,
    "grassi": 30.0,
    "kcal": 376
  },
  {
    "id": 514,
    "nome": "Porchetta bollito",
    "categoria": "Carni e affettati",
    "proteine": 19.0,
    "carboidrati": 0.5,
    "grassi": 24.5,
    "kcal": 298
  },
  {
    "id": 515,
    "nome": "Guanciale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 0.0,
    "grassi": 59.0,
    "kcal": 587
  },
  {
    "id": 516,
    "nome": "Guanciale al forno",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 0.0,
    "grassi": 59.5,
    "kcal": 592
  },
  {
    "id": 517,
    "nome": "Guanciale fritto",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 6.0,
    "grassi": 65.0,
    "kcal": 665
  },
  {
    "id": 518,
    "nome": "Guanciale bollito",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 0.0,
    "grassi": 59.5,
    "kcal": 592
  },
  {
    "id": 519,
    "nome": "Lardo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 2.0,
    "carboidrati": 0.0,
    "grassi": 98.0,
    "kcal": 890
  },
  {
    "id": 520,
    "nome": "Lardo al forno",
    "categoria": "Carni e affettati",
    "proteine": 2.0,
    "carboidrati": 0.0,
    "grassi": 98.5,
    "kcal": 894
  },
  {
    "id": 521,
    "nome": "Lardo fritto",
    "categoria": "Carni e affettati",
    "proteine": 2.0,
    "carboidrati": 6.0,
    "grassi": 104.0,
    "kcal": 968
  },
  {
    "id": 522,
    "nome": "Lardo bollito",
    "categoria": "Carni e affettati",
    "proteine": 2.0,
    "carboidrati": 0.0,
    "grassi": 98.5,
    "kcal": 894
  },
  {
    "id": 523,
    "nome": "Culatello alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 1.0,
    "grassi": 11.0,
    "kcal": 207
  },
  {
    "id": 524,
    "nome": "Culatello al forno",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 1.0,
    "grassi": 11.5,
    "kcal": 212
  },
  {
    "id": 525,
    "nome": "Culatello fritto",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 7.0,
    "grassi": 17.0,
    "kcal": 285
  },
  {
    "id": 526,
    "nome": "Culatello bollito",
    "categoria": "Carni e affettati",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 11.5,
    "kcal": 208
  },
  {
    "id": 527,
    "nome": "Spalla cotta alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 2.0,
    "grassi": 11.0,
    "kcal": 175
  },
  {
    "id": 528,
    "nome": "Spalla cotta al forno",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 2.0,
    "grassi": 11.5,
    "kcal": 180
  },
  {
    "id": 529,
    "nome": "Spalla cotta fritto",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 8.0,
    "grassi": 17.0,
    "kcal": 253
  },
  {
    "id": 530,
    "nome": "Spalla cotta bollito",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 1.0,
    "grassi": 11.5,
    "kcal": 176
  },
  {
    "id": 531,
    "nome": "Acciughe sott'olio (sgocciolate) alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 14.0,
    "kcal": 226
  },
  {
    "id": 532,
    "nome": "Acciughe sott'olio (sgocciolate) al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 14.5,
    "kcal": 230
  },
  {
    "id": 533,
    "nome": "Acciughe sott'olio (sgocciolate) fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 6.0,
    "grassi": 20.0,
    "kcal": 304
  },
  {
    "id": 534,
    "nome": "Acciughe sott'olio (sgocciolate) bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 14.5,
    "kcal": 230
  },
  {
    "id": 535,
    "nome": "Alici fresche alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.0,
    "kcal": 116
  },
  {
    "id": 536,
    "nome": "Alici fresche al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 120
  },
  {
    "id": 537,
    "nome": "Alici fresche fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 10.0,
    "kcal": 194
  },
  {
    "id": 538,
    "nome": "Alici fresche bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 4.5,
    "kcal": 120
  },
  {
    "id": 539,
    "nome": "Sgombro alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.0,
    "kcal": 188
  },
  {
    "id": 540,
    "nome": "Sgombro al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 192
  },
  {
    "id": 541,
    "nome": "Sgombro fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 18.0,
    "kcal": 266
  },
  {
    "id": 542,
    "nome": "Sgombro bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 192
  },
  {
    "id": 543,
    "nome": "Orata allevata alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 19.0,
    "carboidrati": 0.0,
    "grassi": 7.0,
    "kcal": 139
  },
  {
    "id": 544,
    "nome": "Orata allevata al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 19.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 144
  },
  {
    "id": 545,
    "nome": "Orata allevata fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 19.0,
    "carboidrati": 6.0,
    "grassi": 13.0,
    "kcal": 217
  },
  {
    "id": 546,
    "nome": "Orata allevata bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 19.0,
    "carboidrati": 0.0,
    "grassi": 7.5,
    "kcal": 144
  },
  {
    "id": 547,
    "nome": "Trota alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 125
  },
  {
    "id": 548,
    "nome": "Trota al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 130
  },
  {
    "id": 549,
    "nome": "Trota fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 11.0,
    "kcal": 203
  },
  {
    "id": 550,
    "nome": "Trota bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 130
  },
  {
    "id": 551,
    "nome": "Spigola alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 2.0,
    "kcal": 102
  },
  {
    "id": 552,
    "nome": "Spigola al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 2.5,
    "kcal": 106
  },
  {
    "id": 553,
    "nome": "Spigola fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 6.0,
    "grassi": 8.0,
    "kcal": 180
  },
  {
    "id": 554,
    "nome": "Spigola bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 21.0,
    "carboidrati": 0.0,
    "grassi": 2.5,
    "kcal": 106
  },
  {
    "id": 555,
    "nome": "Cernia alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 89
  },
  {
    "id": 556,
    "nome": "Cernia al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 94
  },
  {
    "id": 557,
    "nome": "Cernia fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 6.0,
    "grassi": 7.0,
    "kcal": 167
  },
  {
    "id": 558,
    "nome": "Cernia bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 1.5,
    "kcal": 94
  },
  {
    "id": 559,
    "nome": "Nasello alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.0,
    "kcal": 72
  },
  {
    "id": 560,
    "nome": "Nasello al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 76
  },
  {
    "id": 561,
    "nome": "Nasello fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 6.0,
    "grassi": 6.0,
    "kcal": 150
  },
  {
    "id": 562,
    "nome": "Nasello bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 76
  },
  {
    "id": 563,
    "nome": "Seppie alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 1.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 564,
    "nome": "Seppie al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 1.0,
    "grassi": 1.0,
    "kcal": 77
  },
  {
    "id": 565,
    "nome": "Seppie fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 7.0,
    "grassi": 6.5,
    "kcal": 150
  },
  {
    "id": 566,
    "nome": "Seppie bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 16.0,
    "carboidrati": 0.0,
    "grassi": 1.0,
    "kcal": 73
  },
  {
    "id": 567,
    "nome": "Soia secca al forno",
    "categoria": "Legumi",
    "proteine": 36.0,
    "carboidrati": 30.0,
    "grassi": 19.5,
    "kcal": 440
  },
  {
    "id": 568,
    "nome": "Soia secca bollito",
    "categoria": "Legumi",
    "proteine": 36.0,
    "carboidrati": 29.0,
    "grassi": 19.5,
    "kcal": 436
  },
  {
    "id": 569,
    "nome": "Tofu al forno",
    "categoria": "Legumi",
    "proteine": 8.0,
    "carboidrati": 2.0,
    "grassi": 3.5,
    "kcal": 72
  },
  {
    "id": 570,
    "nome": "Tofu bollito",
    "categoria": "Legumi",
    "proteine": 8.0,
    "carboidrati": 1.0,
    "grassi": 3.5,
    "kcal": 68
  },
  {
    "id": 571,
    "nome": "Tempeh al forno",
    "categoria": "Legumi",
    "proteine": 20.0,
    "carboidrati": 9.0,
    "grassi": 10.5,
    "kcal": 210
  },
  {
    "id": 572,
    "nome": "Tempeh bollito",
    "categoria": "Legumi",
    "proteine": 20.0,
    "carboidrati": 8.0,
    "grassi": 10.5,
    "kcal": 206
  },
  {
    "id": 573,
    "nome": "Edamame al forno",
    "categoria": "Legumi",
    "proteine": 11.0,
    "carboidrati": 8.0,
    "grassi": 4.5,
    "kcal": 116
  },
  {
    "id": 574,
    "nome": "Edamame bollito",
    "categoria": "Legumi",
    "proteine": 11.0,
    "carboidrati": 7.0,
    "grassi": 4.5,
    "kcal": 112
  },
  {
    "id": 575,
    "nome": "Fave secche al forno",
    "categoria": "Legumi",
    "proteine": 27.0,
    "carboidrati": 58.0,
    "grassi": 1.5,
    "kcal": 354
  },
  {
    "id": 576,
    "nome": "Fave secche bollito",
    "categoria": "Legumi",
    "proteine": 27.0,
    "carboidrati": 57.0,
    "grassi": 1.5,
    "kcal": 350
  },
  {
    "id": 577,
    "nome": "Fave fresche al forno",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 19.0,
    "grassi": 0.0,
    "kcal": 96
  },
  {
    "id": 578,
    "nome": "Fave fresche bollito",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 18.0,
    "grassi": 0.0,
    "kcal": 92
  },
  {
    "id": 579,
    "nome": "Lupini al forno",
    "categoria": "Legumi",
    "proteine": 16.0,
    "carboidrati": 9.0,
    "grassi": 2.5,
    "kcal": 122
  },
  {
    "id": 580,
    "nome": "Lupini bollito",
    "categoria": "Legumi",
    "proteine": 16.0,
    "carboidrati": 8.0,
    "grassi": 2.5,
    "kcal": 118
  },
  {
    "id": 581,
    "nome": "Lasagne alla bolognese alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 13.0,
    "grassi": 8.0,
    "kcal": 160
  },
  {
    "id": 582,
    "nome": "Lasagne alla bolognese al forno",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 13.0,
    "grassi": 8.5,
    "kcal": 164
  },
  {
    "id": 583,
    "nome": "Lasagne alla bolognese fritto",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 19.0,
    "grassi": 14.0,
    "kcal": 238
  },
  {
    "id": 584,
    "nome": "Lasagne alla bolognese bollito",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 12.0,
    "grassi": 8.5,
    "kcal": 160
  },
  {
    "id": 585,
    "nome": "Carbonara alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 10.0,
    "grassi": 14.0,
    "kcal": 214
  },
  {
    "id": 586,
    "nome": "Carbonara al forno",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 10.0,
    "grassi": 14.5,
    "kcal": 218
  },
  {
    "id": 587,
    "nome": "Carbonara fritto",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 16.0,
    "grassi": 20.0,
    "kcal": 292
  },
  {
    "id": 588,
    "nome": "Carbonara bollito",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 9.0,
    "grassi": 14.5,
    "kcal": 214
  },
  {
    "id": 589,
    "nome": "Amatriciana alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 7.0,
    "grassi": 12.0,
    "kcal": 172
  },
  {
    "id": 590,
    "nome": "Amatriciana al forno",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 7.0,
    "grassi": 12.5,
    "kcal": 176
  },
  {
    "id": 591,
    "nome": "Amatriciana fritto",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 13.0,
    "grassi": 18.0,
    "kcal": 250
  },
  {
    "id": 592,
    "nome": "Amatriciana bollito",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 6.0,
    "grassi": 12.5,
    "kcal": 172
  },
  {
    "id": 593,
    "nome": "Pesto e pasta (condita) alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 193
  },
  {
    "id": 594,
    "nome": "Pesto e pasta (condita) al forno",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 20.0,
    "grassi": 9.5,
    "kcal": 198
  },
  {
    "id": 595,
    "nome": "Pesto e pasta (condita) fritto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 26.0,
    "grassi": 15.0,
    "kcal": 271
  },
  {
    "id": 596,
    "nome": "Pesto e pasta (condita) bollito",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 19.0,
    "grassi": 9.5,
    "kcal": 194
  },
  {
    "id": 597,
    "nome": "Risotto alla milanese alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 23.0,
    "grassi": 7.0,
    "kcal": 183
  },
  {
    "id": 598,
    "nome": "Risotto alla milanese al forno",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 23.0,
    "grassi": 7.5,
    "kcal": 188
  },
  {
    "id": 599,
    "nome": "Risotto alla milanese fritto",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 29.0,
    "grassi": 13.0,
    "kcal": 261
  },
  {
    "id": 600,
    "nome": "Risotto alla milanese bollito",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 22.0,
    "grassi": 7.5,
    "kcal": 184
  },
  {
    "id": 601,
    "nome": "Parmigiana di melanzane alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 8.0,
    "grassi": 9.0,
    "kcal": 141
  },
  {
    "id": 602,
    "nome": "Parmigiana di melanzane al forno",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 8.0,
    "grassi": 9.5,
    "kcal": 146
  },
  {
    "id": 603,
    "nome": "Parmigiana di melanzane fritto",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 14.0,
    "grassi": 15.0,
    "kcal": 219
  },
  {
    "id": 604,
    "nome": "Parmigiana di melanzane bollito",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 7.0,
    "grassi": 9.5,
    "kcal": 142
  },
  {
    "id": 605,
    "nome": "Minestrone alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 7.0,
    "grassi": 0.0,
    "kcal": 36
  },
  {
    "id": 606,
    "nome": "Minestrone al forno",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 7.0,
    "grassi": 0.5,
    "kcal": 40
  },
  {
    "id": 607,
    "nome": "Minestrone fritto",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 13.0,
    "grassi": 6.0,
    "kcal": 114
  },
  {
    "id": 608,
    "nome": "Minestrone bollito",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 6.0,
    "grassi": 0.5,
    "kcal": 36
  },
  {
    "id": 609,
    "nome": "Ribollita alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 9.0,
    "grassi": 1.0,
    "kcal": 57
  },
  {
    "id": 610,
    "nome": "Ribollita al forno",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 9.0,
    "grassi": 1.5,
    "kcal": 62
  },
  {
    "id": 611,
    "nome": "Ribollita fritto",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 15.0,
    "grassi": 7.0,
    "kcal": 135
  },
  {
    "id": 612,
    "nome": "Ribollita bollito",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 8.0,
    "grassi": 1.5,
    "kcal": 58
  },
  {
    "id": 613,
    "nome": "Panzanella alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 17.0,
    "grassi": 5.0,
    "kcal": 125
  },
  {
    "id": 614,
    "nome": "Panzanella al forno",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 17.0,
    "grassi": 5.5,
    "kcal": 130
  },
  {
    "id": 615,
    "nome": "Panzanella fritto",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 23.0,
    "grassi": 11.0,
    "kcal": 203
  },
  {
    "id": 616,
    "nome": "Panzanella bollito",
    "categoria": "Piatti pronti",
    "proteine": 3.0,
    "carboidrati": 16.0,
    "grassi": 5.5,
    "kcal": 126
  },
  {
    "id": 617,
    "nome": "Cassoeula alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 19.0,
    "kcal": 243
  },
  {
    "id": 618,
    "nome": "Cassoeula al forno",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 19.5,
    "kcal": 248
  },
  {
    "id": 619,
    "nome": "Cassoeula fritto",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 8.0,
    "grassi": 25.0,
    "kcal": 321
  },
  {
    "id": 620,
    "nome": "Cassoeula bollito",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 1.0,
    "grassi": 19.5,
    "kcal": 244
  },
  {
    "id": 621,
    "nome": "Pollo alla cacciatora alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 2.0,
    "grassi": 7.0,
    "kcal": 127
  },
  {
    "id": 622,
    "nome": "Pollo alla cacciatora al forno",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 2.0,
    "grassi": 7.5,
    "kcal": 132
  },
  {
    "id": 623,
    "nome": "Pollo alla cacciatora fritto",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 8.0,
    "grassi": 13.0,
    "kcal": 205
  },
  {
    "id": 624,
    "nome": "Pollo alla cacciatora bollito",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 1.0,
    "grassi": 7.5,
    "kcal": 128
  },
  {
    "id": 625,
    "nome": "Vitello tonnato alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 2.0,
    "grassi": 11.0,
    "kcal": 179
  },
  {
    "id": 626,
    "nome": "Vitello tonnato al forno",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 2.0,
    "grassi": 11.5,
    "kcal": 184
  },
  {
    "id": 627,
    "nome": "Vitello tonnato fritto",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 8.0,
    "grassi": 17.0,
    "kcal": 257
  },
  {
    "id": 628,
    "nome": "Vitello tonnato bollito",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 1.0,
    "grassi": 11.5,
    "kcal": 180
  },
  {
    "id": 629,
    "nome": "Baccalà alla vicentina alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 5.0,
    "grassi": 13.0,
    "kcal": 201
  },
  {
    "id": 630,
    "nome": "Baccalà alla vicentina al forno",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 5.0,
    "grassi": 13.5,
    "kcal": 206
  },
  {
    "id": 631,
    "nome": "Baccalà alla vicentina fritto",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 11.0,
    "grassi": 19.0,
    "kcal": 279
  },
  {
    "id": 632,
    "nome": "Baccalà alla vicentina bollito",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 4.0,
    "grassi": 13.5,
    "kcal": 202
  },
  {
    "id": 633,
    "nome": "Caponata alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 10.0,
    "grassi": 6.0,
    "kcal": 102
  },
  {
    "id": 634,
    "nome": "Caponata al forno",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 10.0,
    "grassi": 6.5,
    "kcal": 106
  },
  {
    "id": 635,
    "nome": "Caponata fritto",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 16.0,
    "grassi": 12.0,
    "kcal": 180
  },
  {
    "id": 636,
    "nome": "Caponata bollito",
    "categoria": "Piatti pronti",
    "proteine": 2.0,
    "carboidrati": 9.0,
    "grassi": 6.5,
    "kcal": 102
  },
  {
    "id": 637,
    "nome": "Ossobuco alla griglia",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 9.0,
    "kcal": 153
  },
  {
    "id": 638,
    "nome": "Ossobuco al forno",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 158
  },
  {
    "id": 639,
    "nome": "Ossobuco fritto",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 6.0,
    "grassi": 15.0,
    "kcal": 231
  },
  {
    "id": 640,
    "nome": "Ossobuco bollito",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 9.5,
    "kcal": 158
  },
  {
    "id": 641,
    "nome": "Hamburger bovino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.0,
    "kcal": 243
  },
  {
    "id": 642,
    "nome": "Hamburger bovino al forno",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 248
  },
  {
    "id": 643,
    "nome": "Hamburger bovino fritto",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 6.0,
    "grassi": 25.0,
    "kcal": 321
  },
  {
    "id": 644,
    "nome": "Hamburger bovino bollito",
    "categoria": "Carni e affettati",
    "proteine": 18.0,
    "carboidrati": 0.0,
    "grassi": 19.5,
    "kcal": 248
  },
  {
    "id": 645,
    "nome": "Hamburger pollo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 5.0,
    "grassi": 9.0,
    "kcal": 169
  },
  {
    "id": 646,
    "nome": "Hamburger pollo al forno",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 5.0,
    "grassi": 9.5,
    "kcal": 174
  },
  {
    "id": 647,
    "nome": "Hamburger pollo fritto",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 11.0,
    "grassi": 15.0,
    "kcal": 247
  },
  {
    "id": 648,
    "nome": "Hamburger pollo bollito",
    "categoria": "Carni e affettati",
    "proteine": 17.0,
    "carboidrati": 4.0,
    "grassi": 9.5,
    "kcal": 170
  },
  {
    "id": 649,
    "nome": "Wurstel suino alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 2.0,
    "grassi": 27.0,
    "kcal": 299
  },
  {
    "id": 650,
    "nome": "Wurstel suino al forno",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 2.0,
    "grassi": 27.5,
    "kcal": 304
  },
  {
    "id": 651,
    "nome": "Wurstel suino fritto",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 8.0,
    "grassi": 33.0,
    "kcal": 377
  },
  {
    "id": 652,
    "nome": "Wurstel suino bollito",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 1.0,
    "grassi": 27.5,
    "kcal": 300
  },
  {
    "id": 653,
    "nome": "Wurstel pollo alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 3.0,
    "grassi": 21.0,
    "kcal": 249
  },
  {
    "id": 654,
    "nome": "Wurstel pollo al forno",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 3.0,
    "grassi": 21.5,
    "kcal": 254
  },
  {
    "id": 655,
    "nome": "Wurstel pollo fritto",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 9.0,
    "grassi": 27.0,
    "kcal": 327
  },
  {
    "id": 656,
    "nome": "Wurstel pollo bollito",
    "categoria": "Carni e affettati",
    "proteine": 12.0,
    "carboidrati": 2.0,
    "grassi": 21.5,
    "kcal": 250
  },
  {
    "id": 657,
    "nome": "Arista di maiale alla griglia",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 0.0,
    "grassi": 12.0,
    "kcal": 196
  },
  {
    "id": 658,
    "nome": "Arista di maiale al forno",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 200
  },
  {
    "id": 659,
    "nome": "Arista di maiale fritto",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 6.0,
    "grassi": 18.0,
    "kcal": 274
  },
  {
    "id": 660,
    "nome": "Arista di maiale bollito",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 0.0,
    "grassi": 12.5,
    "kcal": 200
  },
  {
    "id": 661,
    "nome": "Tonno in scatola sgocciolato alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 5.0,
    "kcal": 149
  },
  {
    "id": 662,
    "nome": "Tonno in scatola sgocciolato al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 154
  },
  {
    "id": 663,
    "nome": "Tonno in scatola sgocciolato fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 26.0,
    "carboidrati": 6.0,
    "grassi": 11.0,
    "kcal": 227
  },
  {
    "id": 664,
    "nome": "Tonno in scatola sgocciolato bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 26.0,
    "carboidrati": 0.0,
    "grassi": 5.5,
    "kcal": 154
  },
  {
    "id": 665,
    "nome": "Sardine sott'olio (sgocciolate) alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 17.0,
    "kcal": 253
  },
  {
    "id": 666,
    "nome": "Sardine sott'olio (sgocciolate) al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 17.5,
    "kcal": 258
  },
  {
    "id": 667,
    "nome": "Sardine sott'olio (sgocciolate) fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 6.0,
    "grassi": 23.0,
    "kcal": 331
  },
  {
    "id": 668,
    "nome": "Sardine sott'olio (sgocciolate) bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 25.0,
    "carboidrati": 0.0,
    "grassi": 17.5,
    "kcal": 258
  },
  {
    "id": 669,
    "nome": "Gamberetti alla griglia",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 0.0,
    "kcal": 84
  },
  {
    "id": 670,
    "nome": "Gamberetti al forno",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 1.0,
    "grassi": 0.5,
    "kcal": 88
  },
  {
    "id": 671,
    "nome": "Gamberetti fritto",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 7.0,
    "grassi": 6.0,
    "kcal": 162
  },
  {
    "id": 672,
    "nome": "Gamberetti bollito",
    "categoria": "Pesce e molluschi",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 0.5,
    "kcal": 84
  },
  {
    "id": 673,
    "nome": "Piselli surgelati al forno",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 12.0,
    "grassi": 0.1,
    "kcal": 69
  },
  {
    "id": 674,
    "nome": "Piselli surgelati bollito",
    "categoria": "Legumi",
    "proteine": 5.0,
    "carboidrati": 11.0,
    "grassi": 0.1,
    "kcal": 65
  },
  {
    "id": 675,
    "nome": "Lenticchie in scatola al forno",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 14.0,
    "grassi": 0.1,
    "kcal": 81
  },
  {
    "id": 676,
    "nome": "Lenticchie in scatola bollito",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 13.0,
    "grassi": 0.1,
    "kcal": 77
  },
  {
    "id": 677,
    "nome": "Fagioli in scatola al forno",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 12.0,
    "grassi": 0.0,
    "kcal": 72
  },
  {
    "id": 678,
    "nome": "Fagioli in scatola bollito",
    "categoria": "Legumi",
    "proteine": 6.0,
    "carboidrati": 11.0,
    "grassi": 0.0,
    "kcal": 68
  },
  {
    "id": 679,
    "nome": "Pizza Margherita",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 9.0,
    "kcal": 349
  },
  {
    "id": 680,
    "nome": "Pizza Marinara",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 681,
    "nome": "Pizza Diavola",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 682,
    "nome": "Pizza Prosciutto e funghi",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 683,
    "nome": "Pizza Quattro formaggi",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 684,
    "nome": "Pizza Capricciosa",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 685,
    "nome": "Pizza Vegetariana",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 686,
    "nome": "Pizza Bufalina",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 687,
    "nome": "Pizza Tonno e cipolla",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 688,
    "nome": "Pizza Ortolana",
    "categoria": "Cereali e derivati",
    "proteine": 11.0,
    "carboidrati": 56.0,
    "grassi": 10.0,
    "kcal": 358
  },
  {
    "id": 689,
    "nome": "Yogurt greco fragola",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 690,
    "nome": "Yogurt greco pesca",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 691,
    "nome": "Yogurt greco ciliegia",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 692,
    "nome": "Yogurt greco mirtillo",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 693,
    "nome": "Yogurt greco limone",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 694,
    "nome": "Yogurt greco vaniglia",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 695,
    "nome": "Yogurt greco caffè",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 696,
    "nome": "Yogurt greco miele",
    "categoria": "Latticini e formaggi",
    "proteine": 9.0,
    "carboidrati": 8.0,
    "grassi": 0.5,
    "kcal": 72
  },
  {
    "id": 697,
    "nome": "Spaghetti al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 698,
    "nome": "Spaghetti al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 699,
    "nome": "Spaghetti alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 700,
    "nome": "Spaghetti alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 701,
    "nome": "Spaghetti all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 702,
    "nome": "Spaghetti al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 703,
    "nome": "Spaghetti ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 704,
    "nome": "Spaghetti cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 705,
    "nome": "Penne al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 706,
    "nome": "Penne al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 707,
    "nome": "Penne alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 708,
    "nome": "Penne alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 709,
    "nome": "Penne all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 710,
    "nome": "Penne al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 711,
    "nome": "Penne ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 712,
    "nome": "Penne cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 713,
    "nome": "Rigatoni al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 714,
    "nome": "Rigatoni al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 715,
    "nome": "Rigatoni alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 716,
    "nome": "Rigatoni alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 717,
    "nome": "Rigatoni all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 718,
    "nome": "Rigatoni al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 719,
    "nome": "Rigatoni ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 720,
    "nome": "Rigatoni cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 721,
    "nome": "Fusilli al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 722,
    "nome": "Fusilli al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 723,
    "nome": "Fusilli alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 724,
    "nome": "Fusilli alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 725,
    "nome": "Fusilli all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 726,
    "nome": "Fusilli al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 727,
    "nome": "Fusilli ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 728,
    "nome": "Fusilli cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 729,
    "nome": "Farfalle al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 730,
    "nome": "Farfalle al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 731,
    "nome": "Farfalle alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 732,
    "nome": "Farfalle alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 733,
    "nome": "Farfalle all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 734,
    "nome": "Farfalle al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 735,
    "nome": "Farfalle ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 736,
    "nome": "Farfalle cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 737,
    "nome": "Linguine al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 738,
    "nome": "Linguine al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 739,
    "nome": "Linguine alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 740,
    "nome": "Linguine alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 741,
    "nome": "Linguine all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 742,
    "nome": "Linguine al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 743,
    "nome": "Linguine ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 744,
    "nome": "Linguine cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 745,
    "nome": "Tagliatelle al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 746,
    "nome": "Tagliatelle al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 747,
    "nome": "Tagliatelle alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 748,
    "nome": "Tagliatelle alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 749,
    "nome": "Tagliatelle all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 750,
    "nome": "Tagliatelle al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 751,
    "nome": "Tagliatelle ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 752,
    "nome": "Tagliatelle cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 753,
    "nome": "Bucatini al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 754,
    "nome": "Bucatini al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 755,
    "nome": "Bucatini alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 756,
    "nome": "Bucatini alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 757,
    "nome": "Bucatini all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 758,
    "nome": "Bucatini al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 759,
    "nome": "Bucatini ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 760,
    "nome": "Bucatini cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 761,
    "nome": "Orecchiette al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 762,
    "nome": "Orecchiette al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 763,
    "nome": "Orecchiette alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 764,
    "nome": "Orecchiette alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 765,
    "nome": "Orecchiette all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 766,
    "nome": "Orecchiette al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 767,
    "nome": "Orecchiette ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 768,
    "nome": "Orecchiette cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 769,
    "nome": "Tortiglioni al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 770,
    "nome": "Tortiglioni al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 771,
    "nome": "Tortiglioni alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 772,
    "nome": "Tortiglioni alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 773,
    "nome": "Tortiglioni all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 774,
    "nome": "Tortiglioni al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 775,
    "nome": "Tortiglioni ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 776,
    "nome": "Tortiglioni cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 777,
    "nome": "Mezze maniche al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 778,
    "nome": "Mezze maniche al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 779,
    "nome": "Mezze maniche alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 780,
    "nome": "Mezze maniche alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 781,
    "nome": "Mezze maniche all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 782,
    "nome": "Mezze maniche al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 783,
    "nome": "Mezze maniche ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 784,
    "nome": "Mezze maniche cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 785,
    "nome": "Paccheri al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 786,
    "nome": "Paccheri al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 787,
    "nome": "Paccheri alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 788,
    "nome": "Paccheri alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 789,
    "nome": "Paccheri all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 790,
    "nome": "Paccheri al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 791,
    "nome": "Paccheri ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 792,
    "nome": "Paccheri cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 793,
    "nome": "Cavatappi al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 794,
    "nome": "Cavatappi al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 795,
    "nome": "Cavatappi alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 796,
    "nome": "Cavatappi alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 797,
    "nome": "Cavatappi all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 798,
    "nome": "Cavatappi al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 799,
    "nome": "Cavatappi ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 800,
    "nome": "Cavatappi cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 801,
    "nome": "Strozzapreti al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 802,
    "nome": "Strozzapreti al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 803,
    "nome": "Strozzapreti alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 804,
    "nome": "Strozzapreti alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 805,
    "nome": "Strozzapreti all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 806,
    "nome": "Strozzapreti al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 807,
    "nome": "Strozzapreti ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 808,
    "nome": "Strozzapreti cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 809,
    "nome": "Malloreddus al pomodoro",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 28.0,
    "grassi": 6.0,
    "kcal": 194
  },
  {
    "id": 810,
    "nome": "Malloreddus al ragù",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 20.0,
    "grassi": 9.0,
    "kcal": 197
  },
  {
    "id": 811,
    "nome": "Malloreddus alla carbonara",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 18.0,
    "grassi": 14.0,
    "kcal": 246
  },
  {
    "id": 812,
    "nome": "Malloreddus alla gricia",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 19.0,
    "grassi": 13.0,
    "kcal": 237
  },
  {
    "id": 813,
    "nome": "Malloreddus all'amatriciana",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 21.0,
    "grassi": 11.0,
    "kcal": 219
  },
  {
    "id": 814,
    "nome": "Malloreddus al pesto",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 22.0,
    "grassi": 12.0,
    "kcal": 228
  },
  {
    "id": 815,
    "nome": "Malloreddus ai frutti di mare",
    "categoria": "Piatti pronti",
    "proteine": 10.0,
    "carboidrati": 20.0,
    "grassi": 6.0,
    "kcal": 174
  },
  {
    "id": 816,
    "nome": "Malloreddus cacio e pepe",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 22.0,
    "grassi": 9.0,
    "kcal": 217
  },
  {
    "id": 817,
    "nome": "Panino con prosciutto crudo",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 818,
    "nome": "Panino con prosciutto cotto",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 819,
    "nome": "Panino con bresaola",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 820,
    "nome": "Panino con mortadella",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 821,
    "nome": "Panino con salame",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 822,
    "nome": "Panino con speck",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 823,
    "nome": "Panino con coppa",
    "categoria": "Piatti pronti",
    "proteine": 11.0,
    "carboidrati": 28.0,
    "grassi": 8.0,
    "kcal": 228
  },
  {
    "id": 824,
    "nome": "Insalata mista",
    "categoria": "Piatti pronti",
    "proteine": 1.5,
    "carboidrati": 3.5,
    "grassi": 0.2,
    "kcal": 22
  },
  {
    "id": 825,
    "nome": "Insalata di riso",
    "categoria": "Piatti pronti",
    "proteine": 4.0,
    "carboidrati": 24.0,
    "grassi": 6.0,
    "kcal": 166
  },
  {
    "id": 826,
    "nome": "Insalata di pollo",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 4.0,
    "grassi": 6.0,
    "kcal": 118
  },
  {
    "id": 827,
    "nome": "Insalata caprese",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 3.0,
    "grassi": 10.0,
    "kcal": 130
  },
  {
    "id": 828,
    "nome": "Insalata di farro",
    "categoria": "Piatti pronti",
    "proteine": 5.0,
    "carboidrati": 23.0,
    "grassi": 3.0,
    "kcal": 139
  },
  {
    "id": 829,
    "nome": "Mela Fuji",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 830,
    "nome": "Mela Gala",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 831,
    "nome": "Mela Granny",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 832,
    "nome": "Mela Golden",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 833,
    "nome": "Mela Stark",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 834,
    "nome": "Mela Abate",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 835,
    "nome": "Mela Kaiser",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 836,
    "nome": "Mela Conference",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 837,
    "nome": "Mela Noce",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 838,
    "nome": "Mela Tabacchiera",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 839,
    "nome": "Mela Italia",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 840,
    "nome": "Mela Regina",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 841,
    "nome": "Mela Victoria",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 842,
    "nome": "Mela Fragola",
    "categoria": "Frutta",
    "proteine": 0.3,
    "carboidrati": 14.0,
    "grassi": 0.2,
    "kcal": 59
  },
  {
    "id": 843,
    "nome": "Pera Fuji",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 844,
    "nome": "Pera Gala",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 845,
    "nome": "Pera Granny",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 846,
    "nome": "Pera Golden",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 847,
    "nome": "Pera Stark",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 848,
    "nome": "Pera Abate",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 849,
    "nome": "Pera Kaiser",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 850,
    "nome": "Pera Conference",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 851,
    "nome": "Pera Noce",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 852,
    "nome": "Pera Tabacchiera",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 853,
    "nome": "Pera Italia",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 854,
    "nome": "Pera Regina",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 855,
    "nome": "Pera Victoria",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 856,
    "nome": "Pera Fragola",
    "categoria": "Frutta",
    "proteine": 0.4,
    "carboidrati": 15.0,
    "grassi": 0.2,
    "kcal": 63
  },
  {
    "id": 857,
    "nome": "Pesca Fuji",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 858,
    "nome": "Pesca Gala",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 859,
    "nome": "Pesca Granny",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 860,
    "nome": "Pesca Golden",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 861,
    "nome": "Pesca Stark",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 862,
    "nome": "Pesca Abate",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 863,
    "nome": "Pesca Kaiser",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 864,
    "nome": "Pesca Conference",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 865,
    "nome": "Pesca Noce",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 866,
    "nome": "Pesca Tabacchiera",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 867,
    "nome": "Pesca Italia",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 868,
    "nome": "Pesca Regina",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 869,
    "nome": "Pesca Victoria",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 870,
    "nome": "Pesca Fragola",
    "categoria": "Frutta",
    "proteine": 0.9,
    "carboidrati": 10.0,
    "grassi": 0.3,
    "kcal": 46
  },
  {
    "id": 871,
    "nome": "Uva Fuji",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 872,
    "nome": "Uva Gala",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 873,
    "nome": "Uva Granny",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 874,
    "nome": "Uva Golden",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 875,
    "nome": "Uva Stark",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 876,
    "nome": "Uva Abate",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 877,
    "nome": "Uva Kaiser",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 878,
    "nome": "Uva Conference",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 879,
    "nome": "Uva Noce",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 880,
    "nome": "Uva Tabacchiera",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 881,
    "nome": "Uva Italia",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 882,
    "nome": "Uva Regina",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 883,
    "nome": "Uva Victoria",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 884,
    "nome": "Uva Fragola",
    "categoria": "Frutta",
    "proteine": 0.7,
    "carboidrati": 17.0,
    "grassi": 0.3,
    "kcal": 74
  },
  {
    "id": 885,
    "nome": "Gelato gusto cioccolato",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 886,
    "nome": "Gelato gusto vaniglia",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 887,
    "nome": "Gelato gusto pistacchio",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 888,
    "nome": "Gelato gusto nocciola",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 889,
    "nome": "Gelato gusto stracciatella",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 890,
    "nome": "Gelato gusto limone",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 891,
    "nome": "Gelato gusto fragola",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 892,
    "nome": "Gelato gusto mango",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 893,
    "nome": "Gelato gusto caffè",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 894,
    "nome": "Gelato gusto fior di latte",
    "categoria": "Dolci e dessert",
    "proteine": 4.0,
    "carboidrati": 25.0,
    "grassi": 12.0,
    "kcal": 224
  },
  {
    "id": 895,
    "nome": "Confettura di albicocca",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 896,
    "nome": "Confettura di fragola",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 897,
    "nome": "Confettura di ciliegia",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 898,
    "nome": "Confettura di pesca",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 899,
    "nome": "Confettura di prugna",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 900,
    "nome": "Confettura di frutti di bosco",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 901,
    "nome": "Confettura di arancia",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 902,
    "nome": "Confettura di limone",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 903,
    "nome": "Confettura di mirtillo",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 904,
    "nome": "Confettura di uva",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 905,
    "nome": "Confettura di fico",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 906,
    "nome": "Confettura di pera",
    "categoria": "Zuccheri e dolcificanti",
    "proteine": 0.5,
    "carboidrati": 60.0,
    "grassi": 0.2,
    "kcal": 244
  },
  {
    "id": 907,
    "nome": "Succo di albicocca",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 908,
    "nome": "Succo di fragola",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 909,
    "nome": "Succo di ciliegia",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 910,
    "nome": "Succo di pesca",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 911,
    "nome": "Succo di prugna",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 912,
    "nome": "Succo di frutti di bosco",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 913,
    "nome": "Succo di arancia",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 914,
    "nome": "Succo di limone",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 915,
    "nome": "Succo di mirtillo",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 916,
    "nome": "Succo di uva",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 917,
    "nome": "Succo di fico",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 918,
    "nome": "Succo di pera",
    "categoria": "Bevande",
    "proteine": 0.2,
    "carboidrati": 10.5,
    "grassi": 0.1,
    "kcal": 44
  },
  {
    "id": 919,
    "nome": "Cardo",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 920,
    "nome": "Catalogna",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 921,
    "nome": "Cavolini di Bruxelles",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 922,
    "nome": "Barbabietola",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 923,
    "nome": "Rapa rossa",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 924,
    "nome": "Topinambur",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 925,
    "nome": "Cavolo rosso",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 926,
    "nome": "Cavolo verza",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 927,
    "nome": "Erbette",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 928,
    "nome": "Valeriana",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 929,
    "nome": "Songino",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 930,
    "nome": "Taccole",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 931,
    "nome": "Peperoncino",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 0.2,
    "kcal": 31
  },
  {
    "id": 932,
    "nome": "Carciofini sott'olio (sgocciolati)",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 3.0,
    "kcal": 56
  },
  {
    "id": 933,
    "nome": "Olive verdi (sgocciolate)",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 3.0,
    "kcal": 56
  },
  {
    "id": 934,
    "nome": "Olive nere (sgocciolate)",
    "categoria": "Verdure",
    "proteine": 1.7,
    "carboidrati": 5.5,
    "grassi": 3.0,
    "kcal": 56
  },
  {
    "id": 935,
    "nome": "Ricotta salata",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 936,
    "nome": "Caprino fresco",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 937,
    "nome": "Caprino stagionato",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 938,
    "nome": "Primosale",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 939,
    "nome": "Ricotta di bufala",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 940,
    "nome": "Casera",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 941,
    "nome": "Montasio",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 942,
    "nome": "Piave",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 943,
    "nome": "Bitto",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 944,
    "nome": "Ragusano",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 945,
    "nome": "Canestrato",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 946,
    "nome": "Murazzano",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 947,
    "nome": "Quartirolo lombardo",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 948,
    "nome": "Stracciatella",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 949,
    "nome": "Burrata",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 950,
    "nome": "Crescenza",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 951,
    "nome": "Provola affumicata",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 952,
    "nome": "Bra",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 953,
    "nome": "Raschio",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 954,
    "nome": "Sbrinz",
    "categoria": "Latticini e formaggi",
    "proteine": 22.0,
    "carboidrati": 1.5,
    "grassi": 28.0,
    "kcal": 346
  },
  {
    "id": 955,
    "nome": "Pane di Matera",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 956,
    "nome": "Pane di Genzano",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 957,
    "nome": "Pane nero di Castelvetrano",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 958,
    "nome": "Pane di segale",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 959,
    "nome": "Pane al farro",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 960,
    "nome": "Pane al kamut",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 961,
    "nome": "Taralli dolci",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 962,
    "nome": "Ciambelline al vino",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 963,
    "nome": "Biscotti al burro",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 6.0,
    "kcal": 338
  },
  {
    "id": 964,
    "nome": "Savoiardi",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 965,
    "nome": "Amor di polenta",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 966,
    "nome": "Bruschette",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 967,
    "nome": "Friselle",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 968,
    "nome": "Grattini",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 969,
    "nome": "Pangrattato",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 970,
    "nome": "Pane carasau integrale",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 971,
    "nome": "Pane guttiau",
    "categoria": "Cereali e derivati",
    "proteine": 9.0,
    "carboidrati": 62.0,
    "grassi": 2.5,
    "kcal": 306
  },
  {
    "id": 972,
    "nome": "Arancini di riso",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 32.0,
    "grassi": 9.0,
    "kcal": 237
  },
  {
    "id": 973,
    "nome": "Supplì",
    "categoria": "Piatti pronti",
    "proteine": 8.0,
    "carboidrati": 28.0,
    "grassi": 10.0,
    "kcal": 234
  },
  {
    "id": 974,
    "nome": "Saltimbocca",
    "categoria": "Piatti pronti",
    "proteine": 16.0,
    "carboidrati": 2.0,
    "grassi": 8.0,
    "kcal": 144
  },
  {
    "id": 975,
    "nome": "Cotoletta alla milanese",
    "categoria": "Piatti pronti",
    "proteine": 18.0,
    "carboidrati": 12.0,
    "grassi": 20.0,
    "kcal": 300
  },
  {
    "id": 976,
    "nome": "Carne alla pizzaiola",
    "categoria": "Piatti pronti",
    "proteine": 15.0,
    "carboidrati": 3.0,
    "grassi": 6.0,
    "kcal": 126
  },
  {
    "id": 977,
    "nome": "Trippa alla romana",
    "categoria": "Piatti pronti",
    "proteine": 12.0,
    "carboidrati": 4.0,
    "grassi": 8.0,
    "kcal": 136
  },
  {
    "id": 978,
    "nome": "Lampredotto",
    "categoria": "Piatti pronti",
    "proteine": 14.0,
    "carboidrati": 0.0,
    "grassi": 8.0,
    "kcal": 128
  },
  {
    "id": 979,
    "nome": "Pasta e fagioli",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 17.0,
    "grassi": 3.0,
    "kcal": 123
  },
  {
    "id": 980,
    "nome": "Pasta e ceci",
    "categoria": "Piatti pronti",
    "proteine": 7.0,
    "carboidrati": 19.0,
    "grassi": 3.0,
    "kcal": 131
  },
  {
    "id": 981,
    "nome": "Zuppa di lenticchie",
    "categoria": "Piatti pronti",
    "proteine": 6.0,
    "carboidrati": 12.0,
    "grassi": 2.0,
    "kcal": 90
  },
  {
    "id": 982,
    "nome": "Polenta e salsiccia",
    "categoria": "Piatti pronti",
    "proteine": 9.0,
    "carboidrati": 12.0,
    "grassi": 11.0,
    "kcal": 183
  },
  {
    "id": 983,
    "nome": "Risotto ai funghi",
    "categoria": "Piatti pronti",
    "proteine": 6.0,
    "carboidrati": 24.0,
    "grassi": 7.0,
    "kcal": 183
  },
  {
    "id": 984,
    "nome": "Salame al pepe",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 34.0,
    "kcal": 398
  },
  {
    "id": 985,
    "nome": "Salame al finocchio",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 34.0,
    "kcal": 398
  },
  {
    "id": 986,
    "nome": "Salame piccante",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 34.0,
    "kcal": 398
  },
  {
    "id": 987,
    "nome": "Salame dolce",
    "categoria": "Carni e affettati",
    "proteine": 22.0,
    "carboidrati": 1.0,
    "grassi": 34.0,
    "kcal": 398
  },
  {
    "id": 988,
    "nome": "Salsiccia stagionata al pepe",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 35.0,
    "kcal": 395
  },
  {
    "id": 989,
    "nome": "Salsiccia stagionata al finocchio",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 35.0,
    "kcal": 395
  },
  {
    "id": 990,
    "nome": "Salsiccia stagionata piccante",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 35.0,
    "kcal": 395
  },
  {
    "id": 991,
    "nome": "Salsiccia stagionata dolce",
    "categoria": "Carni e affettati",
    "proteine": 20.0,
    "carboidrati": 0.0,
    "grassi": 35.0,
    "kcal": 395
  },
  {
    "id": 992,
    "nome": "Nduja al pepe",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 38.0,
    "kcal": 410
  },
  {
    "id": 993,
    "nome": "Nduja al finocchio",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 38.0,
    "kcal": 410
  },
  {
    "id": 994,
    "nome": "Nduja piccante",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 38.0,
    "kcal": 410
  },
  {
    "id": 995,
    "nome": "Nduja dolce",
    "categoria": "Carni e affettati",
    "proteine": 14.0,
    "carboidrati": 3.0,
    "grassi": 38.0,
    "kcal": 410
  },
  {
    "id": 996,
    "nome": "Basilico fresco",
    "categoria": "Erbe e spezie",
    "proteine": 3.2,
    "carboidrati": 2.7,
    "grassi": 0.6,
    "kcal": 29
  },
  {
    "id": 997,
    "nome": "Prezzemolo fresco",
    "categoria": "Erbe e spezie",
    "proteine": 3.0,
    "carboidrati": 6.3,
    "grassi": 0.8,
    "kcal": 44
  },
  {
    "id": 998,
    "nome": "Origano secco",
    "categoria": "Erbe e spezie",
    "proteine": 9.0,
    "carboidrati": 69.0,
    "grassi": 4.3,
    "kcal": 351
  },
  {
    "id": 999,
    "nome": "Rosmarino fresco",
    "categoria": "Erbe e spezie",
    "proteine": 3.3,
    "carboidrati": 21.0,
    "grassi": 5.9,
    "kcal": 150
  },
  {
    "id": 1000,
    "nome": "Salvia fresca",
    "categoria": "Erbe e spezie",
    "proteine": 3.3,
    "carboidrati": 20.0,
    "grassi": 12.8,
    "kcal": 208
  }
];
