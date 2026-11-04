// Hier werden Termine und Medien gepflegt (nur Vornamen, keine sensiblen Daten!).

// Termine: datum im Format "2026-11-20", zeit und ort optional.
window.TERMINE = [
  { datum: "2026-11-05", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-11-12", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-11-19", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-11-25", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-11-26", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-02", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-03", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-09", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-10", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-16", zeit: "08:45", titel: "KuKuK-Einheit" },
  { datum: "2026-12-17", zeit: "08:45", titel: "KuKuK-Einheit" },
  // { datum: "2026-11-20", zeit: "09:30–11:00", titel: "Musik-Einheit", beschreibung: "Mit Anna (Musikpädagogin)", ort: "Turnhalle" },
];

// Fotos und Videos: Dateien liegen im Ordner "media/".
// typ: "foto" oder "video"; bei Videos optional poster: "media/poster.jpg"
window.MEDIEN = [
  { typ: "video", datei: "media/kukuk-vorstellung.mp4", poster: "media/kukuk-vorstellung-poster.jpg", text: "KuKuK stellt sich vor" },
  // { typ: "foto", datei: "media/musik-01.jpg", text: "Klangschalen entdecken" },
  // { typ: "video", datei: "media/tanz.mp4", text: "Tanz-Einheit" },
];
