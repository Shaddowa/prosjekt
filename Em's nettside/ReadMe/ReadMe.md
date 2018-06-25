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

-----------------------------------------------------------------------------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------Logg------------------------------------------------------------------

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


    07.06.2018 FORBEDRE HANDLEKURVSYSTEMET OG LEGGE TIL BETALINGSMELDING

    Idag ønsker jeg og vise flere varer grupert i handlekurv systemet slik at X2 lakseburger (pris) vises isteden for lakseburger ... lakseburger. Jeg vil også få til en konfirmasjons melding som viser kundens bestilling.


    08.06.2018 UPDATE
    Idag fikset jeg med hjelp av lærerne mine handlekurv systemet. Jeg begynte med å legge til antall i handlekurvsystemet og sammenlignet ID til varen man trykket på med ID til varen i handlelkurven for å sjekke om man allerede hadde varene. 

    Var en bug om hvordan jeg skulle øke antallet med de varene som allerde lå i handlekurven uten å skrive mye kode. Antallet var først ikke definert og lurte på om jeg burde lagre alle verdiene i et array for så å inkremere dem, men syntes dette var tungt. Vi fant en løsning ved

    
    if (idHK == Number(handlekurvEl[i].id)) {
        lagttil = true;
                
        handlekurvEl[i].antall += 1;
                
        break;
              
    }  

    Nå gjenstår betalingsmeldingen igjen!


    -----------------------------------------------------------------------Logg-----

    21.06.2018 BILDEKARUSELL PROTOTYPE

    Idag vill jeg fullføre bildekarusellen for nettsiden og legge til en kundebeskjed. Jeg bruker eksempelbilde jeg tok av Emma.

    Da jeg skulle lage bildekarusellen ønsket jeg og lage den uten å se på tidligere eksempler for å prøve å gjøre det utenatt. Klarte å lage en ødedlagt versjon av noe som lignet på en bildekarusell men bildene oppførte seg ikke som ønsket.

    For å gjøre det ordentlig brukte jeg tidligere eksempler, og nå skal jeg prøve å beskrive hvordan koden fungerer slik at jeg kan bruke det senere uten å se på tidligere kode.


    ---------------------------------------------------------------------------------------------------------------------------------
    | Jeg lagde først en beholder for bildene som skulle være i  karusellen                                                         |
    | html : <div id="bildekarusell>                                                                                                |
    |         </div>                                                                                                                |
    |                                                                                                                               |
    | I Js lagde jeg en liste med objekter hvor alle bildedne lå og utifra hvor mange elementer som lå i listen, skulle like mange  | div elementer bli lagt til karusellen.
    
      Js: for(var i = 0; i < bilder.lenght; i++){
      Lag div elementer og legg til karusellen med samme className    
      }

     Etter det lagde jeg en variabel som skulle holde alle disse div elementene med dems className og sa at bildene[i] .style.backgroundImage = arrayets bilder[i].src. I samme for løkke sjekket jeg om hvis i ikke var 0, så skulle de  settes til display = "none".
    
      Etter det definerte jeg noen variabler:  synligBilde = 0, nesteBilde; og tid på 5000.
    
     Til slutt lagde jeg selve funksjonen som skulle flytte bildene. Denne funksjonen sa at om synligBilde(0) === bildene.length - 1 (antallElementer), så skulle neste bilde = 0.  om dette ikke var tilfellet så skulle neste bilde = synligBilde + 1 (1), denne ville øke etterhvert. 
     Til slutt måtte det neste bildet gjøres klar til å gå inn, mens det allerede synlige bilde måtte gå ut av rammen. Når denne  syklusen er over, skal det synlige bilde ha lik verdi som det neste bildet og funksjojnen skal gjenta seg med funksjonen setTimeout.
    
    Siden det første bilde allerede hadde index 0 så kunne vi si at neste bilde hadde index 1 i bildene arrayet. Detter er viktig logikk for at rekkefølgen blir riktig!
    ---------------------------------------------------------------------------------------------------------------------------------
    Nå skal jeg legge til beskrivelsen som er angitt til hvert bilde.


    23.06.2018 STARTE MED NETTSIDEN

    Idag skal jeg starte med nettsiden. Har fått design ide av ragnhild og skal prøve så godt jeg kan og etterligne hva hun har lagd. Har allerede laget en versjon av bakgrunnen jeg brukte med bilde redigeringsprogram, men jeg tror jeg bør gjøre bilde bedre ved at det ikke er ujevne linjer, men profesjonelle glatte linjer. Dette skal jeg jobbe med.


    Fikset en nettside versjon av det ragnhild hadde lagd. Den ble ganske lignende, men la ikke til OM OSS bilde delen enda fordi jeg skal høre om det er det vi bør putte på startsiden. Det var ingen store bugs og var ganske greit og enkelt og kode. Må ha god orden på php filene mine og css filene mine.

    Det eneste som ikke er "bra" med designet er at font og grafikk ikke er ordentlig gjort, men bare raskt funnet for å se det visuelt for å sjekke hvordan viben blir.



25.06.2018 LEGGE TIL KONTAKT OSS SEKSJONEN

idag vil jeg legge til kontakt oss seksjonen, som vil sende en e-post til emailen min. Koden skrev jeg ved hjelp av udemy klassen php. Derfor ingen personalisering i e-mail funksjonen.

Jeg har nå lagt til kontakt siden på siden. Denne funker ikke helt enda fordi hadde problemer med php-en. Men jeg fikset også slik at vi kan linke til ulike CSS filer og ulike paths for filer utifra hvor i programmet man er. Dette er kritisk, for om vi ikke definerer disse variablene vil nettsiden ikke fungere. 
