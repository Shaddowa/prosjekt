Prosjekt nettside : Em's nettside                       


--------------------------------------------------------------------------------Konsept-----------------------------------------------------------------------------------------------------------
Ønsker å lage en fin og enkel nettside med mye funksjonalitet og avanserte php scripts. Ideen er at man skal få et godt inntrykk av maten som serveres, få en god kundeopplevelse samtidig som at
det skal være brukervennlig og minimalistisk desig. Jeg henter litt inspirasjona av flere nettsider, inkludert : PINK FISH, MCDONNALDS, CHIPOTLE, STOCK RESTURANG, MINT.COM    
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


-------------------------------------------------------------------------------Spesifikkasjoner---------------------------------------------------------------------------------------------------
    Skal være dynamisk, slik at andre skjermer ikke får feil oppløsning på nettsiden

    Kunne betale på nettsiden, enten ved at man er kunde eller quick fix betaling

    Skal kunne legge igjen en tilbakemelding slik at andre på siden også får et inntrykk av kvaliteten på maten

    Bildekaruseller med de forskjellige rettene

    En Meny side hvor man kan se alt utvalget

    Lokasjon, vite hvor stedet befinner seg

    Åpningstider

    Kontakt oss

    Sosiale medier

    Forskjellige språk

    Delivery?

    Om resturanten og konseptet

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



-----------------------------------------------------------------------------Check List-----------------------------------------------------------------------------------------------------------

   Lage alt innholdet på siden (input : utvalget)   X

   Vise alt innholdet som ligger i en database på nettsiden. (halveis, X)

    Lage handlekurv systemet X

    Bildekarusell med de forskjellige rettene (CHECKLIST VER 2)

    Bestill online 

    ...

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




-------------------------------------------------------------------------------------Logg--------------------------------------------------------------------------------------------------------

10.05.2018 : LETT IMPLEMENTERING AV UTVALG PÅ HJEMMESIDEN : PROTOTYPE

Først vil jeg lage en funksjon i Js hvor det skal være lett å legge til det forskjellige utvalget på siden. Det skal være brukervennlig og lett og redigere.


 * Jeg har lagd et lett system hvor dataen av alle varer som legges til og de egenskapene den besitter blir lagret i et array med objekter, her er navnet på utvalget, prisen, beskrivelsen, type og kategori registrert. Senere skal jeg legge til slik at man kan laste opp et bilde og da vil bildet bli lastet opp i img foldere og man kan lett hente bildet til elementet med for løkker.*
 
 *Jeg hadde et lite problem med at når jeg la til textarea taggen så ble pristaggen tullet til slik at den enten viste NaN eller "europeisk", var litt usikker på hvordan jeg løste den, da det ikke så ut som noen klare feil i koden, så jeg ente opp med å endre litt hvor className skulle plasseres også hadde jeg textarea utenfor for løkken og registrert for seg selv. Etter at disse endringene ble gjort funket det igjen, så det var tydligvis noe som ble forstyrret mellom pris elementet og beskrivelses elementet.*

 *Nå er jeg ferdig med å kode for idag og det jeg har laget så langt er et system hvor man lett kan legge til nye elementer i ett array i form av objekter slik at det blir lett og assosiere de forskjellige elimentene med verdiene den besitter. Samtidig så vil varene vises i en tabell hver gang man legger til nye elementer. Da vil en ny rad bli lagd og informasjonen vil automatisk bli puttet i riktig kolonne. Jeg slet litt med hvordan jeg skulle få til tabellen, men jeg endte opp med å ha en preloaded <th> og at dette aldri skulle endre, dermed skulle nye rader bli lagt til hver gang man trykket på legg til knappen. Brukte text align center for å midstille teksten og har tenkt til å legge en fjern knapp på hver rad for å slette raden. Til nå lurer jeg på om det lureste er å lage elementene i JS eller om jeg bruker innerHTML for å få til det ønskede resultatet.*


