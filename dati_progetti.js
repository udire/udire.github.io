// ============================================================
//  DATI PROGETTI — Rossi Architetti
//  Modifica questo file per aggiornare lo stato dei progetti.
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
    "codice": "VR2026",
    "projectName": "Villa Rossi",
    "client": "Mario e Lucia Rossi",
    "status": "In corso",
    "lastUpdate": "2026-06-07",
    "location": "Milano, IT",
    "phases": [
      {
        "name": "Brief",
        "status": "completata",
        "description": "Raccolta delle esigenze, sopralluogo e definizione del programma funzionale.",
        "progress": 100
      },
      {
        "name": "Concept",
        "status": "completata",
        "description": "Elaborazione delle prime idee progettuali, moodboard e schemi distributivi.",
        "progress": 100
      },
      {
        "name": "Sviluppo Progetto",
        "status": "in_corso",
        "description": "Definizione delle soluzioni architettoniche, materiali, layout degli spazi interni ed esterni. Coordinamento con i consulenti strutturali e impiantistici.",
        "progress": 65
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
        "date": "2026-06-07",
        "title": "Aggiornamento materiali facciata",
        "description": "Sono stati definiti i materiali principali per la facciata esterna: calcestruzzo a vista per la struttura e rivestimento in pietra locale per il basamento. Aggiornati i render esterni di conseguenza."
      },
      {
        "date": "2026-06-02",
        "title": "Revisione layout cucina",
        "description": "Il layout della cucina è stato ottimizzato in base alle indicazioni emerse durante il sopralluogo del 28 maggio. Il nuovo schema prevede un'isola centrale da 140×90 cm."
      },
      {
        "date": "2026-05-28",
        "title": "Concept approvato",
        "description": "Il concept architettonico è stato approvato dal cliente con piccole osservazioni sull'orientamento del volume principale. Si procede con lo sviluppo progettuale."
      },
      {
        "date": "2026-05-10",
        "title": "Sopralluogo completato",
        "description": "Effettuato il rilievo metrico completo dell'area di intervento. Documentazione fotografica acquisita e restituzione planimetrica in corso."
      },
      {
        "date": "2026-05-03",
        "title": "Avvio progetto",
        "description": "Prima riunione con il cliente. Definiti i requisiti principali, il budget di riferimento e la tempistica indicativa del progetto."
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
  }

];
