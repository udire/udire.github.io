// ============================================================
//  DATI PROGETTI — Marco Mastandrea Architetto
//  file per aggiornare lo stato dei progetti.
//
//  STATI FASE:
//    "completata"   → fase terminata (check blu scuro)
//    "in_corso"     → fase attiva (lampeggio blu)
//    "non_iniziata" → fase futura (grigio neutro)
//
//  CODICE PROGETTO: il cliente lo usa per accedere alla scheda.
//  Tienilo semplice e comunicalo via email al cliente.
// ============================================================

window.PROGETTI_DATA = [

  {
    "codice": "CS2026APP",
    "projectName": "Progetto di interni per un appartamento di ≈90mq",
    "client": "Chiara e Simone",
    "status": "In corso",
    "lastUpdate": "2026-05-28",
    "location": "Capaccio Paestum, IT",
    "phases": [
      {
        "name": "Brief",
        "status": "completata",
        "description": "Raccolta delle esigenze, sopralluogo e definizione del programma funzionale.",
        "progress": 100
      },
      {
        "name": "Concept",
        "status": "in_corso",
        "description": "Elaborazione delle prime idee progettuali, moodboard e schemi distributivi.",
        "progress": 40
      },
      {
        "name": "Sviluppo Progetto",
        "status": "non_iniziata",
        "description": "Definizione delle soluzioni architettoniche, materiali, layout degli spazi interni ed esterni. Coordinamento con i consulenti strutturali e impiantistici.",
        "progress": 0
      },
      {
        "name": "Revisione Cliente",
        "status": "non_iniziata",
        "description": "Presentazione del progetto definitivo al cliente per approvazione e eventuali modifiche.",
        "progress": 0
      },
      {
        "name": "Elaborati Finali",
        "status": "non_iniziata",
        "description": "Produzione di tutti gli elaborati tecnici: piante, sezioni, prospetti, dettagli costruttivi e computo metrico.",
        "progress": 0
      },
      {
        "name": "Consegna",
        "status": "non_iniziata",
        "description": "Consegna degli elaborati finali, assistenza alla direzione lavori e chiusura del progetto.",
        "progress": 0
      }
    ],
    "updates": [
      {
        "date": "2026-05-28",
        "title": "Concept approvato",
        "description": "Il concept architettonico è stato approvato dal cliente con piccole osservazioni relative alla demolizione di tramezzi e alla modifica dell'impianto cucina. Si attendono riferimenti architettonici per lo sviluppo progettuale."
      },
      {
        "date": "2026-05-02",
        "title": "Sopralluogo completato",
        "description": "Effettuato il rilievo metrico completo dell'area di intervento. Documentazione fotografica acquisita e restituzione planimetrica in corso."
      },
      {
        "date": "2026-05-01",
        "title": "Avvio progetto",
        "description": "Prima riunione con il cliente. Definiti i requisiti principali e la tempistica indicativa del progetto."
      }
    ]
  },

  {
    "codice": "PM2025",
    "projectName": "Padiglione Monolite",
    "client": "Fondazione Arte Contemporanea",
    "status": "Completato",
    "lastUpdate": "2026-04-15",
    "location": "Venezia, IT",
    "phases": [
      { "name": "Brief",              "status": "completata",   "description": "Raccolta delle esigenze.", "progress": 100 },
      { "name": "Concept",            "status": "completata",   "description": "Elaborazione delle idee.", "progress": 100 },
      { "name": "Sviluppo Progetto",  "status": "completata",   "description": "Sviluppo architettonico.", "progress": 100 },
      { "name": "Revisione Cliente",  "status": "completata",   "description": "Approvazione progetto.",   "progress": 100 },
      { "name": "Elaborati Finali",   "status": "completata",   "description": "Elaborati tecnici.",       "progress": 100 },
      { "name": "Consegna",           "status": "completata",   "description": "Consegna completata.",     "progress": 100 }
    ],
    "updates": [
      {
        "date": "2026-04-15",
        "title": "Progetto consegnato",
        "description": "Tutti gli elaborati finali sono stati consegnati e approvati. Il progetto è ufficialmente chiuso."
      }
    ]
  },



  
  {
    "codice": "MMASBUBA",
    "projectName": "Residenza monofamiliare",
    "client": "mm",
    "status": "In corso",
    "lastUpdate": "2026-06-07",
    "location": "Capaccio Paestum, IT",
    "phases": [
      {
        "name": "Brief",
        "status": "in_corso",
        "description": "Raccolta delle esigenze, sopralluogo e definizione del programma funzionale.",
        "progress": 10
      },
      {
        "name": "Concept",
        "status": "non_iniziata",
        "description": "Elaborazione delle prime idee progettuali, moodboard e schemi distributivi.",
        "progress": 0
      },
      {
        "name": "Sviluppo Progetto",
        "status": "non_iniziata",
        "description": "Definizione delle soluzioni architettoniche, materiali, layout degli spazi interni ed esterni. Coordinamento con i consulenti strutturali e impiantistici.",
        "progress": 0
      },
      {
        "name": "Revisione Cliente",
        "status": "non_iniziata",
        "description": "Presentazione del progetto definitivo al cliente per approvazione e eventuali modifiche.",
        "progress": 0
      },
      {
        "name": "Elaborati Finali",
        "status": "non_iniziata",
        "description": "Produzione di tutti gli elaborati tecnici: piante, sezioni, prospetti, dettagli costruttivi e computo metrico.",
        "progress": 0
      },
      {
        "name": "Consegna",
        "status": "non_iniziata",
        "description": "Consegna degli elaborati finali, assistenza alla direzione lavori e chiusura del progetto.",
        "progress": 0
      }
    ],
    "updates": [
       {
        "date": "2026-05-13",
        "title": "Avvio progetto",
        "description": "Prima riunione con il committente. L'avvio ufficiale del progetto é posticipato a 3 mesi dalla data odierna. Sono stati definiti i requisiti principali e alcuni spazi di riferimento."
      },
      {
        "date": "2026-05-10",
        "title": "Ricerca riferimenti",
        "description": "Di tanto in tanto il sottoscritto, unitamente alla committente, si inoltrano reel carini. Sarà cura del progettista riconoscere la qualità architettonica dei manufatti senza confondersi con l'aesthetic di IG."
      },
    ]
  },


{
    "codice": "URB26AS",
    "projectName": "Osservazioni su destinazione assegnata dal PUC",
    "client": "Angela",
    "status": "In corso",
    "lastUpdate": "2026-06-30",
    "location": "Capaccio Paestum, IT",
    "phases": [
      {
        "name": "Brief",
        "status": "in_corso",
        "description": "Raccolta della documentazione contenuta nelle Norme Tecniche di Attuazione pubblicate con l'adozione del PUC al link (https://comune.capaccio.sa.it/puc/), e studio delle relazioni grafiche allegate.",
        "progress": 10
      },
      {
        "name": "Concept",
        "status": "non_iniziata",
        "description": "Elaborazione delle prime idee progettuali, moodboard e schemi distributivi.",
        "progress": 0
      },
      {
        "name": "Sviluppo Progetto",
        "status": "non_iniziata",
        "description": "Definizione delle soluzioni architettoniche, materiali, layout degli spazi interni ed esterni. Coordinamento con i consulenti strutturali e impiantistici.",
        "progress": 0
      },
      {
        "name": "Revisione Cliente",
        "status": "non_iniziata",
        "description": "Presentazione del progetto definitivo al cliente per approvazione e eventuali modifiche.",
        "progress": 0
      },
      {
        "name": "Elaborati Finali",
        "status": "non_iniziata",
        "description": "Produzione di tutti gli elaborati tecnici: piante, sezioni, prospetti, dettagli costruttivi e computo metrico.",
        "progress": 0
      },
      {
        "name": "Consegna",
        "status": "non_iniziata",
        "description": "Consegna degli elaborati finali, assistenza alla direzione lavori e chiusura del progetto.",
        "progress": 0
      }
    ],
    "updates": [
       {
        "date": "2026-05-13",
        "title": "Studio dei nuovi elaborati",
        "description": "Per presentare le osservazioni o i contributi al Piano Urbanistico Comunale (PUC) di Capaccio Paestum, il termine standard previsto dalla normativa regionale è di 60 giorni dalla data di pubblicazione dell'avviso di adozione, avvenuta ieri 29 Giugno 2026."
      },
  
  
];
]
