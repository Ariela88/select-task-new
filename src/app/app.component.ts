import { Component, Input } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedCities: City[] = [];

  @Input() cities: City[] = [
    {
      regione: 'Liguria',
      id: 1,
      targa: 'GE',
      provincia: 'Genova',
      descrizione:
        "è un comune italiano di 560 455 abitanti, capoluogo dell'omonima città metropolitana, della regione Liguria e cuore di una vasta area urbana che include il territorio centrale ed i comuni rivieraschi della regione, nonché l'Oltregiogo, per circa 1,6 milioni di abitanti. È il più grande e popoloso comune ligure, il terzo del Nord Italia, il sesto del Paese ed il terzo comune metropolitano più esteso d'Italia.",
      nome: 'Genova',
      capoluogo: true,
      selected:false
    },
    {
      regione: 'Lombardia',
      id: 2,
      targa: 'MI',
      provincia: 'Milano',
      descrizione:
        "è un comune italiano di 1 363 411 abitanti, capoluogo della regione Lombardia e dell'omonima città metropolitana, centro di una delle più popolose aree metropolitane d'Europa; è inoltre il secondo comune più popoloso d'Italia (dopo Roma) e rientra tra le venti città più grandi dell'intera Europa.",
      nome: 'Milano',
      capoluogo: true,
      selected:false
    },
    {
      regione: 'Lazio',
      id: 3,
      targa: 'RO',
      provincia: 'Roma',
      descrizione:
        " è la capitale d'Italia. Inoltre è capoluogo dell'omonima città metropolitana e della regione Lazio. Il comune di Roma è dotato di un ordinamento amministrativo speciale, denominato Roma Capitale e disciplinato dalla legge dello Stato. Contando 2 745 777 abitanti è il comune più popoloso d'Italia e il terzo dell'Unione europea dopo Berlino e Madrid, mentre, con una superficie di 1287,36 km², è il comune più esteso d'Italia e dell'Unione europea, nonché la quinta città più estesa d'Europa dopo Istanbul, Mosca, Londra e San Pietroburgo. È inoltre il comune europeo con la maggiore superficie di aree verdi. Secondo la tradizione, Roma sarebbe stata fondata il 21 aprile 753 a.C. da Romolo (sebbene scavi recenti presso il Lapis niger mostrano insediamenti a due secoli prima); nel corso dei suoi tre millenni di storia, è stata la prima metropoli dell'Occidente, cuore pulsante di una delle più importanti civiltà antiche, che influenzò la società, la cultura, la lingua, la letteratura, l'arte, l'architettura, l'urbanistica, l'ingegneria civile, la filosofia, la religione, il diritto e i costumi dei secoli successivi. Luogo di origine della lingua latina, fu capitale dell'antico Stato romano, che estendeva il suo dominio su tutto il bacino del Mediterraneo e gran parte dell'Europa; poi dello Stato Pontificio, sottoposto al potere temporale dei papi; quindi del Regno d'Italia dal 1871 al 1946, poi della Repubblica Italiana. Per antonomasia è definita l'Urbe, Caput mundi e Città eterna.",
      nome: 'Roma',
      capoluogo: true,
      selected:false
    },
    {
      regione: 'Torino',
      id: 4,
      targa: 'TO',
      provincia: 'Torino',
      descrizione:
        "è un comune italiano di 843 514 abitanti, capoluogo della regione Piemonte e dell'omonima città metropolitana. Quarto comune italiano per popolazione e cuore di un'area metropolitana che conta circa 1,7 milioni di abitanti, Torino è il quarto complesso economico-produttivo del Paese (insieme a Milano e Genova componeva il triangolo industriale, centro dell'industrializzazione su larga scala dell'economia italiana alla fine del XIX secolo, e durante gli anni del boom economico) e costituisce uno dei maggiori poli universitari, artistici, turistici, scientifici e culturali d'Italia. Nel suo territorio sono inoltre presenti aree ed edifici inclusi in due beni protetti dall'UNESCO: alcuni palazzi e zone facenti parte del circuito delle residenze sabaude in Piemonte (patrimonio dell'umanità) e l'area delle Colline del Po (riserva della biosfera).",
      nome: 'Torino',
      capoluogo: true,
      selected:false
    },
  ];

 
  removeCity(city: City): void {
    const index = this.selectedCities.indexOf(city);
    if (index !== -1) {
      this.selectedCities.splice(index, 1);
      city.selected = false
    }
  }

}