11.05.2018 : LETT IMPLEMENTERING AV UTVALG PÅ HJEMMESIDEN : PROTOTYPE - FORTSETTELSE

    Idag vil jeg bli ferdig med å lage tabellen perfekt og få en fjerne knapp slik at man kan redigere de varene som er i listen av utvalg

    *Fikset systemet, nå kan man fjerne det som er lagret i utvalgs arrayen ved å trykke på knappen ved siden av som er linket til selve objektet i arrayen. Dermed vil tabellen oppdateres og den riktige oppdaterte tabellen vil bli vist.*


    *viste seg at det var en bug hvor systemet tullet med hva som skulle fjernes og ikke så det ble feil i rekkefølgen eller antall ting som ble fjernet. For å løse problemet, måtte jeg console logge hele prosessen og tenke logisk, isteden for å lage en og en linje hver gang man trykket på legg til knappen gjorde jeg slik at hele tabellen ble lagd hver gang man trykket på knappen. Dette er med på å eliminere mulige bugs senere i programmet når det kommer til rekkefølgen på tingene. Har en legg til vare funksjon og en oppdater funksjon som ser helt lik ut, har lyst til å gjøre programmet mer simpelt ved å knytte dem sammen.*

    *Fikset det, nå ser alt ut til å kjøre som det skal*


    EXSPANSIONS: Jeg tenker at jeg kan legge til mere informasjon i objektene slika at det blir lettere å finne informasjonen linket til de forskjellige rettene/annet. Dette kan være: RabattPris
    Bilde(r), Allergier.

    Kan også ha en "Er du sikker på at du vil slettet dette objektet knapp";


16.05.2018: HANDLEKURV FUNKSJON PROTOTYPE 1

    Idag har jeg lyst til å gjøre det mulig og legge varer i en handlekurv hvor prisen blir vist som samlet total pris og mulighet for å redigere innholdet, Tenker at dette ikke skal være en nettside som lagrer ønsker, fordi det skal være "hva har jeg lyst på her og nå". Handle kurven skal senere kunne betales for ved at man bare oppgir informasjon slik at vi kan godta bestillingen.

    *Idag gjorde jeg slik at når varer ble lagt til i systemet ble litt grunnleggende informasjon gitt om produktet. En legg til i handlekurven knapp ble generert for hver vare som ble laget og når man trykket på knappen ble summen av varen lagt til total summen og når man holder musen over den blå knappen så vil man se hva slags vare man har i vognen, hvilken pris hver av dem koster og hva totalprisen er. Når man fjerner musen fra knappen, forsvinner lista.

    ERROR: Hadde litt problemer med først og fremst og posisjonere divEl, men jeg endte opp med å Appende det til en container som var under knappen slik at den blå knappen aldri ble bortgjemt av andre elementer.

    Hadde også ett problem hvor når jeg fjernet musen fra knappen, så skulle divEl forsvinne ut ifra en loop i systemet, men det endte opp med at det ble feilkalibrering og det var alltid en eller flere objekter som ikke ble fjernet fra handlevogns display listen. Dette løste jeg ved å fjerne hele container elementet en gang, slik at systemet slapp og telle alle div elementene og få en error når den ikke fant det det lette eller eller at den "hoppet over" noen. 

    Har også litt problemer med når listen skal forsvinne for har lyst til å legge til en knapp på hver objekt hvor man eventuelt kan legge til eller fjerne et antall. Har enda ikke funnet ut av hvordan jeg vil ha det.
    *







    Prøver å legge til et system hvor alle varene som befinner seg i utvalgslisten blir vist som en egen boks på nettsiden. Her vil jeg at bilde og eventuelt info som handler om varen blir generert automatisk. Til nå har jeg fått til å få boksene opp på skjermen og de fjernes når noe på lista blir fjernet, men den fyller ikke helt ut den negative plassen som jeg ønsker. prøver å løse det med flexbokser.


    25.05.2018 LEGGE TIL BESTILLING PROTOTYPE

    Idag ønsker jeg å legge til et raskt system som lar deg kjøpe de varene man legger i handlekurven ved å fylle ut et skjema med informasjon om kjøperen. For nå ønsker jeg et simpelt system som jeg kan forbedre i fremtiden. 

    Begynnte å legge til en lytterfunksjon som sier at når handlekurven har varer kan man begynne med betalingsprosessen. For nå er ikke logikken 100% solid så jeg må endre på koden men jeg vet hva jeg ønsker å gjøre. 

    Fant ut en måte å lagre nøkkelnavnene på: Object.keys(variabel[posisjon])


    04.06.2018 FORTSETTELSE PÅ Å LEGGE TIL BESTILLING

    Idag skal jeg fortsette med der jeg slapp, men ønsker å forenkle tankene mine så det funker uten å tenke noe veldig på optimiseringsdelens

    Klarte det på en effektiv måte, lagde en lopp som gikk gjennom en liste med objekter
    neste gang må jeg kontrolere at alle feltene er fylt ut og at når man "betaler skal bestillingen stå som en svarsetning for kundene og resturanten".

---------------------------------------------------------------------------------------------------------------------------------------CHECKLIST VER 2 -----------------------------------------------------------

    Starte med selve nettsiden

    Designe layouten

    Tenke på brukervennlighet

    Hva skal være php hva skal være js?

    Implementere alle de forskjellige funksjonene jeg har



