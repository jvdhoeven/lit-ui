# Erstellung einer Komponentenbibliothek für das Web mittels Web Components

# 1. Einleitung (4 Seiten)

## 1.1 Motivation

## 1.2 Zielsetzung

## 1.3 Abgrenzung der Arbeit

# 2. Grundlagen (6 Seiten)

## 2.1 Grundlagen der Webentwicklung

Eine Internetseite wird auf Basis verschiedener Web-Technologien erstellt. Zu den wichtigsten Technologien zählen die Hypertext Markup Language (HTML), Cascading Stylesheets (CSS) und JavaScript (JS).

Dabei verfolgen die oben genannten Technologien unterschiedliche Ziele. Hypertext Markup Language dient als Struktur für das Dokument. Mittels Cascading Stylesheets wird das Dokument gestaltet und für das Ausgabemedium optimiert. JavaScript dient als zusätzliche Ebene dafür das Verhalten des Dokuments beinflussen zu können.

### 2.1.1 HTML

Die Hypertext Markup Language ist der Grundbaustein jeder Webseite. Sie beschreibt die Sturktur und Semantik eines Dokuments für das Internet. Über sogenannte HTML-Tags werden Inhalte wie Überschriften, Absätze, Bilder und Verknüpfungen strukturiert und für den Webbrowser interpretierbar gemacht.

```
<!DOCTYPE html>
<html>
    <head>
        <title>Titel</title>
    </head>
    <body>
        <h1>Überschrift</h1>
        <p>Dies ist ein <strong>Absatz</strong></p>
    </body>
</html>
```


Zusätzlich zu den Sturkturelementen gibt es noch weitere HTML-Tags, die sich für den Endanwender nicht von einem anderen HTML-Tag unterscheiden, jedoch z.B.  einer Suchmaschine oder einem Screenreader zusätzliche semantische Informationen zur Interpretation zur Verfügung stellen.

Am 28. OKtober 2014 wurde HTML in der Version 5 vom W3 Konsortium (W3C) als Empfehlung verabschieden und ist heute der defacto Standard im Internet. Mit ihr wurden insbesondere multimediale Funktionen wie ein Audio- und Videoplayer sowie weitere syntaktische HTML-Tags eingeführt.

### 2.1.2 CSS

HTML allein liefert auf der Ebene der Darstellung jedoch nur wenige, mittlerweile veraltete Möglichkeiten das Aussehen der Elemente zu beeinflußen. Aus diesem Grund wurde eine weitere Technologie namens Cascading Stylesheets eingeführt.

Cascading Stylesheets erlauben das Verändern des Aussehens eines HTML-Elements. So können mittels sogenannter Selektoren die Eigenschaften bzw CSS-Deklarationen eines oder mehrerer Elemente verändert werden. Zu diesen Eigenschaften gehören beispielsweise Typografie, Farbe und Layout.

Ein Selektor entspricht einem Suchmuster, welches zur Identifizierung von HTML-Elementen verwendet wird. Mit ihnen können Beispielsweise HTML-Elemente mit einer bestimmten Klasse, ID oder Elemente von einem gewissen Typ mit im CSS-Standard definierten CSS-Deklarationen überschrieben werden.

### 2.1.3 Javascript




## 2.2 Komponenten & Komponentenbibliothek

## 2.3 Herausforderungen bei der Erstellung von Komponenten

# 3. Stand der Technik (2 Seiten)

## 3.1. Technologien zur Erstellung von User Interface Komponenten

### 3.1.1. ReactJs

### 3.1.2. VueJs

### 3.1.3. Web Components

## 3.2. Typische Bestandteile einer Komponentenbibliothek

# 4. Theoretischer Teil (12 Seiten)

## 4.1 Beschreibung des Use Case: App-Landingpage

## 4.2 Anforderungen an die Komponentenbibliothek

### 4.2.1. Dokumentation von Komponenten

### 4.2.2. Bereitstellung einer Komponentenbibliothek

## 4.3 Auswahl der Komponenten zur Vertiefung

### 4.3.1. Card-Komponente

### 4.3.2. Slider-Komponente

### 4.3.3. Grid-Komponente

# 5. Methodik (8 Seiten)

## 5.1. Identifizierung von Komponenten mittels der “Atomic Design” Methode (3 Seiten)

## 5.2. CSS Namenskonvention für Komponenten mittels der “Block Element Modifier” Methode (BEM) (2 Seiten)

## 5.3. Verwendete Technologien und Werkzeuge zur Erstellung der Komponentenbibliothek (2 Seiten)

### 5.3.1. Lit.js

### 5.3.2. Sass

### 5.3.3. Webpack

### 5.3.4. Storybook

### 5.3.5. npm

### 5.3.6. GitHub / git

### 5.3.7. Github Pages

# 6. Ergebnisse (12 Seiten)

## 6.1 Komponenten: Atome, Moleküle und Organismen

## 6.2 Komponentenübergreifende Regeln und Funktionen

### 6.2.1. Farben

### 6.2.2. Typografie

### 6.2.3. Utilities

## 6.3 Komponenten

### 6.3.1. Card-Komponente

#### 6.3.1.1 Syntax und Semantik (HTML)

#### 6.3.1.2 Styling (CSS)

#### 6.3.1.3 Web Component (API)

#### 6.3.1.4 Dokumentation

### 6.3.2. Slider-Komponente

#### 6.3.2.1 Syntax und Semantik (HTML)

#### 6.3.2.2 Styling (CSS)

#### 6.3.2.3 Interaktion (JavaScript)

#### 6.3.2.4 Web Component (API)

#### 6.3.2.5 Dokumentation

### 6.3.3 Grid-Komponente

#### 6.3.3.1 Syntax und Semantik (HTML)

#### 6.3.3.2 Styling (CSS)

#### 6.3.3.3 Web Component (API)

#### 6.3.3.4 Dokumentation

## 6.4. Bereitstellung der Artefakte

### 6.4.1. Komponentenbibliothek

### 6.4.2. Dokumentation

# 7. Diskussion: Einsatz von Web Components gegenüber ReactJs und VueJs (6 Seiten)

# 8. Fazit (4 Seiten)
